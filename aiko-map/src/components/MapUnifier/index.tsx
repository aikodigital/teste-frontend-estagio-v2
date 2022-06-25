import React from "react";
import "./style.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import  Map  from "../../components/Maps";
import Marker from "../../components/Marker";
import EquipamentPosition from "../../data/equipmentPositionHistory.json";

interface IEquipament{
  id: string,
  equipmentModelId: string,
  name: string
}
interface IMapUnifier{
    sidebarOp: boolean,
    AlterSide():void,
    defaultData:IEquipament[];
}

interface IEquipamentPosition{
  equipmentId: string,
  positions:{
    date: string,
    lat: number,
    lon: number
  }[]
}

export default function MapUnifier({sidebarOp,AlterSide, defaultData}:IMapUnifier) {
    const zoom = 10;

    const render = (status: Status) => {
      return <h1>{status}</h1>;
    };
  
    const posicoes:IEquipamentPosition[] =  EquipamentPosition;
    const center = { 
      lat: -19.171667,
      lng: -46.044589
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
                  AlterSide={AlterSide}
                  key={posicao.equipmentId}  
                />   
            )}
            
        </Map>
      </Wrapper>
    );


}