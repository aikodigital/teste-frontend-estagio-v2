import React, { useEffect, useState } from "react";
import "./style.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import  Map  from "../../components/Maps";
import Marker from "../../components/Marker";
import EquipamentPosition from "../../data/equipmentPositionHistory.json";
import { useData } from "../../hook/useData";
interface IEquipament{
  id: string,
  equipmentModelId: string,
  name: string
}
interface IMapUnifier{
    sidebarOp: boolean,
    AlterSide(id:string,name:string):void,
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

export default function MapUnifier({sidebarOp,AlterSide,defaultData}:IMapUnifier) {
    const { MapData, center, zoom } = useData();
    const [map2, setMap2] = useState(MapData);
    const render = (status: Status) => {
      return <h1>{status}</h1>;
    };
  
    const Map2 = MapData;
    useEffect(() => {
      setMap2(MapData);
      console.log("MAP2");
      console.log(Map2);
    },[MapData]);

    return(
      
      <Wrapper apiKey={"AIzaSyADndaJCheZMyBZ3ahaN1ae7uiDMPlzzOs"} render={render}> 
        <Map center={center} zoom={zoom} sidebarOp={sidebarOp}>
            {Map2?.map((posicao) => 
              
              <Marker 
                  key={posicao.id}
                  position={{ 
                    lat:  posicao.positions.lat,
                    lng:  posicao.positions.lon
                    }} 
                  id={posicao.id}
                  AlterSide={AlterSide}
                  
                  name={posicao.name} 
                  statusId={posicao.statusId}
                />   
            )}
            
        </Map>
      </Wrapper>
    );


}