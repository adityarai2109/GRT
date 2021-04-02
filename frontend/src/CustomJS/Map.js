import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import "../CustomJS/Map.css";

function myMap() {
  return (
    <GoogleMap
      defaultZoom={20}
      defaultCenter={{ lat: 28.6505, lng: 77.2303 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(myMap));

export default function Map() {

  console.log(process.env.REACT_APP_API_KEY);
  let apiUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` + process.env.REACT_APP_API_KEY
  
  return (
    <div>
      <div className="mapcss">
        <WrappedMap
          googleMapURL={apiUrl}
          loadingElement={<div />}
          containerElement={<div style={{ height: `38rem` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
