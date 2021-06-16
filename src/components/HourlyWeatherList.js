import React from "react";

const HourlyWeatherList = ({ weather, farConverter,
  celConverter }) => {
  return (
    <div>
      {
        weather.hourly.slice([0], [10]).map((hour) => (
          <div>
            {farConverter(hour.temp)}°/
            {celConverter(hour.temp)}°
          
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
