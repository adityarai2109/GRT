import React from "react";
import cimage from "../images/carousel_collage1.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Cta() {
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
          <a>
            <ArrowDropDownIcon
              fontSize="large"
              onClick={() => {
                document.getElementById("hscroll").scrollIntoView(true);
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cta;

// <div>
// <svg class="intro" viewbox="0 0 200 86">
//   <text text-anchor="start" x="10" y="30" class="text text-stroke" clip-path="url(#text1)">Vahin</text>
//   <text text-anchor="start" x="10" y="60" class="text text-stroke" clip-path="url(#text2)">Printers</text>
//   <text text-anchor="start" x="10" y="30" class="text text-stroke text-stroke-2"
//     clip-path="url(#text1)">Vahin</text>
//   <text text-anchor="start" x="10" y="60" class="text text-stroke text-stroke-2"
//     clip-path="url(#text2)">Printers</text>
//   <defs>
//     <clipPath id="text1">
//       <text text-anchor="start" x="10" y="30" class="text">Vahin</text>
//     </clipPath>
//     <clipPath id="text2">
//       <text text-anchor="start" x="10" y="60" class="text">Printers</text>
//     </clipPath>
//   </defs>
// </svg>
// </div>
