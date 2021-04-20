import React from "react";
import "./MainProduct.css";
import PurpleButton from "../CustomJS/PurpleButton.js";
import Cardarray from "../homePage/cardarray";
import Navbar from "../homePage/navbar";
import Footer from "../homePage/footer5";
import MyFooter from "../homePage/myFooter";
import { useEffect } from "react";

// import ReactImageMagnify from "react-image-magnify";

// Cardarray.find(
//   (x) => x.id === id && x.category === category
// ).image
// myId = this.props.match.params.ida

const MainProduct = (props) => {
  let id = parseInt(props.match.params.ida); // isko int me convert krna tha
  let category = String(props.match.params.category);
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    /*style={{height:"calc(100% - 20vh - 12rem)"}}  */
    <div>
      <div>
        <div className="page3_content">
          <div className="product_image">
            <img
              className="pimage"
              src={
                Cardarray.find((x) => x.id === id && x.category === category)
                  .image
              }
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
            <PurpleButton line1="Whatsapp us on:" line2="+91 9876543210" />
          </div>
        </div>
      </div>
      <Footer />
      <MyFooter />
    </div>
  );
};

export default MainProduct;
