import React from "react";
import { useTaskContext } from "./context/TaskContext";
import "./assets/styles/todoCounter.css";

export function TodoCounter(){
    const { totalTasks, completedTasks } = useTaskContext();

    return(
        <h2 className="taskCounter__title">Van {completedTasks} de {totalTasks} tareas completas!!!</h2>
    );
}