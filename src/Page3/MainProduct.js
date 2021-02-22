import React from "react";
import "./MainProduct.css";
import image from "../images/image2.jpeg";
import Test from "../components1/test";
import PurpleButton from "../CustomJS/PurpleButton.js";

function MainProduct(props) {
  return (
    <div>
      <div className="page3_content">
        <div className="product_image">
          <img src={image} alt="Product Image"></img>
        </div>
        <div className="product_desc">
          <h1 className="title">Baby Blue Cotton Suit</h1>
          <p className="desc">
            A Beautiful Pure Designer Muslin Cream color Un-Stitched Suit with
            gotta Patti work Senton Bottom and Banarasi Print work Dupatta. this
            suit crafted with heavy work. Wear matching jewelry and silhouette
            heels that compliment your all Suits really well and complete.
          </p>
          <div className="buttons1">
            <PurpleButton line1="₹ 1,768" line2="* * * * *" />
            <PurpleButton line1="Add to Wishlist" />
          </div>
          <PurpleButton line1="Enquiry" />
        </div>
      </div>
    </div>
  );
}


export default MainProduct;
