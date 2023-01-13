import React from "react";
import "./assets/styles/todoAddButton.css";
import addTask from "./assets/icons/plus-lg.svg";

export function TodoAddButton(){
    const handleAddTaskBtn = () => {
        console.log("Modal open");
    }

    return(
        <button className="addTask-button">
            <img src={addTask} alt="add task" className="addTask-icon" onClick={handleAddTaskBtn} />
        </button>
    );
}