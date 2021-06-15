import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentList from "./ContentList";

const Content = () => {
  const [weather, setWeather] = useState(null);
  const [statess, setStatess] = useState();
  const [town, setTown] = useState();
  const [zipCode, setZipCode] = useState();
  const [isLoading, setIsLoading] = useState(true);
  require("dotenv").config();

  useEffect(() => {
    showPosition();

    function showPosition() {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, []);

  useEffect(() => {
    statess && getWeather();

    function getWeather() {
      const apiKey = process.env.REACT_APP_API_KEY;
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${statess}&appid=${apiKey}`
        )
        .then((res) => setWeather(res.data), setIsLoading(false))

        .catch((error) => console.log("we in error world", error));
    }
  }, [statess]);

  function successCallback(position) {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    const key = process.env.REACT_APP_LOC_API_KEY;

    axios
      .get(
        `http://api.positionstack.com/v1/reverse?access_key=${key}&query=${lat},${long}`
      )
      .then((res) => {
        setStatess(res.data.data[0].region);
        setZipCode(res.data.data[0].postal_code);
        setTown(res.data.data[0].locality);
      })

      .catch((error) => alert(`Error message: ${error.message} `));
  }

  function errorCallback(error) {
    throw Error("fetch did not work");
  }

  function farConverter(temp) {
    const celsius = temp - 273;
    const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
    return fahrenheit;
  }
  function celConverter(temp) {
    const celsius = temp - 273;
    return Math.floor(celsius);
  }

  function windConverter(speed) {
    const millsec = speed * 2.23694;
    return Math.floor(millsec);
  }

  return (
    <div>
      <h1>
        Weather for {town}, {weather && weather.name}
        <br />
        Zip Code: {zipCode}
      </h1>
      {isLoading && <div>Loading...</div>}
      {weather && (
        <ContentList
          weather={weather}
          farConverter={farConverter}
          windConverter={windConverter}
          celConverter={celConverter}
        />
      )}
    </div>
  );
};

export default Content;
