import React, { useEffect, useRef, useState } from "react";
import InfoWindowEquipament from "../InfoWindowEquipament";

interface IMarker{
    position: google.maps.LatLngLiteral,
    map?: google.maps.Map
}

export default function  Marker({position,map}: IMarker) {

    const [marker, setMarker] = useState<google.maps.Marker>();
    
    useEffect(() => {
        setMarker(new google.maps.Marker({position: position}));
    },[]);

    const render = () =>{
      return <InfoWindowEquipament conteudo={"olaoaaolao"}/>;
    };
    const name ="CA-0001";
    const id = "a3540227-2f0e-4362-9517-92f41dabbfdf";
    const status = "Operando";

    const contentString =
    "<div id=\"content\">" +
    "<div id=\"siteNotice\">" +
    "</div>" +
    `<h1 id="firstHeading" class="firstHeading">${name}</h1>` +
    "<div id=\"bodyContent\">" +
    `<p>id: ${id}</p>` +
    `<p>status: ${status}</p>` +
    "</div>" +
    "</div>";


    if(marker){
        marker.setMap(map);
        marker.setPosition(position);

        const infowindow = new google.maps.InfoWindow({
            content: contentString
          });
    
        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
          });
    }
    
    return null;
}


