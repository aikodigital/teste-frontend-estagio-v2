import React, { useEffect, useRef, useState } from "react";
import {Content} from "./style";
interface IMap{
    center: google.maps.LatLngLiteral,
    zoom: number,
    children: React.ReactNode,
    sidebarOp: boolean,
    refresh: boolean
}

export default function  Map({center, zoom, children,sidebarOp,refresh}:IMap) {
    
    const ref = React.useRef<HTMLDivElement>(null);

    const [map,setMap] = useState<google.maps.Map | null>(null);

    const style = { height : "100vh"};

    useEffect(() => {
        
        setMap(new window.google.maps.Map(ref.current, {}));
      },[]);

    if(map){
        map.setCenter(center);
        map.setZoom(zoom);
    }     

    return (
        <Content ref={ref} id="map" style={style} sidebarOp={sidebarOp}>
            {
            React.Children.map(children, (child: React.ReactElement) => 
                    React.cloneElement(child,{map})
                )
            }
        </Content>
    );
}


