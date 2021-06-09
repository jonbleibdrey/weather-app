import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentList from "./ContentList";

const Content = () => {
  const [weather, setWeather] = useState(null);

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
      <h1>weather for {weather && weather.name}:</h1>
      {weather && <ContentList weather={weather} />}
    </div>
  );
};

export default Content;
