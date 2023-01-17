import React from "react";
import "./assets/styles/todoList.css";

export function TodoList({ children }){
    return(
        <ul className="taskList">
            {children}
        </ul>
    );
}