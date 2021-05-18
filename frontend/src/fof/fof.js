import { Link } from "react-router-dom";
import React from "react";
import "./fof.css";
import fofLogo1 from "./logo1.svg";
import fofLogo2 from "./logo2.svg";

function fof() {
  return (
    <div style={{}}>
      <div className="fof">
        <img
          className="fofimg"
          src={Math.random() > 0.5 ? fofLogo1 : fofLogo2}
          alt="😔"
        />
        <p className="fof1">404 ERROR</p>
        <p className="fof2">The page you are looking for doesn't exist!</p>
        <Link to="/">
          <button className="bth">Back to home</button>
        </Link>
      </div>
    </div>
  );
}

export default fof;
