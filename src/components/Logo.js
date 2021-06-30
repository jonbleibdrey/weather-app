import React from "react";
import "../css/Logo.css";

const Logo = () => {
  return (
    <div className="about-container">
      <img
        src="../logoRain1.png"
        alt="rain"
        style={{
          float: "left",
          width: "15vw",
          height: "15vw",
          marginTop: "-3%",
          borderRadius: "20px",
          boxShadow: "-5px 9px 20px -8px black",
        }}
      />
      <div className="aboutH1">LOOK-UP™</div>
    </div>
  );
};

export default Logo;
