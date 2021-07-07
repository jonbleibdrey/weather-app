import React, { useState, useEffect } from "react";

const Selector = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const sort = (data) => {
    const sorting = data.filter( state => state.country === "US" && state.state === "TX")
    console.log("sorting:",sorting)
    setStates(sorting)
  }

  const getData = () => {
    fetch("data.json")
      .then((response) => response.json())
      .then(
        (data) => {sort(data)}
      );
  };

  return (
    <>
    <select name="state" id="">
    { states.map( state => 
    <option value={state.id}>{state.name}</option>
    )
}
    </select>
    </>
  );
};

export default Selector;
