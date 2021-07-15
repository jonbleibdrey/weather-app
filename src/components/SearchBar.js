import React from "react";
import SearchResult from "./SearchResult";
import "../css/SearchBar.css";

const SearchBar = ({
  weatherIcon,
  toggleSearch,
  searchResult,
  handleSubmit,
  search,
  err,
  setSearch,
  clear,
}) => {
  return (
    <>
      {toggleSearch ? (
        <div className="searchBar-container">
          <button className="searchBar-buttonClear" onClick={clear}>
            X
          </button>
          <form onSubmit={handleSubmit}>
            <input
              className="searchBar-input"
              type="text"
              value={search}
              placeholder="State please!"
              onChange={(e) => setSearch(e.target.value.toUpperCase())}
            />
            <button className="searchBar-button" type="submit">
              Get Weather
            </button>
            <strong>
              *There was to much data to parse for me to do each and every
              county. So for now its only States*
            </strong>
          </form>
          {err === true ? "Put in a state" : " "}
          {searchResult.length === 0 ? (
            <div> </div>
          ) : (
            <SearchResult
              weatherIcon={weatherIcon}
              searchResult={searchResult}
            />
          )}
        </div>
      ) : (
        <div> </div>
      )}
    </>
  );
};

export default SearchBar;
