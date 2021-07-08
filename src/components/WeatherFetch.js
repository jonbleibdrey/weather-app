import React, { useState, useEffect } from "react";
import axios from "axios";
import LocalWeatherList from "./LocalWeatherList";
import HourlyWeatherList from "./HourlyWeatherList";
import WeekWeatherList from "./WeekWeatherList";
import WeatherLocationText from "./WeatherLocationText";
import Footer from "./Footer";
import Loading from "./Loading";
import LandingPage from "./LandingPage";
import About from "./About";
import ReactAnimatedWeather from 'react-animated-weather';
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
  const [popUp, setPopUp] = useState(null);
  const [map, setMap] = useState(null)

  require("dotenv").config();

  useEffect(() => {
    showPosition();

    function showPosition() {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPopUp("Click on me ⤴️ ");
    }, 4000);
    setTimeout(() => {
      setPopUp("");
    }, 6000);
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
        `https://api.positionstack.com/v1/reverse?access_key=${key}&query=${lat},${long}`
      )
      .then((res) => {
        setStatess(res.data.data[0].region);
        setZipCode(res.data.data[0].postal_code);
        setTown(res.data.data[0].locality);
        setCountry(res.data.data[0].country);
        setMap(res.data.data[0].map_url)
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
    const clear = {
      icon: 'CLEAR_DAY',
      color: 'goldenrod',
      size: 20,
      animate: true
    };
    const cloud = {
      icon: 'CLOUDY',
      color: 'goldenrod',
      size: 20,
      animate: true
    };
    const snow = {
      icon: 'SNOW',
      color: 'goldenrod',
      size: 20,
      animate: true
    };
    const rain = {
      icon: 'RAIN',
      color: 'goldenrod',
      size: 20,
      animate: true
    };
    const thunder = {
      icon: 'SLEET',
      color: 'goldenrod',
      size: 20,
      animate: true
    };

    switch (info) {
      case "Clouds":
        return <ReactAnimatedWeather icon={cloud.icon}
        color={cloud.color}
        size={cloud.size}
        animate={cloud.animate}/>;
      case "Clear":
        return <ReactAnimatedWeather icon={clear.icon}
        color={clear.color}
        size={clear.size}
        animate={clear.animate}/>;
      case "Snow":
        return <ReactAnimatedWeather icon={snow.icon}
        color={snow.color}
        size={snow.size}
        animate={snow.animate}/>;
      case "Drizzle":
        return <ReactAnimatedWeather icon={rain.icon}
        color={rain.color}
        size={rain.size}
        animate={rain.animate}/>;
      case "Thunderstorm":
        return <ReactAnimatedWeather icon={thunder.icon}
        color={thunder.color}
        size={thunder.size}
        animate={thunder.animate}/>;
      case "Rain":
        return <ReactAnimatedWeather icon={rain.icon}
        color={rain.color}
        size={rain.size}
        animate={rain.animate}/>;
      default:
        return <ReactAnimatedWeather icon={clear.icon}
        color={clear.color}
        size={clear.size}
        animate={clear.animate}/>;
    }
  };

  return (
    <>
      {isLoading ? (
        <div>
          <LandingPage />
          <br />
          <Loading isLoading={isLoading} />
        </div>
      ) : (
        <div className="parent">
          <header className="header">
            <About weatherIcon={weatherIcon} popUp={popUp} />
          </header>
          <div className="left">
            {weather && (
              <WeatherLocationText
                town={town}
                statess={statess}
                weather={weather}
                zipCode={zipCode}
                country={country}
                unixToTime={unixToTime}
              />
            )}
          </div>
          <div className="main-content">
            {weather && (
              <LocalWeatherList
                statess={statess}
                weather={weather}
                farConverter={farConverter}
                celConverter={celConverter}
                windConverter={windConverter}
                weatherIcon={weatherIcon}
                map={map}
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
            <h5 style={{ marginTop: "10px" }}>Copyright© LOOK-UP, Inc.</h5>
            <a
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
              href="https://www.legal.com/"
            >
              Legal-Stuff
            </a>
            |
            <a
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
              href="privacypolicies.com"
            >
              {" "}
              Privacy-Policy
            </a>
          </footer>
        </div>
      )}
    </>
  );
};

export default WeatherFetch;
