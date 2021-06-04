import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Texas&appid=${apiKey}`
      )
      .then((res) => setWeather(res.data))
      .catch((error) => console.log("we in error world", error));
  }, []);

  return (
    <div>
      <h1>weather goes here:</h1>
      <table style={{width:"100%"}}>
        <tr>
          <th>State</th>
          <th>Country</th>
          <th>Tempature</th>
          <th>Min Tempature</th>
          <th>Max Tempature</th>
          <th>Feels Like</th>
          <th>Wind Speed</th>
          <th>weather</th>
        </tr>
        <tr>
          {/* <td>{console.log(weather.name)}</td>
          <td>{console.log(weather.sys.country)}</td>
          <td>{console.log(weather.main.temp)}</td>
          <td>{console.log(weather.main.temp_min)}</td>
          <td>{console.log(weather.main.temp_max)}</td>
          <td>{console.log(weather.main.feels_like)}</td>
          <td>{console.log(weather.wind.speed)}</td>
          <td>{console.log(weather.weather[0].description)}</td> */}
          <td>{weather.name}</td>
          <td>{weather.sys.country}</td>
          <td>{weather.main.temp}</td>
          <td>{weather.main.temp_min}</td>
          <td>{weather.main.temp_max}</td>
          <td>{weather.main.feels_like}</td>
          <td>{weather.wind.speed}</td>
          <td>{weather.weather[0].description}</td>
        </tr>
      </table>
    </div>
  );
};

export default Content;
