import React, { useEffect, useState } from "react";

 const AddressMap=()=>{
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
    return (
        <div className="mapContainer">
          <iframe src="https://maps.google.com/maps?q=Bagh%20Deewar,%20Mahajani%20Kucha,%20Katra%20Neel,%20Chandni%20Chowk&t=&z=18&ie=UTF8&iwloc=&output=embed" frameborder="0" style={{border:0, width:"100%", height:"38rem", borderRadius:(width < 930) ? ("15px") :("0 15px 15px 0")}} allowfullscreen="" aria-hidden="false" tabindex="0" title="map"></iframe>
        </div>
    );
 }
 export default AddressMap;












// import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
// import "../CustomJS/Map.css";

// function myMap() {
//   return (
//     <GoogleMap
//       defaultZoom={18.5}
//       defaultCenter={{ lat: 28.6582875, lng: 77.1562953 }}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(myMap));
// //
// export default function Map() {
//   let apiUrl =
//     `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` +
//     process.env.REACT_APP_API_KEY;

//   return (
//     <div>
//       <div className="mapcss">
//         <WrappedMap
//           googleMapURL={apiUrl}
//           loadingElement={<div />}
//           containerElement={<div className="mapContainer" />}
//           mapElement={<div className="mapContainer" />}
//         />
//       </div>
//     </div>
//   );
// }
