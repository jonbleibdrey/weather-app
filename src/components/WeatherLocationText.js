import React from "react";
import Loading from "./Loading";

const WeatherLocationText = ({
  town,
  statess,
  weather,
  zipCode,
  isLoading,
}) => {
  return (
    <div>
      <h1>Weather near you:</h1>
      <h1>
        {town},{statess}
        {weather && weather.name}
      </h1>
      <h3>with the zipcode: {zipCode}</h3>
      <br />
    </div>
  );
};

export default WeatherLocationText;
