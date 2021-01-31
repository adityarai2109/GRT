import React from "react";
import "./test.css";

import image1 from "../images/image1.jpeg";
import Group2 from "../images/Group 2.jpg";

function test() {
  return (
    <div className="images_row">
      <div>
        <img src={image1} className="cloth_image" alt=""></img>
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
          <div className="img_description">
          <h4 className="image_title">Baby blue cotton suit</h4>
          <p>Price : ₹1,286.25</p></div>
          
        </div>
      </div>
    </div>
  );
}

export default test;
