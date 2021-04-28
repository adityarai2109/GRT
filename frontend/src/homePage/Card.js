import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "./Listing";
import { Button } from "@material-ui/core";
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
          {Cardarray.slice(0, 8).map((card) => {
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
          <Button
            variant="outlined"
            color="default"
            style={{
              margin: "1rem",
              color: "#eeee",
              border: "2px solid #eeee",
            }}
          >
            {/* <SearchIcon /> */}
            <img style={{ height: "4vh" }} src={viewMore} alt="View More" />
            <p
              style={{
                color: "#eeee",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              View more
            </p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Card;
