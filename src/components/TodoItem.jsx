import React from "react";
import checkIcon from "./assets/icons/check-lg.svg";
import deleteIcon from "./assets/icons/x.svg";
import "./assets/styles/todoItem.css";

export function TodoItem(props){
    return(
        <li className="taskContainer">
            <div className="taskContent__left">
                <button className="checkButton">
                    <img src={checkIcon} alt="" className="checkButton__icon" />
                </button>
            </div>
            <div className="taskContent__middle">
                <p className="taskDescription">{props.title}</p>
            </div>
            <div className="taskContent__right">
                <button className="deleteButton">
                    <img src={deleteIcon} alt="" className="deleteButton__icon" />
                </button>
            </div>
        </li>
    );
}