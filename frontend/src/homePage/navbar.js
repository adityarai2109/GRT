import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import iconLogo from "../images/group1.svg";
import "./Navbar.css";
import iSearch from "../images/search.svg";
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
  function search(e) {
    e.preventDefault();
    const newItem = document.getElementById("inputnavid");
    //  console.log(props.query);
    if (newItem.value !== "") {
      props.setQuery(newItem.value);
    }
    //Router.replace(`/Suit/${props.query}`);
  }
  return (
    /* \bs*t*a*r*k*\b */
    <div className="navbar">
      <Link to="/">
        <a className="logo">
          <img style={{ height: "8vh" }} src={iconLogo} alt="GRT" />
          <h4 className="grt">Ganga Ram Textiles</h4>
        </a>
      </Link>

      <div className="searchbar">
        <input
          className="inputnav"
          id="inputnavid"
          type="text"
          placeholder="Search for Clothes, Brands and more..."
          // onChange={(e) => handleSearch(e)}
        />
        <div onClick={search}>
          <Button
            // style={{"height":"5vh"}}
            component={Link}
            to={`/Suit`}
            style={{ backgroundColor: "#630c99" }}
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
