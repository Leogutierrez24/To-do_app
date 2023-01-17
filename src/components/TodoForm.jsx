import React, { useState } from "react";
import { useTaskContext } from "./context/TaskContext";
import "./assets/styles/todoForm.css";

export function TodoForm(){
    const { addTask, handleModal } = useTaskContext();
    const [newTaskValue, setNewTaskValue] = useState("");

    const handleTextarea = (e) => setNewTaskValue(e.target.value);

    const cancelTask = () => handleModal();

    const onSubmit = (e) => {
        e.preventDefault();
        addTask(newTaskValue);
        handleModal();
    }

    return(
        <form className="addTask-form" onSubmit={onSubmit}>
            <label htmlFor="textInput">Add a new task to your list:</label>
            <textarea name="" id="textInput" cols="30" rows="10" placeholder="Ganar la cuarta..." value={newTaskValue} onChange={handleTextarea} ></textarea>
            <div className="addTask-form__btn-area">
                <button type="button" onClick={cancelTask} className="addTask-form__btn-cancel">
                    Cancel
                </button>
                <button type="submit" className="addTask-form__btn-add">
                    Add Task
                </button>
            </div>
        </form>
    );
}