import React from "react";
import "./assets/styles/todoFooter.css";

export function TodoFooter({ children }){
    return(
        <footer className="bottomBar">
            { children }
        </footer>
    );
}