
import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.css"; // Import the CSS file

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops</h1>
      <h2>Something went wrong</h2>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  );
};

export default Error;
