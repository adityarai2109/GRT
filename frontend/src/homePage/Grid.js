import React from "react";
import "./Grid.css";
import image1 from "../images/fc1.jpg";
import image2 from "../images/fc2.png";
import image3 from "../images/fc3.png";
import image4 from "../images/fc4.png";

function Grid() {
  return (
    <div>
      <div className="dflex">
        <div className="grid-container">
          <div className="dd">
            <img className="im1" src={image1} alt="image1"></img>
          </div>
          <div className="ff">
            <img className="im3" src={image3} alt="image3"></img>
          </div>
        </div>
        <div className="grid-container">
          <div className="ee">
            <img className="im2" src={image2} alt="image2"></img>
          </div>
          <div className="gg">
            <img className="im4" src={image4} alt="image4"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
