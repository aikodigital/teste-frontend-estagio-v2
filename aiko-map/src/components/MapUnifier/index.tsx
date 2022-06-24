import React from "react";
import "./style.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import  Map  from "../../components/Maps";
import Marker from "../../components/Marker";
import EquipamentPosition from "../../data/equipmentPositionHistory.json";


interface IMapUnifier{
    sidebarOp: boolean,
}

interface IEquipamentPosition{
  equipmentId: string,
  positions:{
    date: string,
    lat: number,
    lon: number
  }[]
}

export default function MapUnifier({sidebarOp}:IMapUnifier) {
    const zoom = 8;

    const render = (status: Status) => {
      return <h1>{status}</h1>;
    };
  
    //const posicoes =[{ lat: -25.363, lng: 131.844 },{ lat: -20.363, lng: 120.844 }];  
    const posicoes:IEquipamentPosition[] =  EquipamentPosition;
    const center = { 
      lat:  posicoes[0].positions[0].lat,
      lng:  posicoes[0].positions[0].lon
    };

    return(
    
    <Wrapper apiKey={"AIzaSyADndaJCheZMyBZ3ahaN1ae7uiDMPlzzOs"} render={render}> 
      <Map center={center} zoom={zoom} sidebarOp={sidebarOp}>
          {posicoes.map((posicao) => 
            
            <Marker 
                position={{ 
                  lat:  posicao.positions[posicao.positions.length - 1].lat,
                  lng:  posicao.positions[posicao.positions.length - 1].lon
                  }} 
                equipmentId={posicao.equipmentId}
                key={posicao.equipmentId}  
              />   
          )}
          
      </Map>
    </Wrapper>
    );


}