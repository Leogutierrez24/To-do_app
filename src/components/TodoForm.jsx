import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/styles/todoForm.css";

export function TodoForm({ formTitle, defaultTaskText, buttonText, submitAction }){
    const [newTaskValue, setNewTaskValue] = useState(defaultTaskText || "");
    const navigate = useNavigate();

    const handleTextarea = (e) => setNewTaskValue(e.target.value);

    const cancelTask = () => navigate("/");

    const onSubmit = (e) => {
        e.preventDefault();
        submitAction(newTaskValue);
        navigate("/");
    }

    return(
        <form className="addTask-form" onSubmit={onSubmit}>
            <label htmlFor="textInput">{formTitle}</label>
            <textarea 
                name="" 
                id="textInput" 
                cols="30" 
                rows="10" 
                placeholder="Ganar la cuarta..." 
                value={newTaskValue} 
                onChange={handleTextarea} 
            />
            <div className="addTask-form__btn-area">
                <button type="button" onClick={cancelTask} className="addTask-form__btn-cancel">
                    Cancel
                </button>
                <button type="submit" className="addTask-form__btn-add">
                    {buttonText}
                </button>
            </div>
        </form>
    );
}