import React from "react";
import "./test.css";

import Group2 from "../images/Group 2.jpg";

function Test(props) {
  return (
    <div className="images_row">
      <div>
        <img src={props.image} className="cloth_image" alt=""></img>
        <div className="content">
          
          <div className="price_tag">
            <h4 className="image_title">{props.title}</h4>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
