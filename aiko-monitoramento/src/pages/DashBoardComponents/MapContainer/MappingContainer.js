import React from 'react'

import { 
  TileLayer, 
  Marker,
  Popup
} from 'react-leaflet'

import {
  Container,
  MapBox,
  CustomMapContainer
} from "./styled-MapContainer"

import { getPositionHistory } from '../../../services/requests/getFunctions'

const MappingContainer = ({ selected }) => {

  const positions = getPositionHistory(selected)

  const positionsList = positions && positions.map((data) => {
    return (
      <Marker position={[data.lat, data.lon]} key={data.date}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    )
  })



  const position = [-19.126536, -45.947756]
  
  return (
    <Container>
      <MapBox>
        

        <CustomMapContainer center={position} zoom={8} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {positionsList}
        </CustomMapContainer>


      </MapBox>
    </Container>
  )
}

export default MappingContainer