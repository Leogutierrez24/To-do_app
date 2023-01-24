import React from "react";
import titleIcon from "./assets/icons/card-checklist.svg";
import "./assets/styles/todoHeader.css";

export function TodoHeader({ children, loading }){
    
    return(
        <header className="top-bar">
            <div className="top-bar_hero">
                <h1 className="top-bar__title">Task List</h1>
                <div className="top-bar__image-container">
                    <img src={titleIcon} alt="Task title icon" className="titleIcon" />
                </div>
            </div>
            { React.Children.toArray(children).map((child) => React.cloneElement(child, { loading }))}
        </header>
    );
}