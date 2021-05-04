import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "./Listing";
import { Button } from "@material-ui/core";
import viewMore from "../images/file-search.svg";
import { Link } from "react-router-dom";
import "./Card.css";
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
                <Listing
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
          <Button variant="outlined" className="hpvm">
            <img src={viewMore} style={{ height: "2rem" }} alt="" />
            <p>View more</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Card;
