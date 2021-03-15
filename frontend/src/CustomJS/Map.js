import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import "../CustomJS/Map.css";
function myMap() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 28.6505, lng: 77.2303 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(myMap));

export default function Map() {
  console.log(process.env);
  return (
    <div>
      <div className="mapcss">
        <WrappedMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBZJYPQ7OFAEwQiv-3ggCwNzM8-mOet-1A"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `30rem` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
