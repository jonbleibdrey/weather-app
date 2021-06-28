import React from "react";
import { v4 as mixId } from "uuid";

const HourlyWeatherList = ({
  weather,
  farConverter,
  celConverter,
  unixToTime,
  weatherIcon,
}) => {
  return (
    <div>
      <h1>Hourly Weather:</h1>
      {weather.hourly.slice([0], [12]).map((hour) => (
        <div key={mixId()}>
          <ul>
            <li>
              {unixToTime(hour.dt)}: {farConverter(hour.temp)}°/
              {celConverter(hour.temp)}°, weather:
              {weatherIcon(hour.weather[0].main)}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeatherList;
