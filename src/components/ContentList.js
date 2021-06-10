import React from "react";
import "../css/ContentList.css"

const ContentList = ({ weather }) => {
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
          <td>{weather.main.temp}</td>
          <td>{weather.main.feels_like}</td>
          <td>{weather.main.temp_min}</td>
          <td>{weather.main.temp_max}</td>
          <td>{weather.wind.speed}</td>
          <td>{weather.weather[0].description}</td>
        </tr>
      </table>
    </div>
  );
};

export default ContentList;
