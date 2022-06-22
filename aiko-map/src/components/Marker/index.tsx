import React, { useEffect, useRef, useState } from "react";

interface IMarker{
    position: google.maps.LatLngLiteral,
    map?: google.maps.Map
}

export default function  Marker({position,map}: IMarker) {

    const [marker, setMarker] = useState<google.maps.Marker>();

    useEffect(() => {
        setMarker(new google.maps.Marker({position: position}));
    },[]);

    if(marker){
        marker.setMap(map);
        marker.setPosition(position);
    }
    
    return null;
}


