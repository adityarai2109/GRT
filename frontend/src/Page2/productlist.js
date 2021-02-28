import React, { useState } from "react";
import DesignerHeading from "../homePage/DesignerHeading";
import Test from "../homePage/test";
import "./productlist.css";
import Navbar from "../homePage/navbar";
import Cardarray from "../homePage/cardarray";

const Productlist = ({ match }) => {
  let category = String(match.params.category);
  // category = category.toString();
  const [sortedCategory, setSortedCategory] = useState("Latest");

  function newstate(newState) {
    let newSortedCategory = [...sortedCategory];
    newSortedCategory = newState;
    setSortedCategory(newSortedCategory);
  }

  function Sortby() {
    return Cardarray.filter((categCard) => categCard.category === category)
      .sort(function (a, b) {
        if (sortedCategory === "Latest") {
          let d1 = parseInt(a.createdAt);
          let d2 = parseInt(b.createdAt);
          return -(d1 - d2);
        } else if (sortedCategory === "lth") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      })
      .map((card) => {
        return (
          <div>
            <Test
              id={card.id}
              image={card.image}
              title={card.title}
              price={card.price}
              category={card.category}
            />
          </div>
        );
      });
  }

  //setSortedCategory("htl")
  return (
    <div>
      <Navbar />
      <DesignerHeading name={category} />
      <hr />
      <div className="orderby">
        {/* <p className="sort">Sort by:</p> */}
        <p className="price_htl" onClick={() => newstate("htl")}>
          Price - high to low
        </p>
        <p className="price_lth" onClick={() => newstate("lth")}>
          Price - low to high
        </p>
        <p className="latest" onClick={() => newstate("Latest")}>
          Latest
        </p>
      </div>
      <hr />
      <div className="product_card">{Sortby(Cardarray)}</div>
    </div>
  );
};

export default Productlist;
