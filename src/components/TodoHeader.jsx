import React from "react";
import titleIcon from "./assets/icons/card-checklist.svg";
import "./assets/styles/todoHeader.css";

export function TodoHeader(){
    return(
        <header className="top-bar">
            <h1 className="top-bar__title">Task List </h1>
            <img src={titleIcon} alt="Task title icon" className="titleIcon" />
        </header>
    );
}