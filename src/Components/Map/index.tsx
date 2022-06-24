import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { LatLngExpression } from 'leaflet'
import * as S from'./style'
import React from 'react'

interface Props{
    children: React.ReactNode,
    height: string
}

function Map({children, height}:Props) {

  const position = [-19.300731, -46.107543] as LatLngExpression
  
  return (

      <S.StyledMap height={height} center={position} zoom={11} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {children}
      </S.StyledMap>
  )
}

export default Map