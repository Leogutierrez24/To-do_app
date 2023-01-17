import React from "react";
import winkEmoji from "./assets/icons/emoji-wink.svg";
import "./assets/styles/emptyComponent.css";

export function EmptyComponent(){
    return(
        <div className="empty-container">
            <h3>Nothing to show, please search again!</h3>
            <img src={winkEmoji} alt="wink emoji" className="empty-emoji" />
        </div>
    );
}