import React from "react";
import { EmptyTitle } from "./EmptyTitle";
import smileEmoji from "./assets/icons/emoji-smile.svg";

export function AddNewTodo(){
    return(
        <>
            <EmptyTitle 
                titleText={"Create a new task!!!"}
                titleClass={"addNewTask"}
                imgIcon={smileEmoji}
                imgAlt={"add task icon"}
                imgClass={"addNewTask-icon"}
            />
        </>
    );
}