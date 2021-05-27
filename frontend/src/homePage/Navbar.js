import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import iconLogo from "../images/group1.svg";
import "./Navbar.css";
import iSearch from "../images/search.svg";
import Toggle from "../CustomJS/Toggle";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    window.onscroll = function () {
        doStick();
    };

    function doStick() {
        const searchbar = document.getElementById("searchbar");
        const navbar = document.getElementById("navbar").offsetHeight;
        // console.log(stick)
        if (window.pageYOffset >= navbar) searchbar.classList.add("sticky");
        else searchbar.classList.remove("sticky");
    }

    return (
        <div className="main_nav">
            <div className="navbar">
                <div id="navbar">
                    <Link to="/">
                        <div className="logo">
                            <img
                                style={{ height: "8vh" }}
                                src={iconLogo}
                                alt="GRT"
                            />
                            <h4 className="grt">Ganga Ram Textiles</h4>
                        </div>
                    </Link>
                </div>
                <form
                    id="searchbar"
                    className="searchbar"
                    action={`/Suit`}
                    method="GET"
                >
                    <input
                        className="inputnav"
                        id="inputnavid"
                        type="text"
                        placeholder={
                            window.innerWidth > 768
                                ? `Search for clothes, brands and more ...`
                                : `Search for products ...`
                        }
                    />

                    <div
                        className="btn-search"
                        style={{ borderRadius: "0px 3px 3px 0px" }}
                    >
                        <Button>
                            <img
                                src={iSearch}
                                className="search"
                                style={{ cursor: "pointer", height: "4vh" }}
                                alt="Search"
                            />
                        </Button>
                    </div>
                </form>

                <Toggle
                    className="nav_toggle"
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
