import React from "react";
import "./assets/styles/todoAddButton.css";
import addTask from "./assets/icons/plus-lg.svg";

export function TodoAddButton(){
    return(
        <button className="addTask-button">
            <img src={addTask} alt="add task" className="addTask-icon" />
        </button>
    );
}