import React from "react";
import { useTaskContext } from "./context/TaskContext";
import "./assets/styles/todoCounter.css";

export function TodoCounter(){
    const { totalTasks } = useTaskContext();

    return(
        <h2 className="taskCounter__title">
            {totalTasks !== 0 && `You have ${totalTasks} task pending!`}
            {totalTasks === 0 && "You don't have any task to complete."}
        </h2>
    );
}