import React from "react";
import { v4 as mixId } from "uuid";

const HourlyWeatherList = ({
  weather,
  farConverter,
  celConverter,
  unixToTime,
}) => {
  return (
    <div>
      <h1>Hourly Weather:</h1>
      {weather.hourly.slice([0], [12]).map((hour) => (
        <div key={mixId()}>
          <ul>
            <li>
              {unixToTime(hour.dt)}: {farConverter(hour.temp)}°/
              {celConverter(hour.temp)}°, weather: {hour.weather[0].description}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeatherList;
