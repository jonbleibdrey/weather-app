import axios from "axios";
import React, { useState } from "react";
import SearchResult from "./SearchResult";
require("dotenv").config();

const SearchBar = ({ weatherIcon, showResults, searchBar }) => {
  const [search, setSearch] = useState("");
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
    setSearch("");
  }


  console.log("search", searchResult);

  return (
    <>
      {showResults ? (
        <div style={{backgroundColor:"grey", padding:"10px", marginTop:"20px",borderRadius: "10px",
        boxShadow: "-4px 4px 10px -6px black", width:"55vw"}}>
          <button style={{}} onClick={searchBar}>X</button>
          <form onSubmit={handleSubmit}>
            <input
              style={{
                marginTop: "13px",
                border: "none",
                borderRadius: "10px",
                boxShadow: "-2px 3px 20px -7px black",
                fontSize: "40px",
                marginLeft: "50px",
              }}
              type="text"
              value={search}
              placeholder="State here..."
              onChange={(e) => setSearch(e.target.value.toUpperCase())}
            />
            <button
              style={{
                display: "block",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "50px",
                padding: "20px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px 5px",
                boxShadow: "-4px 4px 15px -6px black",
                border: "none",
              }}
              type="submit"
            >
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
