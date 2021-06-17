import React from "react";
import { v4 as mixId } from "uuid";

const WeekWeatherList = ({
  weather,
  farConverter,
  celConverter,
  dayConverter,
}) => {
  return (
    <div>
      {weather.daily.map((day) => (
        <div key={mixId()}>
          <div>Day: {dayConverter(day.dt)}</div>
          <div>
            Tempature: {farConverter(day.temp.day)}° , Min tempature:{" "}
            {farConverter(day.temp.min)}° , Max tempature{" "}
            {farConverter(day.temp.max)}°, weather: {day.weather[0].description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekWeatherList;
