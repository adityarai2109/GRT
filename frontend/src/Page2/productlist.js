import React, { useState } from "react";
import DesignerHeading from "../homePage/DesignerHeading";
import Test from "../homePage/test";
import "./productlist.css";
import Navbar from "../homePage/navbar";
import Cardarray from "../homePage/cardarray";

const Productlist = ({ match }) => {
  let category = String(match.params.category);
  console.log(category);

  // category = category.toString();
  const [sortedCategory, setSortedCategory] = useState("Popularity");
  return (
    <div>
      <Navbar />
      <DesignerHeading name={category} />

      {/* <div className="orderby">
        <p className="sort">Sort by:</p>
        <p className="popularity">Popularity</p>
        <p className="price_htl">Price - high to low</p>
        <p className="price_lth">Price - low to high</p>
        <p className="latest">Latest</p>
      </div> */}

      <div className="product_card">
        {Cardarray.filter((categCard) => categCard.category === category)
          .sort(function (a, b) {
            return a.price - b.price;
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
          })}
      </div>
    </div>
  );
};

export default Productlist;
