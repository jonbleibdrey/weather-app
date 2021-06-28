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
  const [icons, setIcons] = useState([]);
  const [list, setLists] = useState([]);

  // useEffect(() => {
  //   function weatherIcon() {
  //     const weatherIcons = weather.hourly.map(e => () => {

  //     })
  //   }

  //      console.log("icons: ", list)
  //       weatherIcon()

  // },[]);

  return (
    <div>
      <h1>Hourly Weather:</h1>
      {weather.hourly.slice([0], [12]).map((hour) => (
        <div key={mixId()}>
          <ul>
            <li>
              {unixToTime(hour.dt)}: {farConverter(hour.temp)}°/
              {celConverter(hour.temp)}°, weather:
              {() => {
                switch (hour.weather[0].main) {
                  case "Clouds":
                    <TiWeatherCloudy />;
                    break;
                  case "Clear":
                    <TiWeatherSunny />;
                    break;
                  case "Snow":
                    <TiWeatherSnow />;
                    break;
                  case "Rain":
                    <TiWeatherDownpour />;
                    break;
                  case "Drizzle":
                    <TiWeatherShower />;
                    break;
                  case "Thunderstorm":
                    <TiWeatherStormy />;
                    break;
                  default:
                    <TiWeatherSunny />;
                }

                // if (hour.weather[0].main === "Clear") {
                //   <TiWeatherSunny />;
                // } else if (hour.weather[0].main === "Clouds") {
                //   <TiWeatherCloudy />;
                // } else if (hour.weather[0].main === "Snow") {
                //   <TiWeatherSnow />;
                // } else if (hour.weather[0].main === "Rain") {
                //   <TiWeatherDownpour />;
                // } else if (hour.weather[0].main === "Drizzle") {
                //   <TiWeatherShower />;
                // } else if (hour.weather[0].main === "Thunderstorm") {
                //   <TiWeatherStormy />;
                // } else {
                //   <TiWeatherSunny />;
                // }
              }}
              {/* {hour.weather[0].description} */}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeatherList;
