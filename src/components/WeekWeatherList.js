import React, { useState } from "react";
import { v4 as mixId } from "uuid";
import "../css/WeekWeather.css";

const WeekWeatherList = ({
  weather,
  farConverter,
  celConverter,
  dayConverter,
  weatherIcon,
}) => {
  const [collapse, setCollapse] = useState(false);

  const showWeather = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="week-container">
      <h1>Weekly Weather:</h1>
      {collapse ? (
        <div>
          {weather.daily.map((day) => (
            <div key={mixId()}>
              <ul>
                <li>
                  Day: {dayConverter(day.dt)} <br />
                  Tempature: {farConverter(day.temp.day)}° ,
                  <br />
                  Feels like: {farConverter(day.feels_like.day)}°
                  <br />
                  Humidity: {day.humidity}%
                  <br />
                  Min tempature: {farConverter(day.temp.min)}° ,
                  <br />
                  Max tempature {farConverter(day.temp.max)}°,
                  <br />
                  Possible weather: {weatherIcon(day.weather[0].main)}
                  <br />
                  Details: {day.weather[0].description}
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {weather.daily.slice([0], [4]).map((day) => (
            <div key={mixId()}>
              <ul>
                <li>
                  Day: {dayConverter(day.dt)} <br />
                  Tempature: {farConverter(day.temp.day)}°
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
      <button className="week-button" onClick={showWeather}>
        More days & info
      </button>
    </div>
  );
};

export default WeekWeatherList;
