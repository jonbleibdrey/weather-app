import React, { useState } from "react";
import { v4 as mixId } from "uuid";
import "../css/HourlyWeather.css";

const HourlyWeatherList = ({
  weather,
  farConverter,
  celConverter,
  unixToTime,
  weatherIcon,
}) => {
  const [collapse, setCollapse] = useState(false);

  const showWeather = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="hourly-container">
      <h1>Hourly Weather:</h1>
      {collapse ? (
        <div>
          {weather.hourly.slice([0], [12]).map((hour) => (
            <div key={mixId()}>
              <ul>
                <li>
                  {unixToTime(hour.dt)}: {farConverter(hour.temp)}°/
                  {celConverter(hour.temp)}°
                  <br />
                  Feels like: {farConverter(hour.feels_like)}°/{" "}
                  {celConverter(hour.feels_like)}°
                  <br />
                  Weather: {weatherIcon(hour.weather[0].main)}
                  <br />
                  Details: {hour.weather[0].description}
                  <br />
                  Humidity: {hour.humidity}%
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {weather.hourly.slice([0], [3]).map((hour) => (
            <div key={mixId()}>
              <ul>
                <li>
                  {unixToTime(hour.dt)}: {farConverter(hour.temp)}°/
                  {celConverter(hour.temp)}°
                  <br />
                  Feels like: {farConverter(hour.feels_like)}°/{" "}
                  {celConverter(hour.feels_like)}°
                  <br />
                  Weather: {weatherIcon(hour.weather[0].main)}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
      <button onClick={showWeather} className="hourly-button">
        More time & info
      </button>
    </div>
  );
};

export default HourlyWeatherList;
