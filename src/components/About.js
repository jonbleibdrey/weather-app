import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const About = () => {
  return (
    <div className="about-container">
      <Logo />
      <div style={{ marginTop: "3%", marginLeft: "25%" }}>
        <h2>
          Welcome to LOOK-UP™ a site for weather
          <hr style={{ width: "52%", borderTop: "5px solid red" }} />
        </h2>
        <br />
        If you allow location will find your location and get you started, this
        is how they do it:
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
        recusandae cum repellendus sapiente accusamus! Eius sit voluptas
        voluptatem velit dolorum, quae perferendis consequatur quia temporibus
        possimus? In voluptate veniam ratione!
      </div>
      <div style={{ marginTop: "3%", marginLeft: "50%" }}>
        <SearchBar />
      </div>
    </div>
  );
};

export default About;
