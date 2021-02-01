import React from "react";
import "./test.css";

import image1 from "../images/image1.jpeg";
import Group2 from "../images/Group 2.jpg";

function Test(props) {
  return (
    <div className="images_row">
      <div>
        <img src={props.card.image} className="cloth_image"></img>
        <div className="content">
          {/* <img
            style={{
              width: "60%",
              marginLeft: "42.5%",
              transform: "translate(-50%)",
            }}
            src={Group2}
            alt="Photu"
          /> */}
          <div className="price_tag">
            <h4 className="image_title">{props.card.title}</h4>
            <p>{props.card.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
