import React from 'react'
import ReactAnimatedWeather from "react-animated-weather";

const WeatherIcon = ({data}) => {
    const clear = {
        icon: "CLEAR_DAY",
        color: "goldenrod",
        size: 20,
        animate: true,
      };
      const cloud = {
        icon: "CLOUDY",
        color: "goldenrod",
        size: 20,
        animate: true,
      };
      const snow = {
        icon: "SNOW",
        color: "goldenrod",
        size: 20,
        animate: true,
      };
      const rain = {
        icon: "RAIN",
        color: "goldenrod",
        size: 20,
        animate: true,
      };
      const thunder = {
        icon: "SLEET",
        color: "goldenrod",
        size: 20,
        animate: true,
      };
  
      switch (data) {
        case "Clouds":
          return (
            <ReactAnimatedWeather
              icon={cloud.icon}
              color={cloud.color}
              size={cloud.size}
              animate={cloud.animate}
            />
          );
        case "Clear":
          return (
            <ReactAnimatedWeather
              icon={clear.icon}
              color={clear.color}
              size={clear.size}
              animate={clear.animate}
            />
          );
        case "Snow":
          return (
            <ReactAnimatedWeather
              icon={snow.icon}
              color={snow.color}
              size={snow.size}
              animate={snow.animate}
            />
          );
        case "Drizzle":
          return (
            <ReactAnimatedWeather
              icon={rain.icon}
              color={rain.color}
              size={rain.size}
              animate={rain.animate}
            />
          );
        case "Thunderstorm":
          return (
            <ReactAnimatedWeather
              icon={thunder.icon}
              color={thunder.color}
              size={thunder.size}
              animate={thunder.animate}
            />
          );
        case "Rain":
          return (
            <ReactAnimatedWeather
              icon={rain.icon}
              color={rain.color}
              size={rain.size}
              animate={rain.animate}
            />
          );
        default:
          return (
            <ReactAnimatedWeather
              icon={clear.icon}
              color={clear.color}
              size={clear.size}
              animate={clear.animate}
            />
          );
      }
}

export default WeatherIcon
