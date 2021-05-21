import React from "react";
import cimage from "../images/carousel_collage1.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Cta() {
  function scrollToJustAbove(element, margin) {
    let dims = element.offsetTop;
    window.scrollTo(window.scrollX, dims - 1.9 * margin);
  }
  return (
    <div className="cta" style={{ position: "relative" }}>
      <div>
        <img
          src={cimage}
          style={{
            marginLeft: "50% ",
            transform: "translate(-50%)",
            width: "100vw",
            objectFit: "contain",
          }}
          alt="img"
        />
        <div
          style={{
            fontFamily: "Poppins",
            color: "white",
            width: "25%",
            fontSize: "3.5vw",
            fontWeight: "900",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div>
            Latest Collections at reasonable prices.
            <br /> Buy now
          </div>
          <div>
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
        </div>
      </div>
    </div>
  );
}

export default Cta;

// <div>
// <svg className="intro" viewbox="0 0 200 86">
//   <text text-anchor="start" x="10" y="30" className="text text-stroke" clip-path="url(#text1)">Vahin</text>
//   <text text-anchor="start" x="10" y="60" className="text text-stroke" clip-path="url(#text2)">Printers</text>
//   <text text-anchor="start" x="10" y="30" className="text text-stroke text-stroke-2"
//     clip-path="url(#text1)">Vahin</text>
//   <text text-anchor="start" x="10" y="60" className="text text-stroke text-stroke-2"
//     clip-path="url(#text2)">Printers</text>
//   <defs>
//     <clipPath id="text1">
//       <text text-anchor="start" x="10" y="30" className="text">Vahin</text>
//     </clipPath>
//     <clipPath id="text2">
//       <text text-anchor="start" x="10" y="60" className="text">Printers</text>
//     </clipPath>
//   </defs>
// </svg>
// </div>
