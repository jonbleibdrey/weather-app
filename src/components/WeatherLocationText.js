import React from "react";
import "../css/WeatherLocationText.css";

const WeatherLocationText = ({
  town,
  statess,
  weather,
  zipCode,
  country,
  unixToTime,
}) => {
  return (
    <div className="weatherText-container">
      <h1>
        Howdy,
        <br />
        here is your weather in:
      </h1>
      <h2>
        {town},{statess}
        {weather && weather.name}
      </h2>
      <h3>with the zipcode: {zipCode}</h3>
      <h4>In The {country}</h4>
      <h5>
        The Sun will rise at {unixToTime(weather.current.sunrise)} and will set
        at {unixToTime(weather.current.sunset)} today!
      </h5>

      <br />
    </div>
  );
};

export default WeatherLocationText;
