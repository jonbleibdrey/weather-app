import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="loading-spinner">
          <h1>
            Loading... <Spinner animation="grow" variant="warning" size="lg" />{" "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Loading;
