import React from "react";
import "./Listing.css";
import PurpleButton from "../CustomJS/PurpleButton.js";
import { Link } from "react-router-dom";
function Listing(props) {
  return (
    <div className="images_row">
      <Link to={`/${props.category}/${props.id}`}>
        <img src={props.image} className="cloth_image" alt="Suit"></img>
        <PurpleButton
          line1= {props.title}
          line2={`₹ ${props.price}`}
        />
      </Link>
    </div>
  );
}

export default Listing;
