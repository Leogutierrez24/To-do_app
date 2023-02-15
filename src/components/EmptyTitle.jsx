import React from "react";
import "./assets/styles/emptyTitle.css";

export function EmptyTitle({
    titleText,
    titleClass,
    imgIcon,
    imgClass,
    imgAlt,
}) {
    return(
        <div className="emptyTitle-container">
            <h3 className={titleClass ? `emptyTitle-text ${titleClass}` : "emptyTitle-text"}>
                {titleText}
            </h3>
            <img 
                src={imgIcon}
                alt={imgAlt}
                className={imgClass ? `emptyTitle-icon ${imgClass}` : "emptyTitle-icon"} 
            />
        </div>
    );
}