import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import Loading from "./Loading";
import About from "./About";
import WeatherLocationText from "./WeatherLocationText";
import WeatherIcon from "./WeatherIcon";
import LocalWeatherList from "./LocalWeatherList";
import HourlyWeatherList from "./HourlyWeatherList";
import WeekWeatherList from "./WeekWeatherList";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import axios from "axios";
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
  const [map, setMap] = useState(null);
  require("dotenv").config();

  
  useEffect(() => {
    //get location
    showPosition();
    function showPosition() {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
    //popup feature
    setTimeout(() => {
      setPopUp("Click on me ⤴️ ");
    }, 5000);
    setTimeout(() => {
      setPopUp("");
    }, 7000);
  }, []);
  
  //show position error function
  function errorCallback(error) {
    throw Error("Our server is down!");
  }
  //show position success function
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
        setMap(res.data.data[0].map_url);
      })
      
      .catch((error) => console.log(`Error message: ${error.message} `));
    }

    useEffect(() => {
      //get weather once you have location info
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
 

  const weatherIcon = (data) => {
    return <WeatherIcon data={data} />;
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
          <div className="left-middle">
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
          <div className="right-middle">
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
            <CopyRight />
          </footer>
        </div>
      )}
    </>
  );
};

export default WeatherFetch;
