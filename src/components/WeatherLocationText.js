import React from "react";

const WeatherLocationText = ({
  town,
  statess,
  weather,
  zipCode,
  country,
  unixToTime,
}) => {
  return (
    <div style={{backgroundColor:"white", padding:"20px", borderRadius:'20px', marginTop: "13px",
    boxShadow: "-2px 3px 20px -7px black",
    marginLeft: "5px"}}>
      <h1>
        {" "}
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
        at {unixToTime(weather.current.sunset)} today!{" "}
      </h5>

      <br />
    </div>
  );
};

export default WeatherLocationText;
