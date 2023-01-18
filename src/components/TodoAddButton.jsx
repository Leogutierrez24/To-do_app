import React from "react";
import { useTaskContext } from "./context/TaskContext";
import addTask from "./assets/icons/plus-lg.svg";
import "./assets/styles/todoAddButton.css";

export function TodoAddButton(){
    const { handleModal, modalStatus } = useTaskContext();

    return(
        <button className="addTask-button" onClick={handleModal}>
            <img src={addTask} alt="add task" className={!modalStatus ? "addTask-icon" : "addTask-icon clicked"} />
        </button>
    );
}