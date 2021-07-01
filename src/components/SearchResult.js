import React from "react";

const SearchResult = ({ searchResult, weatherIcon }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "15px",
        marginLeft: "45px",
        marginBottom: "20px",
        display: "block",
        padding: "20px",
        color: "black",
        borderRadius: "20px ",
        width:'50vw',
        boxShadow: "-4px 4px 15px -6px black",
        border: "none",
      }}
    >
      <h1>Your search results for {searchResult.name}</h1>
      <ul>
        <li>Current tempature is: {Math.round(searchResult.main.temp)}°</li>
        <li>Feels like: {Math.round(searchResult.main.feels_like)}°</li>
        <li>Weather: {weatherIcon(searchResult.weather[0].main)}</li>
        <li>Description: {searchResult.weather[0].description}</li>
        <li>Humidity: {searchResult.main.humidity}%</li>
        <li>Highs: {Math.round(searchResult.main.temp_max)}°</li>
        <li>Lows: {Math.round(searchResult.main.temp_min)}°</li>
      </ul>
    </div>
  );
};

export default SearchResult;
