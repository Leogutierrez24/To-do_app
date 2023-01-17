import React from "react";
import "./assets/styles/addNewTodo.css";
import smileEmoji from "./assets/icons/emoji-smile.svg";

export function AddNewTodo(){
    return(
        <div className="addNewTask-container">
            <h3>Create a new task!!!</h3>
            <img src={smileEmoji} alt="add todo emoji" className="addnew-emoji" />
        </div>
    );
}