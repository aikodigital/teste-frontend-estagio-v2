import React from "react";
import "./style.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import  Map  from "../../components/Maps";
import Marker from "../../components/Marker";

export default function App() {

  const center = { lat: -25.363, lng: 131.844 };
  const zoom = 4;

  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  const posições =[{ lat: -25.363, lng: 131.844 },{ lat: -20.363, lng: 120.844 }];  
  
  return (
    <Wrapper apiKey={""} render={render}>
      
      <Map center={center} zoom={zoom}>
          {posições.map((posição) => 
            // eslint-disable-next-line react/jsx-key
            <Marker position={posição} />   
          )}
          
      </Map>
    </Wrapper>
  );
}


