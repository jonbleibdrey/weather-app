import React from "react";

const ContentList = ({weather}) => {
  return (
    <div>
      {weather.name}
      {weather.sys.country}
      {weather.main.temp}
      {weather.main.temp_min}
      {weather.main.temp_max}
      {weather.main.feels_like}
      {weather.wind.speed}
      {weather.weather[0].description}
    </div>
  );
};

export default ContentList;
