import React, { useEffect, useRef, useState } from "react";
import EquiIDSearch from "../../services/equiIDSearch";
import statusSerach from "../../services/statusSerach";
import InfoWindowEquipament from "../InfoWindowEquipament";

interface IMarker{
    position: google.maps.LatLngLiteral,
    map?: google.maps.Map,
    equipmentId: string
}

export default function  Marker({position,map,equipmentId}: IMarker) {
    const equipInfo = EquiIDSearch(equipmentId);
    const [marker, setMarker] = useState<google.maps.Marker>();
    
    useEffect(() => {
        setMarker(new google.maps.Marker({position: position}));
    },[]);

   
    const status = equipInfo.StateHistory.states[equipInfo.StateHistory.states.length -1].equipmentStateId;
    const statusPronto = statusSerach(status);


    const contentString =
    "<div id=\"content\">" +
    "<div id=\"siteNotice\">" +
    "</div>" +
    `<h1 id="firstHeading" class="firstHeading">${equipInfo.Equip.name}</h1>` +
    "<div id=\"bodyContent\">" +
    `<p><b style="font-size:large">Id:</b> ${equipInfo.Equip.id}</b> </p>` +
    `<p><b style="font-size:large">Status:</b> ${statusPronto.name}</p>` +
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


