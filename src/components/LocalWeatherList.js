import React from "react";
import "../css/CurrentWeatherList.css";

const LocalWeatherList = ({
  weather,
  statess,
  farConverter,
  windConverter,
  celConverter,
  weatherIcon,
  map,
}) => {
  return (
    <div
      className="contentList"
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "13px",
        boxShadow: "-2px 3px 20px -7px black",
        fontSize: "20px",
        marginLeft: "5px",
      }}
    >
      <h1>Local Weather:</h1>
      <ul>
        <li>
          <a
            href={map}
            target="_blank"
            rel="noreferrer"
            style={{ color: "black", border: "none", textDecoration: "none" }}
          >
            Map link here
          </a>
        </li>
        <li>State: {statess}</li>
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
        <li>Details: {weather.current.weather[0].description}</li>
        <li>Humidity: {weather.current.humidity}%</li>
      </ul>
    </div>
  );
};

export default LocalWeatherList;
