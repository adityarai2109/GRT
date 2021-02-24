import React from "react";
import Test from "./test";
import Cardarray from "../homePage/cardarray";

export default function card() {
  return (
    <div>
      <div className="trending_images">
        <div className="product_card">
          {Cardarray.slice(0, 4).map((card) => {
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
    </div>
  );
}
