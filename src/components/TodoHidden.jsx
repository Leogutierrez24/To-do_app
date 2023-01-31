import React from "react";
import "./assets/styles/todoHidden.css";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

export function TodoHidden({
        handleHiddenSection, 
        hiddenSection, 
        tasksCompleted, 
        resetTask, 
        deleteCompletedTask
    }){
        
    return(
        <section className="hidden-section">
            <button type="button" className="hidden-button" onClick={handleHiddenSection}>{!hiddenSection ? "show" : "hide"} completed tasks</button>
            {
                hiddenSection && <TodoList>
                                {tasksCompleted?.map((task) => {
                                            return <TodoItem 
                                                key={task.id} 
                                                title={task.title}
                                                status={task.status}
                                                onComplete={resetTask}
                                                onDelete={deleteCompletedTask}
                                            />})}
                                </TodoList>                         
            }
        </section>
    );
}