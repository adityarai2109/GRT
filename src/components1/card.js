import React from "react";
import Test from "./test";
import image1 from "../images/image1.jpeg";

export default function card() {
  return (
    <div>
      <div className="trending_images">
        <div className="cards_wrapper">
          <Test image= {image1} 
                title= "Baby blue cotton suit" 
                price= "₹1,286"/>
          <Test image= "../images/image1" 
                title= "Baby blue cotton suit" 
                price= "₹1,286"/>
          <Test image= "../images/image1" 
                title= "Baby blue cotton suit" 
                price= "₹1,286"/>
          <Test image= "../images/image1" 
                title= "Baby blue cotton suit" 
                price= "₹1,286"/>
        </div>
      </div>
    </div>
  );
}
