import React from "react";

const WeekWeatherList = ({
  weather,
  farConverter,
  celConverter,
  dayConverter,
}) => {
  return (
    <div>
      {weather.daily.map((day) => (
        <div>
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
