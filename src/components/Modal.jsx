import React from "react";
import { createPortal } from "react-dom";
import "../components/assets/styles/modal.css";

export function Modal({ children }){
    return createPortal(
        <div className="modal-container">
            {children}
        </div>,
        document.getElementById("modal")
    );
}