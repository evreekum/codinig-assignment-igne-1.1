import React, {useState} from "react";


function SearchBar({setKentekenHandler}) {
    const [query, setQuery] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
        setKentekenHandler(query);
    }

    return (
        <span className="searchbar">
            <form onSubmit={onFormSubmit}>
                <input
                    type="search"
                    name="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="6-XXH-68"
                />
                <button
                    type="submit"
                    onSubmit={onFormSubmit}
                >
                send
                </button>
            </form>
        </span>
    )
}

export default SearchBar;