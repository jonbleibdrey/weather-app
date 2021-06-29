import React from "react";
import { v4 as mixId } from "uuid";

const WeekWeatherList = ({
  weather,
  farConverter,
  celConverter,
  dayConverter,
  weatherIcon,
}) => {
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
              weather: {weatherIcon(day.weather[0].main)}
              <br />
              details: {day.weather[0].description}
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
