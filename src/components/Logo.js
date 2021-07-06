import React from "react";
import "../css/Logo.css";

const Logo = ({ showSearchBar, clear }) => {
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
          cursor: "pointer",
        }}
        onClick={clear}
      />
      <div className="aboutH1" style={{ cursor: "pointer" }} onClick={clear}>
        LOOK-UP™
      </div>
    </div>
  );
};

export default Logo;
