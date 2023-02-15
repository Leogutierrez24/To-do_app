import React from "react";
import "./assets/styles/todoHidden.css";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { EmptyCompletedTasks } from "./EmptyCompletedTasks";

export function TodoHidden({
        handleHiddenSection, 
        hiddenSection, 
        tasksCompleted, 
        resetTask, 
        removeCompletedTask
    }){
        
    return(
        <section className="hidden-section">
            <button type="button" className="hidden-button" onClick={handleHiddenSection}>{!hiddenSection ? "show " : "hide "}completed tasks</button>
            {(hiddenSection && tasksCompleted?.length === 0) && <EmptyCompletedTasks />}
            {(hiddenSection && tasksCompleted?.length !== 0) && <TodoList>
                                {tasksCompleted?.map((task) => {
                                            return <TodoItem 
                                                key={task.id} 
                                                id={task.id}
                                                title={task.title}
                                                status={task.status}
                                                onComplete={resetTask}
                                                onDelete={removeCompletedTask}
                                            />})}
                                </TodoList> 
            }
        </section>
    );
}