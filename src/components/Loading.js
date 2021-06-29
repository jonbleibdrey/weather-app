import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../css/Loading.css";

const Loading = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="loading-spinner">
          <h1>
            <Spinner animation="grow" variant="warning" size="lg" />
            <Spinner animation="grow" variant="primary" size="lg" />
            <Spinner animation="grow" variant="danger" size="lg" />
            Loading
            <Spinner animation="grow" variant="warning" size="lg" />
            <Spinner animation="grow" variant="primary" size="lg" />
            <Spinner animation="grow" variant="danger" size="lg" />
          </h1>
        </div>
      )}
    </div>
  );
};

export default Loading;
