import React from "react";
import "../CustomJS/PurpleButton.css";

function PurpleButton(props) {
  return (
    <div className="content">
      <div className="price_tag">
        <h4 className="image_title">{props.line1}</h4>
        <p className="line2">&#8377; {props.line2}</p>
      </div>
    </div>
  );
}

export default PurpleButton;
