import React from "react";
import DesignerHeading from "../homePage/DesignerHeading";
import Test from "../homePage/test";
import "./productlist.css";
import Cardarray from "../homePage/cardarray";

export default function productlist() {
  return (
    <div>
      <DesignerHeading />
      <div className="product_card">
        {Cardarray.map((card) => {
          return (
            <div>
              <Test
                id={card.id}
                image={card.image}
                title={card.title}
                price={card.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
