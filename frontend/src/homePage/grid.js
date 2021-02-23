import React from "react";
import "./grid.css";
import image1 from "../images/fc1.jpg";
import image2 from "../images/fc2.png";
import image3 from "../images/fc3.png";
import image4 from "../images/fc4.png";

function grid() {
    return (
        <div>
            <div class="dflex">
                <div class="grid-container">
                    <div class="dd">
                        <img class="im1" src={image1} alt="image1"></img>
                    </div>
                    <div class="ff">
                        <img class="im3" src={image3} alt="image3"></img>
                    </div>
                </div>
                <div class="grid-container">
                    <div class="ee">
                        <img class="im2" src={image2} alt="image2"></img>
                    </div>
                    <div class="gg">
                        <img class="im4" src={image4} alt="image4"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default grid;
