import React, { useState } from "react";
import "./Listing.css";
import PurpleButton from "../CustomJS/PurpleButton.js";
import Group2 from "../images/Group 2.jpg";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./GRT.svg";
// import image7 from "../images/image7.jpeg";
function Listing(props) {
  return (
    <div className="images_row">
      <Link to={`/${props.category}/${props.id}`}>
        <img src={props.image} className="cloth_image" alt="Suit"></img>
        <PurpleButton
          // line1= {props.title}
          line1={
            props.title.length > 22
              ? `${props.title.split(" ")[0]} ${props.title.split(" ")[1]} ${
                  props.title.split(" ")[2]
                } ...`
              : props.title
          }
          line2={`₹ ${props.price}`}
        />
      </Link>
    </div>
  );
}

export default Listing;
