import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeatherList from "./CurrentWeatherList";
import HourlyWeatherList from "./HourlyWeatherList";
import WeekWeatherList from "./WeekWeatherList";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

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
        console.log("response: ", res);
        setStatess(res.data.data[0].region);
        setZipCode(res.data.data[0].postal_code);
        setTown(res.data.data[0].locality);
        setCountry(res.data.data[0].country);
      })

      .catch((error) => console.log(`Error message: ${error.message} `));
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

  function unixToTime(time) {
    const timeObj = new Date(time * 1000);
    const utcString = timeObj.getHours();
    const finalTime = utcString % 12;
    const ampm = utcString >= 12 ? "PM" : "AM";

    if (finalTime === 0) {
      return 12 + ampm;
    } else {
      return finalTime + ampm;
    }
  }

  return (

    <div className="parent">
      {console.log(weather)}
    <header className="pink section">
      Header
      <SearchBar />
      </header>
    <div className="left-side blue section" contenteditable>
      Left Sidebar
      <h1>
        Weather near {town}, {weather && weather.name}
        <br />
        Zip Code: {zipCode}
      </h1>
      </div>
    <main className="section coral" contenteditable> 
    <h2>Local Weather:</h2>
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
    Main Content
    </main>
    <div className="right-side yellow section" contenteditable>
      Right Sidebar
      <h2>Hourly Weather:</h2>
      {isLoading && <div>Loading...</div>}
      <br />
      {weather && (
        <HourlyWeatherList
          weather={weather}
          farConverter={farConverter}
          celConverter={celConverter}
          unixToTime={unixToTime}
        />
      )}
       <h2>Weekly Weather:</h2>
      {isLoading && <div>Loading...</div>}
      <br />
      {weather && (
        <WeekWeatherList
          weather={weather}
          farConverter={farConverter}
          celConverter={celConverter}
          dayConverter={dayConverter}
        />
      )}
      </div>
    <footer className="green section">
      Footer
      <Footer />
      </footer>
  </div>
  );
};

export default WeatherFetch;
