import React from "react";

export function TodoBody({ children }){
    return(
        <section className="taskList-container">
            {children}
        </section>
    );
}