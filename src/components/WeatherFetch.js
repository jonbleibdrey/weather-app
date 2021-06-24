import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeatherList from "./CurrentWeatherList";
import HourlyWeatherList from "./HourlyWeatherList";
import WeekWeatherList from "./WeekWeatherList";
import WeatherLocationText from "./WeatherLocationText";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import "../css/weatherFetch.css";
import Loading from "./Loading";

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
    throw Error("Our server is down!");
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
      <header className="header">
        <SearchBar />
      </header>
      <div className="left" contenteditable>
        <Loading isLoading={isLoading} />
        {weather && (
          <WeatherLocationText
            town={town}
            statess={statess}
            weather={weather}
            zipCode={zipCode}
          />
        )}
      </div>
      <div className="main-content" contenteditable>
        <Loading isLoading={isLoading} />
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
      </div>
      <div className="main-middle" contenteditable>
        <Loading isLoading={isLoading} />
        {weather && (
          <WeekWeatherList
            weather={weather}
            farConverter={farConverter}
            celConverter={celConverter}
            dayConverter={dayConverter}
          />
        )}
      </div>
      <div className="right" contenteditable>
        <Loading isLoading={isLoading} />
        {weather && (
          <HourlyWeatherList
            weather={weather}
            farConverter={farConverter}
            celConverter={celConverter}
            unixToTime={unixToTime}
          />
        )}
      </div>
      <footer className="footer">
        Footer
        <Footer />
      </footer>
    </div>
  );
};

export default WeatherFetch;
