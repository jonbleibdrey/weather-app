import React, { useState } from "react";
import { v4 as mixId } from "uuid";

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
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "13px",
        boxShadow: "-2px 3px 20px -7px black",
        fontSize: "16px",
        marginLeft: "5px",
      }}
    >
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
      <button onClick={showWeather}> More time & info</button>
    </div>
  );
};

export default HourlyWeatherList;
