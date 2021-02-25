import React from "react";
import "./navbar.css";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Cart from "../Cart/Cart";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(3);

  return (
    <div>
      <div id="grt-navbar">
        <div className="row-1-wrapper">
          <div className="row-1">
            <a href="/">
              <h1>GRT</h1>
            </a>
            <div className="search-bar">
              <input
                className="search-field"
                type="text"
                placeholder="   Search for Clothes, Brands and more"
              />
              <SearchIcon className="searchicon" />
            </div>
            <Cart cartCount={cartCount} setCartCount={setCartCount} />
          </div>
        </div>
        {/* <div className="row-2">
          <ul>
            <li className="upper-links">
              <a className="links" href="/Category1">
                Category 1
              </a>
            </li>
            <li className="upper-links">
              <a className="links" href="/Category2">
                Category 2
              </a>
            </li>
            <li className="upper-links">
              <a className="links" href="/Category3">
                Category 3
              </a>
            </li>
            <li className="upper-links">
              <a className="links" href="/Category4">
                Category 4
              </a>
            </li>
            <li className="upper-links">
              <a className="links" href="/Category5">
                Category 5
              </a>
            </li>
            <li className="upper-links">
              <a className="links" href="/Category6">
                Category 6
              </a>
            </li>
            <li className="upper-links"></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
