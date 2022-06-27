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
    AlterSide(id:string,name:string):  void,
    
}

export default function  Marker({position, map, name, id, statusId, AlterSide}: IMarker) {
    //const equipInfo = EquiIDSearch(id);
    
    const [marker, setMarker] = useState<google.maps.Marker>();

    function IconState(estado){
    
      switch(estado){
          case "0808344c-454b-4c36-89e8-d7687e692d57":
              return "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
          case "baff9783-84e8-4e01-874b-6fd743b875ad":
              return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
          case "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f":
              return "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

          default: 
            return "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
           
      }

  }
  
    
    useEffect(() => {
        setMarker(new google.maps.Marker({position: position,icon: {
          url: IconState(statusId)
        }}));
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

    function Alterar(id,name){
      AlterSide(id,name);
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
          //console.log(name);
          Alterar(id,name);
        });
    }
    
    return null;
}


