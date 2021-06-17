import React from "react";

const HourlyWeatherList = ({ weather, farConverter,
  celConverter, unixToTime }) => {

    

  return (
    <div>
      <br/>
      {
        weather.hourly.slice([0], [12]).map((hour) => (
          <div>
           {unixToTime(hour.dt)}: {farConverter(hour.temp)}°/ 
             {celConverter(hour.temp)}°, weather: {hour.weather[0].description}
          
          </div>
        ))
        // <table className="contentList-table" style={{ width: "100%" }}>
        // <tr>
        //   <th>hour:</th>
        //   <th>Country:</th>
        //   <th>Tempature:</th>
        //   <th>Feels like:</th>
        //   <th>Wind Speed:</th>
        //   <th>Weather:</th>
        // </tr>
        // <tr>
        //   <td>{}</td>
        //   <td>{}</td>
        // </tr>
        // </table>
      }
    </div>
  );
};

export default HourlyWeatherList;
