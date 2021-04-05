import React from "react";
import "./MainProduct.css";
import image from "../images/image2.jpeg";
import PurpleButton from "../CustomJS/PurpleButton.js";
import Cardarray from "../homePage/cardarray";
import Navbar from "../homePage/navbar";
import Footer from "../homePage/footer5";
import MyFooter from "../homePage/myFooter";

// myId = this.props.match.params.ida

const MainProduct = ({ match }) => {
  let id = parseInt(match.params.ida); // isko int me convert krna tha
  let category = String(match.params.category)
  return (
    <>
      <div>
        <Navbar />
        <div className="page3_content">
          <div className="product_image">
            <img
              className="pimage"
              src={Cardarray.find((x) => x.id === id && x.category === category).image}
              alt="ProductImage"
            ></img>
          </div>
          <div className="partition"></div>
          <div className="product_desc">
            <h1 className="title">
              {Cardarray.find((x) => x.id === id).title}
            </h1>
            <p className="desc">
              {Cardarray.find((x) => x.id === id).description}
            </p>
            <div className="buttons1">
              <PurpleButton

                line1={"₹ " + Cardarray.find((x) => x.id === id).price}
              />
              <PurpleButton line1="Add to Wishlist" />
            </div>
            <PurpleButton line1="Enquiry" />
          </div>
        </div>
      </div>
      <Footer />
      <MyFooter />
    </>
  );
};

export default MainProduct;
