import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTasks(){
    const { 
        item: tasks, 
        error,
        loading, 
        saveItem: saveTask,
        deleteItem: deleteTask,
        updateItem: updateTask,
        getItem: getTask,
    } = useLocalStorage("TASKS_V1", []);

    const { 
        item: completedTask,
        saveItem: saveCompletedTask,
        deleteItem: deleteCompletedTask,
        updateItem: updateCompletedTask,
        getItem: getCompletedTask,
    } = useLocalStorage("CMPTASKS_V1", []);

    const [taskValue, setTaskValue] = useState("");

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

    const addTask = (text) => {
        const newTask = {
            title: text,
            status: false,
            id: Date.now()
        };

        saveTask(newTask);
    }

    const completeTask = (id) => {
        updateTask(id, "status", true);
        saveCompletedTask(getTask(id));
        deleteTask(id);
    }

    const removeTask = (id) => {
        deleteTask(id);
    }

    const editTask = (id, newText) => {
        updateTask(id, "title", newText);
    }

    const resetTask = (id) => {
        updateCompletedTask(id, "status", false);
        saveTask(getCompletedTask(id));
        deleteCompletedTask(id);
    }

    const removeCompletedTask = (id) => {
        deleteCompletedTask(id);
    }

    const handleHiddenSection = () => setHiddenSection(prevState => !prevState);

    return {
            totalTasks,
            completedTasks,
            loading,
            error,
            taskValue,
            searchedTasks,
            hiddenSection,
            tasksCompleted,
            addTask,
            completeTask,
            removeTask,
            resetTask,
            editTask,
            setTaskValue,
            handleHiddenSection,
            removeCompletedTask,
            getTask,
        };
}