import React from "react";
import "../css/CurrentWeatherList.css";

const CurrentWeatherList = ({
  weather,
  statess,
  country,
  farConverter,
  windConverter,
  celConverter,
  weatherIcon,
}) => {
  return (
    <div className="contentList">
      <h1>Local Weather:</h1>
      <ul>
        <li>State: {statess}</li>
        <li>Country: {country}</li>
        <li>
          Tempature: {farConverter(weather.current.temp)}°/{" "}
          {celConverter(weather.current.temp)}°
        </li>
        <li>
          Feels like: {farConverter(weather.current.feels_like)}°/{" "}
          {celConverter(weather.current.feels_like)}°
        </li>
        <li>Wind Speed: {windConverter(weather.current.wind_speed)} mph</li>
        <li>Weather: {weatherIcon(weather.current.weather[0].main)}</li>
      </ul>
    </div>
  );
};

export default CurrentWeatherList;
