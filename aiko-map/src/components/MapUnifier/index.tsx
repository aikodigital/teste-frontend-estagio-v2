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
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
      setMap2(MapData);
      setRefresh(!refresh);
      //console.log("MAP2");
      //console.log(map2);
    },[MapData]);

    const render = (status: Status) => {
      return <h1>{status}</h1>;
    };
  
   
    return(
      
      <Wrapper apiKey={""} render={render}> 
        <Map center={center} zoom={zoom} sidebarOp={sidebarOp} refresh={refresh}>
            {map2?.map((posicao) => 
              
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