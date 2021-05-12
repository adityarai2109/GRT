import React from "react";
import Rating from "./Rating";
import "./MainProduct.css";
import Info from "../homePage/Info";
import Footer from "../homePage/Footer";
import { useEffect } from "react";
import whatsappicon from "../images/whatsapp.svg";

import { Button } from "@material-ui/core";
import viewMore from "../images/file-search.svg";
import viewMoreDark from "../images/file-search-dark.svg";
import { Link } from "react-router-dom";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import DesignerHeading from "../homePage/DesignerHeading";

const MainProduct = (props) => {
  const Cardarray = props.products;
  const imgUrl = "http://localhost:5000";
  let id = props.match.params.ida; // isko int me convert krna tha
  console.log(id);
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
            <div className="pimage">
              <InnerImageZoom
                className=""
                src={`${imgUrl}/upload/${
                  Cardarray.find((x) => x._id === id && x.category === category)
                    .image
                }`}

                // alt="ProductImage"
              />
            </div>

            {/* <img
              className="pimage"
              src={
                Cardarray.find((x) => x.id === id && x.category === category)
                  .image
              }
              alt="ProductImage"
            ></img> */}
          </div>
          <div className="partition"></div>
          <div className="product_desc">
            <h1 style={{ textAlign: "left" }} className="title">
              {Cardarray.find((x) => x._id === id).name}
            </h1>
            <div className="rate">
              <Rating
                name="size-large"
                defaultValue={2}
                size="large"
                rating={4}
              />
            </div>
            <p className="desc">
              {Cardarray.find((x) => x._id === id).description}
            </p>
            <div className="p_price">
              <span className="dis_price">
                {"₹ " + Cardarray.find((x) => x._id === id).price}
              </span>
              <span className="org_price">
                {"₹ " +
                  (Math.round(
                    parseInt(1.2 * Cardarray.find((x) => x._id === id).price) /
                      100
                  ) *
                    100 -
                    1)}
              </span>
            </div>
            <div className="whatsappus">
              <img className="whatsappicon" src={whatsappicon} alt=""></img>
              <span className="whatsappnum">
                <p>Whatsapp us on :&nbsp;</p>
                <p>&nbsp;+91 9876543210</p>
              </span>
            </div>
            {/* <div className="buttons1">
                            <PurpleButton line1="Add to Wishlist" />
                        </div>
                        <PurpleButton
                            line1="Whatsapp us on:"
                            line2="+91 9876543210"
                        /> */}
          </div>
        </div>

        <Link to="/Suit">
          <Button
            variant="outlined"
            style={{
              background: "white",
              fontFamily: "Poppins",
              fontWeight: "bold",
              border: "1px solid #393E46",
            }}
          >
            {/* <SearchIcon /> */}
            <img
              className="hpvmi"
              src={props.isDarkMode ? viewMoreDark : viewMore}
              style={{ height: "2rem" }}
              alt=""
            />

            <p className="hpvmp">View more products</p>
          </Button>
        </Link>
      </div>
      <DesignerHeading name="Contacts" />
      <Info />
      <Footer />
    </div>
  );
};

export default MainProduct;
