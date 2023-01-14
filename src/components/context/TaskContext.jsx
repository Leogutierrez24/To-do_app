import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

function TaskProvider({children}){
    const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage("TASKS_V1", []);
    const [taskValue, setTaskValue] = useState("");

    const completedTasks = tasks.filter(task => !!task.status).length;
    const totalTasks = tasks.length;

    let searchedTasks = [];

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
        saveTasks(updatedTasks);
    }

    const deleteTask = (title) => {
        let updatedTasks = [...tasks];
        const taskIndex = updatedTasks.findIndex(task => task.title === title);

        updatedTasks.splice(taskIndex, 1);
        saveTasks(updatedTasks);
    }

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
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;