import React, { useRef } from "react";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import DefaultMapSearch from "../services/defaultMapSearch";


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

interface ContextData {
    MapData: TMapData[],
    setMapData(aux:TMapData[]): void,
    MapaInicial():void,
    center:ILatLngLiteral,
    setCenter(aux:ILatLngLiteral):void;
    sideData: TMapData[];
    zoom: number;
    setZoom(zoom:number):void;
}
/*
lat: -19.171667,
        lng: -46.044589
*/
const DataContext = createContext<ContextData>({} as ContextData);

export function DataProvider({ children }: DataProviderProps): JSX.Element {
    
 const [MapData, setMapData] = useState<TMapData[]>(DefaultMapSearch); 
 const [sideData, setSideData] = useState<TMapData[]>(DefaultMapSearch);
 const [center, setCenter] = useState<ILatLngLiteral>({ 
    lat: -19.171667,
    lng: -46.044589
  });
const [zoom, setZoom] = useState(8);

 function MapaInicial(){
    setMapData(DefaultMapSearch);
 }

  
  
 return (
    <DataContext.Provider
      value={{MapData, setMapData, MapaInicial,
              center, setCenter, sideData, 
              zoom, setZoom}}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData(): ContextData {
  const context = useContext(DataContext);

  return context;
}
