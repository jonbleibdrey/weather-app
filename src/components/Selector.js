import React, { useState, useEffect } from "react";

const Selector = ({states}) => {
  

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
