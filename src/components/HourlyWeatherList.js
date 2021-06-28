import React, { useEffect, useState } from "react";
import { v4 as mixId } from "uuid";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherStormy } from "react-icons/ti";

const HourlyWeatherList = ({
  weather,
  farConverter,
  celConverter,
  unixToTime,
}) => {

  const renderSwitch = (info) => {
    switch (info) {
      case "Clouds":
        return <TiWeatherCloudy />;
      case "Clear":
        return <TiWeatherSunny />;
      case "Snow":
        return <TiWeatherSnow />;
      case "Rain":
        return <TiWeatherDownpour />;
      case "Drizzle":
        return <TiWeatherShower />;
      case "Thunderstorm":
        return <TiWeatherStormy />;
      default:
        return <TiWeatherSunny />;
    }
  };

  return (
    <div>
      <h1>Hourly Weather:</h1>
      {weather.hourly.slice([0], [12]).map((hour) => (
        <div key={mixId()}>
          <ul>
            <li>
              {unixToTime(hour.dt)}: {farConverter(hour.temp)}°/
              {celConverter(hour.temp)}°, weather:
              {renderSwitch(hour.weather[0].main)}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeatherList;
