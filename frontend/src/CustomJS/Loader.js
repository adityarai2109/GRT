import React from "react";
import "./loader.css";

function Loader({ isDarkMode }) {
  return (
    <div style={{ height: "400px", justifyContent: "center" }}>
      <div className="wrapper">
        <div
          className="circle"
          style={{ backgroundColor: isDarkMode ? "white" : "#6e10a8" }}
        />
        <div
          className="circle"
          style={{ backgroundColor: isDarkMode ? "white" : "#6e10a8" }}
        />
        <div
          className="circle"
          style={{ backgroundColor: isDarkMode ? "white" : "#6e10a8" }}
        />
        <div className="shadow" />
        <div className="shadow" />
        <div className="shadow" />
        <span
          style={{
            fontFamily: "Poppins",
            color: isDarkMode ? "white" : "black",
          }}
        >
          Loading
        </span>
      </div>
    </div>
  );
}

export default Loader;
