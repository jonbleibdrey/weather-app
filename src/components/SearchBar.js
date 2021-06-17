import axios from "axios";
import React, { useState } from "react";
import SearchResult from "./SearchResult";
require("dotenv").config();

const SearchBar = () => {
  const [search, setSearch] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [err, setErr] = useState(false);

  function handleSubmit(evt) {
    const apiKey = process.env.REACT_APP_API_KEY;
    evt.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`
      )
      .then((res) => setSearchResult(res.data), setErr(false))

      .catch((error) => setErr(true));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          placeholder="search state"
          onChange={(e) => setSearch(e.target.value.toUpperCase())}
        />
        <button type="submit">submit</button>
      </form>
      {err === true ? "Put in a state" : " "}

      {searchResult.length === 0 ? (
        <div> </div>
      ) : (
        <SearchResult searchResult={searchResult} />
      )}
    </div>
  );
};

export default SearchBar;
