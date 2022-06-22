import React, { useEffect, useRef, useState } from "react";

interface IMap{
    center: google.maps.LatLngLiteral,
    zoom: number,
    children: React.ReactNode
}

export default function  Map({center, zoom, children}:IMap) {

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
        <div ref={ref} id="map" style={style}>
            {
            React.Children.map(children, (child: React.ReactElement) => 
                    React.cloneElement(child,{map})
                )
            }
        </div>
    );
}


