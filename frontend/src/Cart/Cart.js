import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Cart.css";

export default function Cart(props) {
  return (
    <div className="wishlist">
      <FavoriteIcon className="shoppingCart" />
      <h4>Wishlist</h4>
      {/* <p>{props.cartCount}</p> */}
      <div className="cardcount">
        <span>{props.cartCount}</span>
      </div>
    </div>
  );
}
