import React from "react";
import "../css/ContentList.css"

const ContentList = ({ weather, farConverter, windConverter, celConverter }) => {
  return (
    <div className="contentList">
      <table className="contentList-table" style={{width:"100%"}}>
        <tr>
          <th>State:</th>
          <th>Country:</th>
          <th>Tempature:</th>
          <th>Feels like:</th>
          <th>Min for the day:</th>
          <th>Max for the day:</th>
          <th>Wind Speed:</th>
          <th>Weather:</th>
        </tr>
        <tr>
          <td>{weather.name}</td>
          <td>{weather.sys.country}</td>
          <td>{farConverter(weather.main.temp)}°/ {celConverter(weather.main.temp)}°</td>
          <td>{farConverter(weather.main.feels_like)}°/ {celConverter(weather.main.feels_like)}°</td>
          <td>{farConverter(weather.main.temp_min)}°/ {celConverter(weather.main.temp_min)}°</td>
          <td>{farConverter(weather.main.temp_max)}°/ {celConverter(weather.main.temp_max)}°</td>
          <td>{windConverter(weather.wind.speed)} MPH</td>
          <td>{weather.weather[0].description}</td>
        </tr>
      </table>
    </div>
  );
};

export default ContentList;
