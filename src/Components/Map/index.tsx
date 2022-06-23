import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './style.css'
import { LatLngExpression } from 'leaflet'
import React from 'react'

function Map({children}:{children:React.ReactNode}) {

  const position = [-19.300731, -46.107543] as LatLngExpression
  
  return (

      <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {children}
      </MapContainer>
  )
}

export default Map