import React from "react";
import Rating from "./Rating";
import "./MainProduct.css";
import Info from "../homePage/Info";
import Footer from "../homePage/Footer";
import Navbar from "../homePage/Navbar";
import { useEffect } from "react";
import whatsappicon from "../images/whatsapp.svg";
import { Button } from "@material-ui/core";
import viewMore from "../images/file-search.svg";
import viewMoreDark from "../images/file-search-dark.svg";
import { Link } from "react-router-dom";
import Loader from "../CustomJS/Loader";
import ZoomDecide from "./ZoomDecide.js";
import DesignerHeading from "../homePage/DesignerHeading";
import FOF from "../fof/fof";

const MainProduct = (props) => {
  const Cardarray = props.products;
  // const imgUrl = process.env.REACT_APP_API_URL;
  const imgUrl = process.env.REACT_APP_IMAGE_FETCH_API;
  let id = props.match.params.ida; // isko int me convert krna tha
  // console.log(id);
  let category = String(props.match.params.category);
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  if (
    Cardarray.filter(
      (categCard) =>
        categCard.category.toLowerCase() === category.toLowerCase() &&
        categCard._id === id
    ).length === 0 &&
    Cardarray.length !== 0
  )
    return (
      <div>
        <FOF />
      </div>
    );
  else
    return (
      <div>
        <Navbar
          isDarkMode={props.isDarkMode}
          setIsDarkMode={props.setIsDarkMode}
        />
        <div>
          {Cardarray.length !== 0 ? (
            <div className="page3_content">
              <div className="product_image">
                <ZoomDecide
                  image={`${imgUrl}${
                    Cardarray.find(
                      (x) => x._id === id && x.category === category
                    ).image
                  }`}
                />
              </div>
              <div
                style={{
                  background: props.isDarkMode ? "white" : "black",
                }}
                className="partition"
              ></div>
              <div className="product_desc">
                <h1 className="title">
                  {Cardarray.find((x) => x._id === id).name}
                </h1>
                <div className="rate">
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    rating={5}
                  />
                </div>
                <p className="desc">
                  <span style={{ fontWeight: "800", fontFamily: "Poppins" }}>
                    Design :{" "}
                  </span>
                  {Cardarray.find((x) => x._id === id).design}
                </p>
                <p className="desc">
                  <span style={{ fontWeight: "800", fontFamily: "Poppins" }}>
                    Material :{" "}
                  </span>
                  {Cardarray.find((x) => x._id === id).material}
                </p>
                <p className="desc">
                  <span style={{ fontWeight: "800", fontFamily: "Poppins" }}>
                    Top Length :{" "}
                  </span>
                  {Cardarray.find((x) => x._id === id).topLength} m
                </p>
                <p className="desc">
                  <span style={{ fontWeight: "800", fontFamily: "Poppins" }}>
                    Duppata Length :{" "}
                  </span>
                  {Cardarray.find((x) => x._id === id).duppataLength} m
                </p>
                <p className="desc">
                  <span style={{ fontWeight: "800", fontFamily: "Poppins" }}>
                    Bottom Length :{" "}
                  </span>
                  {Cardarray.find((x) => x._id === id).bottomLength} m
                </p>
                <p className="desc">
                  <span style={{ fontWeight: "800", fontFamily: "Poppins" }}>
                    Description :{" "}
                  </span>
                  {Cardarray.find((x) => x._id === id).description}
                </p>
                <div className="p_price">
                  <span className="dis_price">
                    {"₹ " + Cardarray.find((x) => x._id === id).price}
                  </span>
                  <span className="org_price">
                    {"₹ " +
                      (Math.round(
                        parseInt(
                          1.2 * Cardarray.find((x) => x._id === id).price
                        ) / 100
                      ) *
                        100 -
                        1)}
                  </span>
                </div>

                <div className="whatsappus">
                  <a
                    href="https://wa.me/919999660329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-anchor-tag"
                  >
                    <img
                      className="whatsappicon"
                      src={whatsappicon}
                      alt=""
                    ></img>
                    <span className="whatsappnum">
                      <p>Whatsapp us </p>
                    </span>
                  </a>
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
          ) : (
            <Loader isDarkMode={props.isDarkMode} />
          )}

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

/* <InnerImageZoom
                className=""
                src={`${imgUrl}/upload/${
                  Cardarray.find((x) => x._id === id && x.category === category)
                    .image
                }`}

                // alt="ProductImage"
              /> */
