import React, { useState, useEffect } from "react";
import axios from "axios";
import Test from "./test";
//import Cardarray from "../homePage/cardarray";

 function Card() {
  const [Cardarray, setCardarray] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setCardarray(data);
    };
    fetchProducts();
  }, []);

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
export default Card;