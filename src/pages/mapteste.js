import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export const Mapteste = () => {
    const position = [51.505, -0.09]
    return (
        <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>
        </div>
    )
}

