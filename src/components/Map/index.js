import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import MultipleMarkers from '../MultipleMarkers';

function Map() {
    return (
        <MapContainer center={[-19.151801, -46.007759]} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MultipleMarkers/>
        </MapContainer>
    );
}

export default Map;