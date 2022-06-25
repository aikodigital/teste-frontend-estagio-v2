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
}
/*
lat: -19.171667,
        lng: -46.044589
*/
const DataContext = createContext<ContextData>({} as ContextData);

export function DataProvider({ children }: DataProviderProps): JSX.Element {
    
 const [MapData, setMapData] = useState<TMapData[]>(); 
 const [center, setCenter] = useState<ILatLngLiteral>({ 
    lat: -19.171667,
    lng: -46.044589
  });

 function MapaInicial(){
    setMapData(DefaultMapSearch);
 }

  return (
    <DataContext.Provider
      value={{MapData, setMapData, MapaInicial,center, setCenter}}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData(): ContextData {
  const context = useContext(DataContext);

  return context;
}
