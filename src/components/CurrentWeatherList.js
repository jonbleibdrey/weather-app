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
        <li>Wind Speed: {windConverter(weather.current.wind_speed)}</li>
        <li>MPH Weather: {weather.current.weather[0].description}</li>
      </ul>
    </div>
  );
};

export default CurrentWeatherList;
