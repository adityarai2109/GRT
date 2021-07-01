import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import iconLogo from "../images/group1.svg";
import "./Navbar.css";
import iSearch from "../images/search.svg";
import Toggle from "../CustomJS/Toggle";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import { AdminContext } from "../context/AdminState";

export default function AdminNav(props) {
  const { signOut } = useContext(AdminContext);
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[10],
      fontSize: 14,
      fontFamily: "Poppins",
    },
  }))(Tooltip);
  window.onscroll = function () {
    doStick();
  };

  const handleSignOut = () => {
    signOut();
  };
  function doStick() {
    const searchbar = document.getElementById("searchbar");
    const navbar = document.getElementById("navbar").offsetHeight;
    if (window.pageYOffset >= navbar) searchbar.classList.add("sticky");
    else searchbar.classList.remove("sticky");
  }

  return (
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
          <form id="searchbarform" action={`/Dashboard`} method="GET">
            <input
              className="inputnav"
              id="inputnavid"
              type="text"
              placeholder={
                window.innerWidth > 768
                  ? `Search for clothes, brands and more ...`
                  : `Search for products ...`
              }
              name="q"
            />
          </form>
          <div
            className="btn-search"
            style={{ borderRadius: "0px 3px 3px 0px" }}
          >
            <Button value="submit" form="searchbarform" type="submit">
              {/* <input value="submit" type="submit" /> */}
              <img
                src={iSearch}
                className="search"
                style={{ cursor: "pointer", height: "4vh" }}
                alt="Search"
              />
            </Button>
          </div>
        </div>
        <div>
          <div
            className="nr"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <LightTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Sign Out"
            >
              <Button onClick={handleSignOut}>
                <ExitToAppIcon fontSize="large" style={{ color: "white" }} />
              </Button>
            </LightTooltip>
            <Toggle
              className="nav_toggle"
              isDarkMode={props.isDarkMode}
              setIsDarkMode={props.setIsDarkMode}
            />
          </div>
        </div>
        {/* <Toggle
          className="nav_toggle"
          isDarkMode={props.isDarkMode}
          setIsDarkMode={props.setIsDarkMode}
        /> */}
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
