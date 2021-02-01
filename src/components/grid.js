import React from 'react'
import "./grid.css";
import image1 from "../images/4x4.jpeg";
import image2 from "../images/8x4.jpeg";
import image3 from "../images/6x4.jpeg";


function grid() {
    return (
        <div>
            <div class="grid-container">
                <div class="dd"><img class="im" src={image1} alt=""></img></div>
                <div class="ee"><img class="im" src={image2} alt=""></img></div>
                <div class="ff"><img class="im" src={image3} alt=""></img></div>
                <div class="gg"><img class="im" src={image3} alt=""></img></div>
            </div>
        </div>
    )
}

export default grid
