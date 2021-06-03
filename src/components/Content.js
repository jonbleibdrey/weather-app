import React,{useState, useEffect} from "react";
import axios from "axios";

const Content = () => {
  const [weather, setWeather] = useState([]);
  console.log(setWeather)

  useEffect(() => {
    axios.get("")
  }, [weather])

  return (
    <div>
      <h1>
        weather goes here:
        <p>{}</p>
      </h1>
    </div>
  );
};

export default Content;
