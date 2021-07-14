import React from "react";
import "../css/CopyRight.css";

const CopyRight = () => {
  return (
    <div className="copyRight">
      <h5 className="copyRight-h5">Copyright© LOOK-UP, Inc.</h5>
      <a
        className="copyRight-aTag"
        target="_blank"
        rel="noreferrer"
        href="https://www.legal.com/"
      >
        Legal-Stuff
      </a>
      |
      <a
        className="copyRight-aTag"
        target="_blank"
        rel="noreferrer"
        href="privacypolicies.com"
      >
        Privacy-Policy
      </a>
    </div>
  );
};

export default CopyRight;
