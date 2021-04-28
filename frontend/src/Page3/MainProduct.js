import React from "react";
import "./MainProduct.css";
import PurpleButton from "../CustomJS/PurpleButton.js";
import Cardarray from "../homePage/CardArray";
import Navbar from "../homePage/Navbar";
import Info from "../homePage/Info";
import Footer from "../homePage/Footer";
import { useEffect } from "react";

import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import viewMore from "../images/file-search.svg";
import { Link } from "react-router-dom";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
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
                        <div className="pimage">
                            <InnerImageZoom
                            className=''
                                src={
                                    Cardarray.find(
                                        (x) =>
                                            x.id === id &&
                                            x.category === category
                                    ).image
                                }
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
                        <h1 className="title">
                            {Cardarray.find((x) => x.id === id).title}
                        </h1>
                        <p className="desc">
                            {Cardarray.find((x) => x.id === id).description}
                        </p>
                        <div className="buttons1">
                            <PurpleButton
                                line1={
                                    "₹ " +
                                    Cardarray.find((x) => x.id === id).price
                                }
                            />
                            <PurpleButton line1="Add to Wishlist" />
                        </div>
                        <PurpleButton
                            line1="Whatsapp us on:"
                            line2="+91 9876543210"
                        />
                    </div>
                </div>

                <Link to="/Suit">
                    <Button
                        variant="outlined"
                        color="default"
                        style={{
                            margin: "1rem",
                            background: "white",
                            color: "#6B2097",
                            border: "4px solid #e0e0e0",
                        }}
                    >
                        {/* <SearchIcon /> */}
                        <img
                            style={{ height: "4vh" }}
                            src={viewMore}
                            alt="View More"
                        />
                        View more products
                    </Button>
                </Link>
            </div>
            <Info />
            <Footer />
        </div>
    );
};

export default MainProduct;
