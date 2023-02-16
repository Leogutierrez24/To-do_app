import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundIcon from "../../assets/icons/emoji-dizzy.svg";
import "../../assets/styles/notFoundPage.css";

export function NotFoundPage(){
    const navigate = useNavigate();

    return(
        <div className="errorPage-container">
            <h1 className="errorNumber">404</h1>
            <img src={notFoundIcon} alt="not found icon" className="errorImg" />
            <h3 className="errorName">Page not found</h3>
            <p className="errorDescription">The page you are looking for doesn't exist!</p>
            <button 
                type="button"
                title="back home"
                className="backHome-button"
                onClick={() => navigate("/")}
            >
                Go Home
            </button>
        </div>
    );
}