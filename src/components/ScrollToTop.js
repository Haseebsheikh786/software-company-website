import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spinner } from "reactstrap";

const ScrollToTop = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavigating(true);
    setTimeout(() => setIsNavigating(false), 1000); // Adjust timeout as needed
  }, [location]);

  return (
      <>
      {isNavigating && (
        <div className="spinner-container">
          <div className="loader"></div> {/* Replace with your spinner CSS class */}
        </div>
      )}
      {!isNavigating && children}
      </>
  );
};

export default ScrollToTop;
