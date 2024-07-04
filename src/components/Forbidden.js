import React from "react";
// import './Forbidden.css'; // Create a custom CSS file for additional styles if needed

const Forbidden = () => {
  return (
    <div className="container text-center errorContainer">
    <h1>Page not found</h1>
    <a href="/" className="btn btn-primary mt-3">Go to Homepage</a>
  </div>
  );
};

export default Forbidden;
