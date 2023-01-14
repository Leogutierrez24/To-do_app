import React from "react";
import { useTaskContext } from "./context/TaskContext";
import "./assets/styles/todoList.css";

export function TodoList({children}){
    

    return(
        <ul className="taskList">
            {children}
        </ul>
    );
}