import React from "react";
import Listing from "./Listing";
import { Button } from "@material-ui/core";
import viewMore from "../images/file-search.svg";
import viewMoreDark from "../images/file-search-dark.svg";
import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  console.log(props);
  const imgUrl = "http://localhost:5000";
  const Cardarray = props.products;

  return (
    <div>
      <div className="trending_images">
        <div className="product_card">
          {Cardarray !== undefined
            ? Cardarray.sort(() => 0.5 - Math.random())
                .slice(0, 4)
                .sort(() => 0.5 - Math.random())
                .map((card) => {
                  return (
                    <div>
                      <Listing
                        id={card._id}
                        image={`${imgUrl}/upload/${card.image}`}
                        title={card.name}
                        price={card.price}
                        category={card.category}
                      />
                      {console.log(card.image)}
                    </div>
                  );
                })
            : null}
        </div>
        <Link to="/Suit">
          <Button
            variant="outlined"
            style={{
              background: "white",
              fontFamily: "Poppins",
              fontWeight: "bold",
              border: "1px solid #393E46",
              marginTop: "1rem",
            }}
          >
            <img
              className="hpvmi"
              src={props.isDarkMode ? viewMoreDark : viewMore}
              style={{ height: "2rem" }}
              alt=""
            />
            <p className="hpvmp">View more</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Card;
