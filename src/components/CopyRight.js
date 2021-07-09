import React from 'react'

const CopyRight = () => {
    return (
        <div>
             <h5 style={{ marginTop: "10px" }}>Copyright© LOOK-UP, Inc.</h5>
            <a
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
              href="https://www.legal.com/"
            >
              Legal-Stuff
            </a>
            |
            <a
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
              href="privacypolicies.com"
            >
              {" "}
              Privacy-Policy
            </a>
        </div>
    )
}

export default CopyRight
