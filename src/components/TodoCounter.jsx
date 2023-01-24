import React from "react";
import "./assets/styles/todoCounter.css";

export function TodoCounter({ totalTasks, loading }){
    return(
        <h2 className={`${loading ? "taskCounter__title onLoading" : "taskCounter__title"}`}>
            {loading && <span className="textLoading"></span>}
            {(!loading && totalTasks !== 0) && `You have ${totalTasks} task pending!`}
            {(!loading && totalTasks === 0) && "You don't have any task to complete."}
        </h2>
    );
}