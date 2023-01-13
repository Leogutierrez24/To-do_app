import React from "react";
import "./assets/styles/todoCounter.css";

export function TodoCounter({ total, completed }){


    return(
        <h2 className="taskCounter__title">Van {completed} de {total} tareas completas!!!</h2>
    );
}