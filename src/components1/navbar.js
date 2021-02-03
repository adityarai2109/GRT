import React from 'react'
import "./navbar.css";
import {useState} from "react"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



export default function Navbar() {

    const [cartCount, setCartCount] = useState(3)
    
    return (
      <div>
        <div id="grt-navbar">
          <div className="row-1-wrapper">
            <div className="row-1">
              <h1>Brand</h1>
              <div className="search-bar">
                <input
                  className="search-field"
                  type="text"
                  placeholder="   Search for Clothes, Brands and more"
                />
                <SearchIcon className = "searchicon" />
              </div>
              <div className="wishlist">
                <ShoppingCartIcon className="shoppingCart" />
                <h4>Cart</h4>
                <p>{cartCount}</p>
              </div>
            </div>
          </div>
          <div className="row-2">
            <ul>
              <li className="upper-links">
                <a className="links" href="/cloth">
                  Category 1
                </a>
              </li>
              <li className="upper-links">
                <a className="links" href="/cloth">
                  Category 2
                </a>
              </li>
              <li className="upper-links">
                <a className="links" href="/cloth">
                  Category 3
                </a>
              </li>
              <li className="upper-links">
                <a className="links" href="/cloth">
                  Category 4
                </a>
              </li>
              <li className="upper-links">
                <a className="links" href="/cloth">
                  Category 5
                </a>
              </li>
              <li className="upper-links">
                <a className="links" href="/cloth">
                  Category 6
                </a>
              </li>
              <li className="upper-links"></li>
            </ul>
          </div>
        </div>
      </div>
    );
}
