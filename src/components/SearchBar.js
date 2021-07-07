import React from "react";
import SearchResult from "./SearchResult";
import Selector from "./Selector";


const SearchBar = ({
  weatherIcon,
  toggleSearch,
  searchResult,
  handleSubmit,
  search,
  err,
  setSearch,
  clear,
  states
}) => {
  console.log("search", searchResult);

  return (
    <>
      {toggleSearch ? (
        <div
          style={{
            backgroundColor: "#CEE0DC",
            padding: "10px",
            marginTop: "20px",
            borderRadius: "10px",
            boxShadow: "-4px 4px 10px -6px black",
            width: "55vw",
          }}
        >
          <button
            style={{
              border: "none",
              borderRadius: "10px",
              boxShadow: "-4px 4px 10px -6px black",
              backgroundColor: "pink",
              color: "white",
            }}
            onClick={clear}
            >
            X
          </button>
         
            <Selector states={states}/>
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
              placeholder="State please!"
              onChange={(e) => setSearch(e.target.value.toUpperCase())}
              />
            <button
              style={{
                display: "block",
                marginTop: "10px",
                marginBottom: "25px",
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
