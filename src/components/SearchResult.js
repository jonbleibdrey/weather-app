import React from "react";

const SearchResult = ({ searchResult }) => {
  return (
    <div>
      <h1>Your search results for {searchResult.name}</h1>
      <ul>
        <li>current tempature is: {Math.round(searchResult.main.temp)}</li>
        <li>weather: {searchResult.weather[0].description}</li>
        <li>Feels Like: {Math.round(searchResult.main.feels_like)}</li>
        <li>Highs: {Math.round(searchResult.main.temp_max)}</li>
        <li>Lows: {Math.round(searchResult.main.temp_min)}</li>
      </ul>
    </div>
  );
};

export default SearchResult;
