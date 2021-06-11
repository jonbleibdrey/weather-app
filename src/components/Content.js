import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentList from "./ContentList";

const Content = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState();
  const [statess, setStatess] = useState();
  const [town, setTown] = useState();
  const [zipCode, setZipCode] = useState();
  require('dotenv').config()
  console.log("location data: ",location)

  useEffect(() => {
    showPosition()
  }, []);

  useEffect(() => {
    {statess && getWeather()}
  }, [statess]);

  

  function showPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      setLocation("Getting the position information...");
    } else {
      setLocation("Sorry, your browser does not support HTML5 geolocation.");
    }
  }

  
  
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
        setLocation("");
      })
      
      .catch((error) => alert("geolocation is currently down"));
     
    }

    function getWeather(){
      const apiKey = process.env.REACT_APP_API_KEY;
     axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${statess}&appid=${apiKey}`
        )
        .then((res) => setWeather(res.data))
        .catch((error) => console.log("we in error world", error));
    }
    
    function errorCallback(error) {
      if (error.code === 1) {
        setLocation(
          "You've decided not to share your position, but it's OK. We won't ask you again."
          );
        } else if (error.code === 2) {
          setLocation(
            "The network is down or the positioning service can't be reached."
            );
          } else if (error.code === 3) {
            setLocation(
              "The attempt timed out before it could get the location data."
              );
            } else {
              setLocation("Geolocation failed due to unknown error.");
    }
  }

  function tempConverter(temp){
    const celsius = temp - 273;
    const fahrenheit = Math.floor(celsius * (9/5) + 32);
    return fahrenheit
  }
  
  return (
    <div>
      {statess}
      <h1>Weather for {town}, {weather && weather.name} 
      <br/>
      Zip Code: {zipCode}</h1>
      {weather && <ContentList weather={weather} tempConverter={tempConverter} />}
    </div>
  );
};

export default Content;

// sessionStorage.setItem("userZipCode", res.data.data[0].postal_code);
// //console.log("session storage zipcode" ,sessionStorage.getItem("userZipCode"));
// sessionStorage.setItem("userMonth", realDate);
// sessionStorage.setItem("month", monthLU[realDate]);
// //console.log("session storage month" ,sessionStorage.getItem("userMonth"));
// sessionStorage.setItem("usersState", res.data.data[0].region);
// // debugger;
// sessionStorage.setItem(
//   "userStateId",
//   props.stateIds[res.data.data[0].region]
// );
// props.fire();