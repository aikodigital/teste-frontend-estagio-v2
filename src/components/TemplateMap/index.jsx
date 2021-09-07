import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import Constants from "../../env/Constants";

import { Container } from "./style";


// const getCurrentPosition = () => {
//   let lat;
//   let lon;

//   navigator.geolocation.getCurrentPosition(function (posi) {
//     lat = posi.coords.latitude;
//     lon = posi.coords.longitude;
//   });

//   if(lat && lon){
//     return [ lat, lon];
//   }else{
//     return [-12.1454928, -44.9770903];
//   }
// }

const TemplateMap = ({ children, width, height}) => {
  return (
      <Container width={width} height={height}>
      <MapContainer
        center={[-19.151801, -46.007759]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${Constants.MAPBOX_KEY}`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        { children }
      </MapContainer>
    </Container>
  )
}

export default TemplateMap
