import React from "react";
import { EmptyTitle } from "./EmptyTitle";
import winkEmoji from "./assets/icons/emoji-wink.svg";

export function EmptyComponent(){
    return(
        <>
            <EmptyTitle 
                titleText={"Nothing to show, please search again!"}
                titleClass={"notMatchText"}
                imgIcon={winkEmoji}
                imgAlt={"wink icon"}
                imgClass={"notMatch-icon"}
            />
        </>
    );
}