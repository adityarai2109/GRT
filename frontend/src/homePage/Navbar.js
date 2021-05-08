import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import iconLogo from "../images/group1.svg";
import "./Navbar.css";
import iSearch from "../images/search.svg";
import Toggle from "../CustomJS/Toggle";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

export default function Navbar(props) {
  // function handleSearch(e) {
  //   e.preventDefault();
  //   props.setQuery(e.target.value);
  //   console.log(props.query);
  // }
  // const [stick, setStick] = useState(false);

  window.onscroll = function(){
    doStick();
  }
  function search(e) {
    e.preventDefault();
    const newItem = document.getElementById("inputnavid");
    //  console.log(props.query);
    if (newItem.value !== "") {
      props.setQuery(newItem.value);
    }
    //Router.replace(`/Suit/${props.query}`);
  }

  function doStick(){
    const searchbar = document.getElementById("searchbar") ;
    const stick = searchbar.offsetTop;
    const navbar = document.getElementById("navbar").offsetHeight;
    // console.log(stick)
    if(window.pageYOffset >= navbar)
      searchbar.classList.add("sticky");
    else
      searchbar.classList.remove("sticky");
  }
  return (
    /* \bs*t*a*r*k*\b */
    <div className="main_nav">
    <div className="navbar">
      <div id="navbar">
        <Link to="/">
        <div className="logo">
          <img style={{ height: "8vh" }} src={iconLogo} alt="GRT" />
          <h4 className="grt">Ganga Ram Textiles</h4>
        </div>
      </Link>
      </div>
      
      <div id="searchbar" className="searchbar">
        <input
          className="inputnav"
          id="inputnavid"
          type="text"
          placeholder="Search for Clothes, Brands and more..."
          // onChange={(e) => handleSearch(e)}
        />
        <div onClick={search}>
          <Button
            className="btn-search"
            // style={{"height":"5vh"}}
            component={Link}
            to={`/Suit`}
          >
            <img
              src={iSearch}
              className="search"
              style={{ cursor: "pointer", height: "4vh" }}
              alt="Search"
            />
          </Button>
        </div>
      </div>
      
      <Toggle className="nav_toggle"
        isDarkMode={props.isDarkMode}
        setIsDarkMode={props.setIsDarkMode}
      />
    </div>
    
      </div>
  );
  
}
/*
<SearchIcon
          onClick={addItem}
          className="search"
          style={{ cursor: "pointer", fontSize: "36px" }}
        />
*/
