import React, { useState, useEffect } from "react";
import axios from "axios";
import Test from "./test";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import viewMore from "../images/file-search.svg";
import { Link } from "react-router-dom";

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
        <Link to="/Suit">
          <Button variant="outlined" color="default" style={{ margin: "1rem" }}>
            {/* <SearchIcon /> */}
            <img style={{ height: "4vh" }} src={viewMore} alt="View More" />
            View more
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Card;
