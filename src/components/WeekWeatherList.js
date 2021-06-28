import React, { useEffect, useState } from "react";
import { v4 as mixId } from "uuid";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherStormy } from "react-icons/ti";

const WeekWeatherList = ({
  weather,
  farConverter,
  celConverter,
  dayConverter,
}) => {
  const renderSwitch = (info) => {
    switch (info) {
      case "Clouds":
        return <TiWeatherCloudy />;
      case "Clear":
        return <TiWeatherSunny />;
      case "Snow":
        return <TiWeatherSnow />;
      case "Drizzle":
        return <TiWeatherShower />;
      case "Thunderstorm":
        return <TiWeatherStormy />;
      case "Rain":
        return <TiWeatherDownpour />;
      default:
        return <TiWeatherSunny />;
    }
  };

  return (
    <div>
      <h1>Weekly Weather:</h1>
      {weather.daily.map((day) => (
        <div key={mixId()}>
          <ul>
            <li>
              Day: {dayConverter(day.dt)} <br />
              Tempature: {farConverter(day.temp.day)}° ,
              <br />
              Min tempature: {farConverter(day.temp.min)}° ,
              <br />
              Max tempature {farConverter(day.temp.max)}°,
              <br />
              weather: {renderSwitch(day.weather[0].main)}
            </li>
          </ul>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default WeekWeatherList;

// const [clear, setClear] = useState(null);
// const [clouds, setClouds] = useState(null);
// const [snow, setSnow] = useState(null);
// const [rain, setRain] = useState(null);
// const [drizzle, setDrizzle] = useState(null);
// const [tStorm, setTStorm] = useState(null);

// useEffect(() => {
//   const weatherType = weather.current.weather[0].main;

//   function weatherIcon() {
//     switch (weatherType) {
//       case "Clouds":
//         setClouds(<TiWeatherCloudy />);
//         break;
//       case "Clear":
//         setClear(<TiWeatherSunny />);
//         break;
//       case "Snow":
//         setSnow(<TiWeatherSnow />);
//         break;
//       case "Rain":
//         setRain(<TiWeatherDownpour />);
//         break;
//       case "Drizzle":
//         setDrizzle(<TiWeatherShower />);
//         break;
//       case "Thunderstorm":
//         setTStorm(<TiWeatherStormy />);
//         break;
//       default:
//         setClear(<TiWeatherSunny />);
//     }
//   }
//   weatherIcon();
// },[]);
