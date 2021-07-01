import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const About = ({ weatherIcon }) => {
  const [showResults, setShowResults] = useState(false);

  const searchBar = () => {
    setShowResults(!showResults);
  };

  return (
    <div className="about-container">
      <Logo searchBar={searchBar} />
      <div style={{ marginTop: "3%", marginLeft: "25%" }}>
        <h2>
          Welcome to LOOK-UP™ a site for weather
          <hr style={{ width: "52%", borderTop: "5px solid red" }} />
        </h2>
        <br />
        <h5>
          If you allow location to find you! It will give you your weather,
          plain, and simple.
        </h5>
        <br />
        <p>
          <strong>This is how it works: </strong> Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nemo recusandae cum repellendus sapiente
          accusamus! Eius sit voluptas voluptatem velit dolorum, quae
          perferendis consequatur quia temporibus possimus? In voluptate veniam
          ratione!
        </p>
      </div>
      <div style={{ marginLeft: "25%" }}>
        <SearchBar
          showResults={showResults}
          searchBar={searchBar}
          weatherIcon={weatherIcon}
        />
      </div>
    </div>
  );
};

export default About;
