import React from "react";
import "./MainProduct.css";
import PurpleButton from "../CustomJS/PurpleButton.js";
import Cardarray from "../homePage/cardarray";
import Navbar from "../homePage/navbar";
import Footer from "../homePage/footer5";
import MyFooter from "../homePage/myFooter";
// import ReactImageMagnify from "react-image-magnify";

// Cardarray.find(
//   (x) => x.id === id && x.category === category
// ).image
// myId = this.props.match.params.ida

const MainProduct = (props) => {
  let id = parseInt(props.match.params.ida); // isko int me convert krna tha
  let category = String(props.match.params.category);
  return (
    <>
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
            {/* <ReactImageMagnify className='pimage'
            style={{padding:"3rem"}}
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: Cardarray.find(
                    (x) => x.id === id && x.category === category
                  ).image,
                  width: 200,
                  height: 200,
                },
                largeImage: {
                  src: Cardarray.find(
                    (x) => x.id === id && x.category === category
                  ).image,
                  enlargedImagePosition: "over",
                  width: 600,
                  height: 1000,
                },
              }}
            /> */}
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
