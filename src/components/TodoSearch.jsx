import React from "react";
import searchIcon from "./assets/icons/search.svg";
import "./assets/styles/todoSearch.css";

export function TodoSearch(){
    return(
        <section className="searchBar">
            <input type="text" placeholder="Cebolla" className="searchInput" />
            <div className="searchIcon__container">
                <img src={searchIcon} alt="search icon" className="searchIcon" />
            </div>
        </section>
    );
}