import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

function TaskProvider({children}){
    const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage("TASKS_V1", []);
    const { item: completedTask, saveItem: saveCompletedTask} = useLocalStorage("CMPTASKS_V1", []);

    const [taskValue, setTaskValue] = useState("");

    const [modalStatus, setModalStatus] = useState(false);
    const [hiddenSection, setHiddenSection] = useState(false);

    const completedTasks = tasks.filter(task => !!task.status).length;
    const totalTasks = tasks.length;

    let searchedTasks = [];
    let tasksCompleted = [...completedTask];

    if(taskValue.length <= 0){
        searchedTasks = tasks;
    } else {
        searchedTasks = tasks.filter(task => {
            const taskText = task.title.toLocaleLowerCase();
            const searchText = taskValue.toLocaleLowerCase();
            
            return taskText.includes(searchText);
        });
    }

    const completeTask = (title) => {
        let updatedTasks = [...tasks];
        const taskIndex = updatedTasks.findIndex(task => task.title === title);

        updatedTasks[taskIndex].status = true;
        let taskCompleted = [...completedTask];
        taskCompleted.push(updatedTasks[taskIndex]);
        deleteTask(title);
        saveCompletedTask(taskCompleted);
    }

    const deleteTask = (title) => {
        let updatedTasks = [...tasks];
        const taskIndex = updatedTasks.findIndex(task => task.title === title);

        updatedTasks.splice(taskIndex, 1);
        saveTasks(updatedTasks);
    }

    const addTask = (text) => {
        let updatedTasks = [...tasks];

        updatedTasks.unshift({
            title: text,
            status: false,
            id: Date.now()
        });

        saveTasks(updatedTasks);
    }

    const resetTask = (title) => {
        let hiddenTasks = [...completedTask];
        const taskIndex = hiddenTasks.findIndex(task => task.title === title);

        hiddenTasks[taskIndex].status = false;
        let updatedTasks = [...tasks];
        updatedTasks.unshift(hiddenTasks[taskIndex]);

        hiddenTasks.splice(taskIndex, 1);
        saveTasks(updatedTasks);
        saveCompletedTask(hiddenTasks);
    }

    const deleteCompletedTask = (title) => {
        let hiddenTasks = [...completedTask];
        const taskIndex = hiddenTasks.findIndex(task => task.title === title);

        hiddenTasks.splice(taskIndex, 1);
        saveCompletedTask(hiddenTasks);
    }

    const handleModal = () => setModalStatus(prevState => !prevState);

    const handleHiddenSection = () => setHiddenSection(prevState => !prevState);

    return(
        <TaskContext.Provider value={{
            totalTasks,
            completedTasks,
            taskValue,
            setTaskValue,
            error,
            loading,
            searchedTasks,
            completeTask,
            deleteTask,
            handleModal,
            modalStatus,
            addTask,
            handleHiddenSection,
            hiddenSection,
            tasksCompleted,
            resetTask,
            deleteCompletedTask
        }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;