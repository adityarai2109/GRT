import React, { useState } from "react";
import DesignerHeading from "../homePage/DesignerHeading";
import Listing from "../homePage/Listing";
import "./ProductList.css";
//import Cardarray from "../homePage/CardArray";
// import Pagination from "../CustomJS/Pagination";
import Range from "../CustomJS/Range";
import Footer from "../homePage/Footer";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import viewMore from "../images/file-search.svg";
import viewMoreDark from "../images/file-search-dark.svg";
import "../homePage/Card.css";
import Loader from "../CustomJS/Loader";

const ProductList = (props) => {
  const Cardarray = props.products;
  console.log("main");
  console.log(Cardarray);
  const imgUrl = "http://localhost:5000";

  const [rangeToggle, setRangeToggle] = useState(true);
  let category = String(props.match.params.category);
  const [sortedCategory, setSortedCategory] = useState("Latest");

  const [pageArray, setPageArray] = useState(8);
  console.log(pageArray);

  function newstate(newState) {
    let newSortedCategory = [...sortedCategory];
    newSortedCategory = newState;
    setSortedCategory(newSortedCategory);
  }

  var words = props.query.toLowerCase().split(" ");

  const filteredCardArray = Cardarray.filter((i) =>
    words.some(
      (word) =>
        i.name.toLowerCase().includes(word) ||
        i.description.toLowerCase().includes(word)
    )
  );

  function resetSearch() {
    props.setQuery("");
    document.getElementById("inputnavid").value = "";
  }

  const [value, setValue] = useState([0, 100]);
  function getCardlen() {
    if (sortedCategory === "range") {
      //console.log("state : range ", value[0] * 100);
      return filteredCardArray.filter(
        (categCard) =>
          categCard.category.toLowerCase() === category.toLowerCase() &&
          categCard.price >= value[0] * 100 &&
          categCard.price <= value[1] * 100
      ).length;
    } else {
      return filteredCardArray.filter(
        (categCard) =>
          categCard.category.toLowerCase() === category.toLowerCase() &&
          categCard.price >= value[0] * 100 &&
          categCard.price <= value[1] * 100
      ).length;
    }
  }

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  //setSortedCategory("htl")

  function Sortby() {
    if (sortedCategory === "range") {
      //console.log("state : range ", value[0] * 100);
      return filteredCardArray
        .filter(
          (categCard) =>
            categCard.category.toLowerCase() === category.toLowerCase() &&
            categCard.price >= value[0] * 100 &&
            categCard.price <= value[1] * 100
        )
        .sort(function (a, b) {
          return a.price - b.price;
        })
        .slice(0, pageArray)
        .map((card) => {
          return (
            <div onClick={() => resetSearch()}>
              <Listing
                id={card._id}
                image={`${imgUrl}/upload/${card.image}`}
                title={card.name}
                price={card.price}
                category={card.category}
              />
            </div>
          );
        });
    } else {
      return filteredCardArray
        .filter(
          (categCard) =>
            categCard.category.toLowerCase() === category.toLowerCase() &&
            categCard.price >= value[0] * 100 &&
            categCard.price <= value[1] * 100
        )
        .sort(function (a, b) {
          if (sortedCategory === "Latest") {
            let d1 = parseInt(a.createdAt);
            let d2 = parseInt(b.createdAt);
            return d2 - d1;
          } else if (sortedCategory === "lth") {
            return a.price - b.price;
          } else if (sortedCategory === "htl") {
            return b.price - a.price;
          }
          return parseInt(a.createdAt) - parseInt(b.createdAt);
        })
        .slice(0, pageArray)
        .map((card) => {
          return (
            <div onClick={() => resetSearch()}>
              <Listing
                id={card._id}
                image={`${imgUrl}/upload/${card.image}`}
                title={card.name}
                price={card.price}
                category={card.category}
              />
            </div>
          );
        });
    }
  }

  return (
    <div className="productlist">
      <DesignerHeading name={category} />
      <div className="orderby">
        <p className="price_htl" onClick={() => newstate("htl")}>
          Price - high to low
        </p>
        <p className="price_lth" onClick={() => newstate("lth")}>
          Price - low to high
        </p>
        <p className="latest" onClick={() => newstate("Latest")}>
          Latest
        </p>
        <p className="range" onClick={() => newstate("range")}>
          {rangeToggle ? (
            <div
              id="input-slider"
              onClick={() => setRangeToggle(false)}
              style={{ width: "300px" }}
              gutterBottom
            >
              Range
            </div>
          ) : (
            <div className="rangebar" style={{ height: "64px" }}>
              <Range value={value} setValue={setValue} className="navRange" />
              <button
                style={{ fontWeight: "bolder" }}
                onClick={() => setRangeToggle(true)}
              >
                Done
              </button>
            </div>
          )}
        </p>
      </div>
      {/* <h1 className="results">Showing results for : {props.query}</h1> */}
      {Cardarray.length !== 0 ? (
        <div className="product_card">{Sortby(filteredCardArray)}</div>
      ) : (
        <Loader isDarkMode={props.isDarkMode} />
      )}
      {console.log(Sortby(filteredCardArray).length)}
      {pageArray < getCardlen(filteredCardArray) ? (
        <Button
          variant="outlined"
          style={{
            background: "white",
            fontFamily: "Poppins",
            marginBottom: "1rem",
            fontWeight: "bold",
            border: "1px solid #393E46",
          }}
          onClick={() => setPageArray(pageArray + 4)}
        >
          <img
            className="hpvmi"
            src={props.isDarkMode ? viewMoreDark : viewMore}
            style={{ height: "2rem" }}
            alt=""
          />
          <p className="hpvmp">View more</p>
        </Button>
      ) : null}
      <Footer />
    </div>
  );
};

export default ProductList;
