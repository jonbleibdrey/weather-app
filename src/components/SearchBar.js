import axios from "axios";
import React, { useState } from "react";
import SearchResult from "./SearchResult";
require("dotenv").config();

const SearchBar = ({ weatherIcon }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [err, setErr] = useState(false);
  const [showResults, setShowResults] = useState(false);

  function handleSubmit(evt) {
    const apiKey = process.env.REACT_APP_API_KEY;
    evt.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`
      )
      .then((res) => setSearchResult(res.data), setErr(false))

      .catch((error) => setErr(true));
    setSearch("");
  }

  const searchBar = () => {
    setShowResults(!showResults);
  };

  console.log("search", searchResult);

  return (
    <>
      <button
        style={{
          
        }}
        onClick={searchBar}
      >
        {" "}
        ❤️Search a state❤️{" "}
      </button>
      {showResults ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              style={{}}
              type="text"
              value={search}
              placeholder="Search here"
              onChange={(e) => setSearch(e.target.value.toUpperCase())}
            />
            <button style={{}} type="submit">
              Get Weather
            </button>
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
