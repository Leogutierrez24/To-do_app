import React from "react";
import addTask from "./assets/icons/plus-lg.svg";
import "./assets/styles/todoAddButton.css";

export function TodoAddButton({ onClick }){
    return(
        <button className="addTask-button" onClick={onClick}>
            <img src={addTask} alt="add task" className="addTask-icon" />
        </button>
    );
}