// import React from "react";
// import "./navbar.css";
// import { useState } from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import Cart from "../Cart/Cart";
// import logo from "../images/0001.jpg";
// // import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// export default function Navbar() {
//   const [cartCount, setCartCount] = useState(3);

//   return (
//     <div>
//       <div id="grt-navbar">
//         <div className="row-1-wrapper">
//           <div className="row-1">
//             <a className="heading_logo" href="/">
//               Ganga Ram Textiles
//               {/* <img src={logo} className="logo" alt="GRT" /> */}
//             </a>
//             <div className="search-bar">
//               <div className="nav_flex">
//                 <input
//                   className="search-field"
//                   type="text"
//                   placeholder="Search for Clothes, Brands and more..."
//                 />
//                 <div className="searchicon">
//                   <SearchIcon
//                     style={{ fontSize: "2rem" }}
//                     className="searchsvg"
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* <Cart cartCount={cartCount} setCartCount={setCartCount} /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./navbar.css";

export default function navbar() {
  return (
    <div className="navbar">
      <div className="logo" href="/">
        Gangaram Textiles
      </div>
      <div className="searchbar">
        <input
          className="inputnav"
          type="text"
          placeholder="Search for Clothes, Brands and more..."
        />
        <SearchIcon className="search" style={{ cursor:"pointer",fontSize: "36px" }} />
      </div>
    </div>
  );
}
