import React from "react";
import { useTaskContext } from "./context/TaskContext";
import searchIcon from "./assets/icons/search.svg";
import "./assets/styles/todoSearch.css";

export function TodoSearch(){
    const { taskValue, setTaskValue } = useTaskContext();

    const onSearchValueChange = (e) => {
        setTaskValue(e.target.value);
    }

    return(
        <section className="searchBar">
            <div className="searchBar__container">
                <input type="text" placeholder="Cebolla" className="searchInput" onChange={onSearchValueChange} />
                <div className="searchIcon__container">
                    <img src={searchIcon} alt="search icon" className="searchIcon" />
                </div>
            </div>
            <p className="searchText">{taskValue}</p>
        </section>
    );
}