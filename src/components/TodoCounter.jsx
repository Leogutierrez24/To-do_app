import React from "react";
import { useTaskContext } from "./context/TaskContext";
import "./assets/styles/todoCounter.css";

export function TodoCounter(){
    const { totalTasks, completedTasks } = useTaskContext();

    return(
        <h2 className="taskCounter__title">You have {completedTasks} of {totalTasks} task to complete!</h2>
    );
}