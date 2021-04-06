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


  let apiUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` + process.env.REACT_APP_API_KEY

  const mapStyle = {
    height: `38rem`,
    borderRadius: `0 5% 5% 0`
  }
  
  return (
    <div>
      <div className="mapcss">
        <WrappedMap
          googleMapURL={apiUrl}
          loadingElement={<div />}
          containerElement={<div className="mapContainer" />}
          mapElement={<div className="mapContainer" />}
        />
      </div>
    </div>
  );
}
