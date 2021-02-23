import React from "react";
import "./MainProduct.css";
import image from "../images/image2.jpeg";
import PurpleButton from "../CustomJS/PurpleButton.js";
import Cardarray from "../components1/cardarray";

var {ida} = "title2";
console.log(ida)
// myId = this.props.match.params.ida


const  MainProduct = ({match}) => {
  return (
    <div>
      <div className="page3_content">
        <div className="product_image">
          <img
            src={Cardarray.find((x) => x.id === match.params.ida).image}
            alt="ProductImage"
          ></img>
        </div>
        <div className="product_desc">
          <h1>{ida}</h1>
          <h1 className="title">
            {Cardarray.find((x) => x.id === match.params.ida).title}
          </h1>
          <p className="desc">
            {Cardarray.find((x) => x.id === match.params.ida).description}
          </p>
          <div className="buttons1">
            <PurpleButton
              line1={Cardarray.find((x) => x.id === match.params.ida).price}
              line2="* * * * *"
            />
            <PurpleButton line1="Add to Wishlist" />
          </div>
          <PurpleButton line1="Enquiry" />
        </div>
      </div>
    </div>
  );
}


export default MainProduct;
