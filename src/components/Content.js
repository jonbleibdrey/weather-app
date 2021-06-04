import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState("");
  
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=Texas&appid=${apiKey}`)
      .then((res) => 
      setCountry(res.data.name))
      .catch((error) => console.log("we in error world", error));
    }
  , []);

  return (
    <div>
      <h1>
        weather goes here:
      </h1>
        {country}
    </div>
  );
};

export default Content;
