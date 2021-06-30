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
    <div>
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
                  weather: {weatherIcon(hour.weather[0].main)}
                  <br />
                  details: {hour.weather[0].description}
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
                  weather: {weatherIcon(hour.weather[0].main)}
                  <br />
                  details: {hour.weather[0].description}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
      <button onClick={showWeather}> more weather info</button>
    </div>
  );
};

export default HourlyWeatherList;
