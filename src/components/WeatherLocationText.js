import React from "react";
// import Loading from "./Loading";

const WeatherLocationText = ({
  town,
  statess,
  weather,
  zipCode,
  isLoading,
}) => {
  return (
    <div>
      <h1> Howdy, 
        <br/>
        here is your weather in:</h1>
      <h2>
        {town},{statess}
        {weather && weather.name}
      </h2>
      <h3>with the zipcode: {zipCode}</h3>
      <br />
    </div>
  );
};

export default WeatherLocationText;
