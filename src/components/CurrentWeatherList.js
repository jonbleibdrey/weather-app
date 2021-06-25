import React, { useState, useEffect } from "react";
import "../css/CurrentWeatherList.css";
import { TiWeatherCloudy } from 'react-icons/ti';
import { TiWeatherSunny } from 'react-icons/ti';
import { TiWeatherSnow } from 'react-icons/ti';
import { TiWeatherDownpour } from 'react-icons/ti';
import { TiWeatherShower } from 'react-icons/ti';
import { TiWeatherStormy } from 'react-icons/ti';
// import Loading from "../components/Loading";

const CurrentWeatherList = ({
  weather,
  statess,
  country,
  farConverter,
  windConverter,
  celConverter,
}) => {
  console.log(weather);
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    const weatherType = weather.current.weather[0].main

    function weatherIcon() {
      switch (weatherType) {
        case "Clouds":
          return setIcons(<TiWeatherCloudy/>)
        case "Clear":
          return setIcons(<TiWeatherSunny/>)
        case "Snow":
          return setIcons(<TiWeatherSnow/>)
        case "Rain":
          return setIcons(<TiWeatherDownpour/>)
        case "Drizzle":
          return setIcons(<TiWeatherShower/>)
        case "Thunderstorm":
          return setIcons(<TiWeatherStormy/>)
        default:
          return setIcons(<TiWeatherSunny/>)
      }
    } 
    weatherIcon()
  })

  

  return (
    <div className="contentList">
      <h1>Local Weather:</h1>
      <ul>
        <li>State: {statess}</li>
        <li>Country: {country}</li>
        <li>
          Tempature: {farConverter(weather.current.temp)}°/{" "}
          {celConverter(weather.current.temp)}°
        </li>
        <li>
          Feels like: {farConverter(weather.current.feels_like)}°/{" "}
          {celConverter(weather.current.feels_like)}°
        </li>
        <li>Wind Speed: {windConverter(weather.current.wind_speed)} mph</li>
        <li>Weather: {icons}</li>
      </ul>
    </div>
  );
};

export default CurrentWeatherList;
