import React, { useRef } from "react";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import DefaultMapSearch from "../services/defaultMapSearch";
import LastPositions from "../services/LastPositions";
import EquipmentStateHistoryById from "../services/ServiceEquipmentStateHistory";


interface DataProviderProps {
  children: ReactNode;
}

interface TMapData{
        id: string,
        name: string
        statusId: string,
        positions: {
          date: string,
          lat: number,
          lon: number
        }  
}

interface ILatLngLiteral{
    lat: number,
    lng: number
}

interface ISideState{
  name: string,
  equipmentId: string,
  states: {
      date: string,
      equipmentStateId: string
  }[];
}
interface ContextData {
    MapData: TMapData[],
    setMapData(aux:TMapData[]): void,
    MapaInicial():void,
    center:ILatLngLiteral,
    setCenter(aux:ILatLngLiteral):void;
    sideData: TMapData[];
    zoom: number;
    setZoom(zoom:number):void;
    sideStateData: ISideState;
    MudaSideStateData(id:string, name:string):void;
    MapaEspecifico(id:string,name:string,statusId: string):void;
}

const DataContext = createContext<ContextData>({} as ContextData);

export function DataProvider({ children }: DataProviderProps): JSX.Element {
    
  const [MapData, setMapData] = useState<TMapData[]>(DefaultMapSearch); 
  const [sideData, setSideData] = useState<TMapData[]>(DefaultMapSearch);
  const [center, setCenter] = useState<ILatLngLiteral>({ 
    lat: -19.171667,
    lng: -46.044589
  });
  const [zoom, setZoom] = useState(10);
  const [sideStateData, setSideStateData] = useState<ISideState>();

  function MapaInicial(){
    setMapData(DefaultMapSearch);
  }

  function MapaEspecifico(id,name,statusId){
    setMapData(LastPositions(id,name,statusId));
  }
  
  function MudaSideStateData(id: string, name:string){
    setSideStateData(EquipmentStateHistoryById(id,name));
    //console.log(sideStateData);
  }
  
 return (
    <DataContext.Provider
      value={{MapData, setMapData, MapaInicial,
              center, setCenter, sideData, 
              zoom, setZoom, sideStateData, MudaSideStateData,
              MapaEspecifico}}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData(): ContextData {
  const context = useContext(DataContext);

  return context;
}
