import React from "react";
import SearchBar from "./SearchBar";

const About = () => {
  return (
    <div className="about-container">
      <img className="about-image" src="../logoRain1.png" alt="rain" style={{float:"left", width:"15vw", height:"15vw"}}/>
    <div style={{marginTop:"3%", marginLeft:"25%"}}>
      This is a quick sight to make money, this is how: Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Nemo recusandae cum repellendus
      sapiente accusamus! Eius sit voluptas voluptatem velit dolorum, quae
      perferendis consequatur quia temporibus possimus? In voluptate veniam
      ratione!
    </div>
    <div style={{marginTop:"3%", marginLeft:"50%"}}>
        <SearchBar/>
    </div>

    </div>
  );
};

export default About;
