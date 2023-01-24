import React from "react";
import searchIcon from "./assets/icons/search.svg";
import "./assets/styles/todoSearch.css";

export function TodoSearch({ taskValue, setTaskValue, loading }){
    const onSearchValueChange = (e) => setTaskValue(e.target.value);

    return(
        <section className="searchBar">
            <div className="searchBar__container">
                <input type="text" placeholder="Find a task..." className="searchInput" onChange={onSearchValueChange} value={taskValue} disabled={loading} />
                <div className={`${loading ? "searchIcon__container onLoading" : "searchIcon__container"}`}>
                    <img src={searchIcon} alt="search icon" className="searchIcon" />
                </div>
            </div>
        </section>
    );
}