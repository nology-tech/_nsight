import React from 'react';
import "./searchbox.scss";
import search from "../../assets/icons/search.svg";

const Searchbox = (props) => {
    
    const { searchTerm, handleSearch } = props;

    return (
        <div className="searchbar">
            <input type="text" value={searchTerm} onChange={handleSearch} />
            <img src={search} alt="Search icon" className="searchbar__icon" />
        </div>
    )
}

export default Searchbox
