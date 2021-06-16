import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeatherList from "./CurrentWeatherList";
import HourlyWeatherList from "./HourlyWeatherList";
import WeekWeatherList from "./WeekWeatherList";

const WeatherFetch = () => {
  const [weather, setWeather] = useState(null);
  const [statess, setStatess] = useState();
  const [country, setCountry] = useState();
  const [town, setTown] = useState();
  const [zipCode, setZipCode] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  require("dotenv").config();

  useEffect(() => {
    showPosition();

    function showPosition() {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, []);

  useEffect(() => {
    lat && long && getWeather();

    function getWeather() {
      const apiKey = process.env.REACT_APP_API_KEY;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`
        )
        .then((res) => setWeather(res.data), setIsLoading(false))

        .catch((error) => console.log("we in error world", error));
    }
  }, [lat, long]);

  function successCallback(position) {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    const key = process.env.REACT_APP_LOC_API_KEY;
    setLat(lat);
    setLong(long);

    axios
      .get(
        `http://api.positionstack.com/v1/reverse?access_key=${key}&query=${lat},${long}`
      )
      .then((res) => {
        setStatess(res.data.data[0].region);
        setZipCode(res.data.data[0].postal_code);
        setTown(res.data.data[0].locality);
        setCountry(res.data.data[0].country);
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

  function dayConverter(time) {
    const timeObj = new Date(1000 * time);
    const date = timeObj.toDateString();
    return date;
  }

  // function unixToTime(time) {
  //   const timeObj = new Date(time * 1000);
  //   const utcString = timeObj.getUTCHours();
  //   const finalTime = utcString % 12;
  //   const ampm = timeObj.getHours() >= 12 ? "PM" : "AM";

  //   if (finalTime === 0) {
  //     return 12 ;
  //   } else {
  //     return finalTime;
  //   }
  // }

  return (
    <div>
      {console.log(weather)}
      <h1>
        Weather for {town}, {weather && weather.name}
        <br />
        Zip Code: {zipCode}
      </h1>
      Current Weather:
      {isLoading && <div>Loading...</div>}
      
      {weather && (
        <CurrentWeatherList
          statess={statess}
          country={country}
          weather={weather}
          farConverter={farConverter}
          celConverter={celConverter}
          windConverter={windConverter}
        />
      )}
      Hourly Weather:
      {weather && (
        <HourlyWeatherList
          weather={weather}
          farConverter={farConverter}
          celConverter={celConverter}
        />
      )}
      Weekly Weather:
      {weather && (
        <WeekWeatherList
          weather={weather}
          farConverter={farConverter}
          celConverter={celConverter}
          dayConverter={dayConverter}
        />
      )}
    </div>
  );
};

export default WeatherFetch;
