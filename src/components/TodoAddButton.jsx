import React from "react";
import addTask from "./assets/icons/plus-lg.svg";
import "./assets/styles/todoAddButton.css";

export function TodoAddButton({ handleModal, modalStatus }){
    return(
        <button className="addTask-button" onClick={handleModal}>
            <img src={addTask} alt="add task" className={!modalStatus ? "addTask-icon" : "addTask-icon clicked"} />
        </button>
    );
}