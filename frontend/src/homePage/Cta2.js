import React from "react";
import cimage from "../images/mb.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Cta2() {
  function scrollToJustAbove(element, margin) {
    let dims = element.offsetTop;
    window.scrollTo(window.scrollX, dims - 1.5 * margin);
  }
  return (
    <div className="cta2" style={{ position: "relative" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            fontFamily: "Poppins",
            color: "white",
            width: "55%",
            fontSize: "1.2rem",
            fontWeight: "900",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "1rem",

            // position: "absolute",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
          }}
        >
          <div>
            Latest Collections at{" "}
            <span style={{ color: "#00ffcd" }}>reasonable</span> prices.
            <br /> <span>Hurry !!!</span>
            <br /> Buy now
          </div>
          <ArrowDropDownIcon
            fontSize="large"
            onClick={() => {
              document.getElementById("hscroll").scrollIntoView(true);
              scrollToJustAbove(
                document.getElementById("hscroll"),
                document.getElementById("searchbar").offsetHeight
              );
            }}
          />
        </div>
        <img
          src={cimage}
          style={{
            // marginLeft: "auto",
            // marginRight: "10%",
            // transform: "translate(-50%)",
            width: "35vw",
            height: "55%",
            // objectFit: "contain",
            transform: "skewY(5deg)",
          }}
          alt="img"
        />
      </div>
    </div>
  );
}

export default Cta2;
