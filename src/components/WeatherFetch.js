import React, { useState, useEffect } from "react";
import axios from "axios";
import LocalWeatherList from "./LocalWeatherList";
import HourlyWeatherList from "./HourlyWeatherList";
import WeekWeatherList from "./WeekWeatherList";
import WeatherLocationText from "./WeatherLocationText";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Loading from "./Loading";
import Header from "./Header";
import About from "./About";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherStormy } from "react-icons/ti";
import "../css/weatherFetch.css";

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

  const weatherIcon = (info) => {
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
    <>
      {isLoading ? (
        <div>
          <Header />
          <br />
          <Loading isLoading={isLoading} />
        </div>
      ) : (
        <div className="parent">
          <header className="header">
            <About />
            <SearchBar />
          </header>
          <div className="left">
            {weather && (
              <WeatherLocationText
                town={town}
                statess={statess}
                weather={weather}
                zipCode={zipCode}
              />
            )}
          </div>
          <div className="main-content">
            {weather && (
              <LocalWeatherList
                statess={statess}
                country={country}
                weather={weather}
                farConverter={farConverter}
                celConverter={celConverter}
                windConverter={windConverter}
                weatherIcon={weatherIcon}
              />
            )}
          </div>
          <div className="main-middle">
            {weather && (
              <HourlyWeatherList
                weather={weather}
                farConverter={farConverter}
                celConverter={celConverter}
                unixToTime={unixToTime}
                weatherIcon={weatherIcon}
              />
            )}
          </div>
          <div className="right">
            {weather && (
              <WeekWeatherList
                weather={weather}
                farConverter={farConverter}
                celConverter={celConverter}
                dayConverter={dayConverter}
                weatherIcon={weatherIcon}
              />
            )}
          </div>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default WeatherFetch;
