import React from "react";
import "../css/Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>
        <a
          className="footer-aTag"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com"
        >
          <AiFillFacebook />
        </a>
      </h1>
      <h1>
        <a
          className="footer-aTag"
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com"
        >
          <AiFillTwitterCircle />
        </a>
      </h1>
      <h1>
        <a
          className="footer-aTag"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com"
        >
          <AiFillInstagram />
        </a>
      </h1>
    </div>
  );
};

export default Footer;
