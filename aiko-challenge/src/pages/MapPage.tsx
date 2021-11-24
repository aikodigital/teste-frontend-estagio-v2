import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import './MapPage.css';

export interface MapPageProps {

}

const MapPage = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCM3C_5u8FGTJg-xs2b1-0_-iXMKe1B-BI"
    });

    const position = {
        lat: -27.590824,
        lng: -48.551262,
    };
    return (
            <div className="map">
            {isLoaded ? (
                <GoogleMap
                mapContainerStyle={{width: "100%", height: "100%"}}
                center={{
                    lat: -27.590824,
                    lng: -48.551262,
                }}
                zoom={10}
                >
                    <Marker position={position}>
                        
                    </Marker>
                </GoogleMap>
            )   : (
                <></>
            )}
            </div>        
        );
    
};

export default MapPage