import React from "react";
import "./MainProduct.css";
import image from "../images/image2.jpeg";
import PurpleButton from "../CustomJS/PurpleButton.js";
import Cardarray from "../components1/cardarray";

var { ida } = "title2";
console.log(ida);



function MainProduct(props) {
  let product_id = props.match.params.ida
  product_id = parseInt(product_id)
  console.log(product_id)
    return (
        <div>
            <div className="page3_content">
                <div className="product_image">
                    <img
                        src={Cardarray.find((x) => x.id === product_id).image}
                        alt="ProductImage"
                    ></img>
                </div>
                <div className="product_desc">
                    <h1>{ida}</h1>
                    <h1 className="title">
                        {Cardarray.find((x) => x.id === product_id).title}
                    </h1>
                    <p className="desc">
                        {Cardarray.find((x) => x.id === product_id).description}
                    </p>
                    <div className="buttons1">
                        <PurpleButton
                            line1={
                                Cardarray.find((x) => x.id === product_id).price
                            }
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
