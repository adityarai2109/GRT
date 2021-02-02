import React from "react";
import Test from "./test";
import Cardarray from "../components1/cardarray";

export default function card() {
  return (
    <div>
      <div className="trending_images">
        
        <div className="product_card">
        {Cardarray.slice(0, 4).map((card) => {
          return (
            <div>
              <Test image={card.image} title={card.title} price={card.price} />
            </div>
          );
        })}
        
      </div>
      </div>
    </div>
  );
}
