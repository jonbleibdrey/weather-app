import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <a href="https://www.facebook.com">
        <AiFillFacebook />
      </a>
      <a href="https://www.twitter.com">
        <AiFillTwitterCircle />
      </a>
      <a href="https://www.instagram.com">
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default Footer;
