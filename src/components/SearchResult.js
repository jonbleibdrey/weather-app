import React from "react";

const SearchResult = ({ searchResult }) => {
  return (
    <div>
      <h1>Your search results for {searchResult.name}</h1>
      <h3>current tempature is: {Math.round(searchResult.main.temp)}</h3>
      <p>
        weather: {searchResult.weather[0].description}
        <br />
        Feels Like: {Math.round(searchResult.main.feels_like)}
        <br />
        Highs: {Math.round(searchResult.main.temp_max)}
        <br />
        Lows: {Math.round(searchResult.main.temp_min)}
      </p>
    </div>
  );
};

export default SearchResult;
