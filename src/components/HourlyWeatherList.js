import React from 'react'

const HourlyWeatherList = ({weather, unixToTime}) => {


    return (
        <div>
           {weather.hourly.map(hour => 
            <table className="contentList-table" style={{ width: "100%" }}>
            <tr>
              <th>hour:</th>
              <th>Country:</th>
              <th>Tempature:</th>
              <th>Feels like:</th>
              <th>Wind Speed:</th>
              <th>Weather:</th>
            </tr>
            <tr>
              <td>{unixToTime(hour.dt)}</td>
              <td>{}</td>
            </tr>
            </table>
            
            )}
        </div>
    )
}

export default HourlyWeatherList
