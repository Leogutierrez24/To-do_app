import React from "react";
import { EmptyTitle } from "./EmptyTitle";
import emptyTasks from "./assets/icons/journal-x.svg";

export function EmptyCompletedTasks(){
    return(
        <>
            <EmptyTitle 
                titleText={"There are no completed tasks to show"}
                titleClass={"noCompletedTask"}
                imgIcon={emptyTasks}
                imgAlt={"empty tasks icon"}
                imgClass={"emptyTasks-icon"}
            />
        </>
    );
}