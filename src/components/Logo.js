import React from "react";
import "../css/Logo.css";

const Logo = ({ clear }) => {
  return (
    <div className="logo-container">
      <img
        className="logo-img"
        src="../logoRain1.png"
        alt="rain"
        onClick={clear}
      />
      <div className="logo-h1" onClick={clear}>
        LOOK-UP™
      </div>
    </div>
  );
};

export default Logo;
