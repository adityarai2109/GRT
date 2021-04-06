import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import iconLogo from "../images/group1.svg";

import "./navbar.css";

export default function Navbar(props) {
  function handleSearch(e) {
    props.setQuery(e.target.value);
    console.log(props.query);
  }
  return (
    <div className="navbar">
      <a className="logo" href="/">
        <img style={{ height: "8vh" }} src={iconLogo} alt="GRT" />
        <h4 style={{ marginLeft: "2rem" }}>Ganga Ram Textiles</h4>
      </a>
      <div className="searchbar">
        <input
          className="inputnav"
          type="text"
          placeholder="Search for Clothes, Brands and more..."
          onChange={(e) => handleSearch(e)}
        />
        <SearchIcon
          className="search"
          style={{ cursor: "pointer", fontSize: "36px" }}
        />
      </div>
    </div>
  );
}
