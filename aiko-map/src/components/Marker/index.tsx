import React, { useEffect, useRef, useState } from "react";
import EquiIDSearch from "../../services/equiIDSearch";
import statusSerach from "../../services/ServiceEquipmentState";
import InfoWindowEquipament from "../InfoWindowEquipament";

interface IMarker{
    position: google.maps.LatLngLiteral,
    map?: google.maps.Map,
   
    name: string,
    id: string,
    statusId: string,
    AlterSide(id:string):  void,
    
}

export default function  Marker({position, map, name, id, statusId, AlterSide}: IMarker) {
    //const equipInfo = EquiIDSearch(id);
    const [marker, setMarker] = useState<google.maps.Marker>();
    
    useEffect(() => {
        setMarker(new google.maps.Marker({position: position}));
    },[]);

   
    //const status = equipInfo.StateHistory.states[equipInfo.StateHistory.states.length -1].equipmentStateId;
    const statusPronto = statusSerach(statusId);


    const contentString =
    "<div id=\"content\">" +
    "<div id=\"siteNotice\">" +
    "</div>" +
    `<h1 id="firstHeading" class="firstHeading">${name}</h1>` +
    "<div id=\"bodyContent\">" +
    `<p><b style="font-size:large">Id:</b> ${id}</b> </p>` +
    `<p><b style="font-size:large">Status:</b> ${statusPronto.name}</p>` +
    "</div>" +
    "</div>";

    function Alterar(id){
      AlterSide(id);
      //CloseInfoEquip(true);
    }

    if(marker){
        marker.setMap(map);
        marker.setPosition(position);

        const infowindow = new google.maps.InfoWindow({
            content: contentString
          });

        
        marker.addListener("mouseover", () => {
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });

          });

        marker.addListener("mouseout", () => {
            infowindow.close();
          });

        marker.addListener("click",() => {
          console.log(name);
          Alterar(id);
        });
    }
    
    return null;
}


