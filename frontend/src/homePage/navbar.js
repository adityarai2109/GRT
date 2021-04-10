import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import iconLogo from "../images/group1.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(props) {
  // function handleSearch(e) {
  //   e.preventDefault();
  //   props.setQuery(e.target.value);
  //   console.log(props.query);
  // }
  function addItem(e) {
    e.preventDefault();
    const newItem = document.getElementById("inputnavid");
    //  console.log(props.query);
    if (newItem.value !== "") {
      props.setQuery(newItem.value);
    }
  }
  return (
    /* \bs*t*a*r*k*\b */
    <div className="navbar">
      <a className="logo" href="/">
        <img style={{ height: "8vh" }} src={iconLogo} alt="GRT" />
        <h4 className="grt">Ganga Ram Textiles</h4>
      </a>
      <div className="searchbar">
        <input
          className="inputnav"
          id="inputnavid"
          type="text"
          placeholder="Search for Clothes, Brands and more..."
          // onChange={(e) => handleSearch(e)}
        />
        <SearchIcon
          onClick={addItem}
          className="search"
          style={{ cursor: "pointer", fontSize: "36px" }}
        />
      </div>
    </div>
  );
}
