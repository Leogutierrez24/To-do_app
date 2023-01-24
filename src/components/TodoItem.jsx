import React, { useRef } from "react";
import checkIcon from "./assets/icons/check-lg.svg";
import deleteIcon from "./assets/icons/x.svg";
import resetIcon from "./assets/icons/arrow-counterclockwise.svg";
import "./assets/styles/todoItem.css";

export function TodoItem(props){
    const textRef = useRef(null);

    const handleCompleteTaskBtn = () => props.onComplete(props.title);

    const handleDeleteTaskBtn = () => props.onDelete(props.title);

    const showContent = () => {
        textRef.current.classList.toggle("showContent");
    }

    return(
        <li className={`taskContainer ${!props.status ? "toComplete" : "completed"}`}>
            <div className="taskContent__left">
                <button className="checkButton" onClick={handleCompleteTaskBtn}>
                    <img src={!props.status ? checkIcon : resetIcon } alt={!props.status ? "check icon" : "reset icon"} className="checkButton__icon" />
                </button>
            </div>
            <div className="taskContent__middle">
                <p className="taskDescription" ref={textRef} onClick={showContent}>{props.title}</p>
            </div>
            <div className="taskContent__right">
                <button className="deleteButton" onClick={handleDeleteTaskBtn}>
                    <img src={deleteIcon} alt="delete icon" className="deleteButton__icon" />
                </button>
            </div>
        </li>
    );
}