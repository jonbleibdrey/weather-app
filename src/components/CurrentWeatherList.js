import React from "react";
import "../css/CurrentWeatherList.css";

const CurrentWeatherList = ({
  weather,
  statess,
  country,
  farConverter,
  windConverter,
  celConverter,
}) => {
  return (
    <div className="contentList">
      <table className="contentList-table" style={{ width: "100%" }}>
        <tr>
          <th>State:</th>
          <th>Country:</th>
          <th>Tempature:</th>
          <th>Feels like:</th>
          <th>Wind Speed:</th>
          <th>Weather:</th>
        </tr>
        <tr>
          <td>{statess}</td>
          <td>{country}</td>
          <td>
            {farConverter(weather.current.temp)}°/{" "}
            {celConverter(weather.current.temp)}°
          </td>
          <td>
            {farConverter(weather.current.feels_like)}°/{" "}
            {celConverter(weather.current.feels_like)}°
          </td>
          <td>{windConverter(weather.current.wind_speed)} MPH</td>
          <td>{weather.current.weather[0].description}</td>
        </tr>
      </table>
    </div>
  );
};

export default CurrentWeatherList;
