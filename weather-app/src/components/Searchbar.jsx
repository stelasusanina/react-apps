import React from "react";

export default function Searchbar({serach, setSearch, handleSearch}) {
    return (
        <div className="search-engine">
            <input
                type = "text"
                placeholder="Enter a city"
                value={serach}
                name = "serach"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}