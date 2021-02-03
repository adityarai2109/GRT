import React from 'react'
import "./navbar.css";

function navbar() {
    return (
        <div>
  <div id="flipkart-navbar">
    <div className="container">
      
      <div className="row row1">
        <div className="col-sm-2">
          <h2 style={{margin: 0}}><span className="smallnav menu" onclick="openNav()">☰ Brand</span></h2>
          <h1 style={{margin: 0}}><span className="largenav">Brand</span></h1>
        </div>
        <div className="flipkart-navbar-search smallsearch col-sm-8 col-xs-11">
          <div className="row">
            <input className="flipkart-navbar-input col-xs-11" type placeholder="Search for Clothes, Brands and more" name />
            <button className="flipkart-navbar-button col-xs-1">
              <svg width="15px" height="15px">
                <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 " />
              </svg>
            </button>
          </div>
        </div>
        <div className="cart largenav col-sm-2">
          <a className="cart-button">
            <i className="fa fa-heart"></i>
            <span className="wishlist">Wishlist</span>
            <span className="item-number ">0</span>
          </a>
        </div>
      </div>

      <div className="row row2">
        <ul>
          <li className="upper-links"><a className="links" href="/cloth">Category 1</a></li>
          <li className="upper-links"><a className="links" href="/cloth">Category 2</a></li>
          <li className="upper-links"><a className="links" href="/cloth">Category 3</a></li>
          <li className="upper-links"><a className="links" href="/cloth">Category 4</a></li>
          <li className="upper-links"><a className="links" href="/cloth">Category 5</a></li>
          <li className="upper-links"><a className="links" href="/cloth">Category 6</a></li>
          <li className="upper-links">
            
          </li>
          
        </ul>
      </div>

    </div>
  </div>
  


        </div>
    )
}

export default navbar
