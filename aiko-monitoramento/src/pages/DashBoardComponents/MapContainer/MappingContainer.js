import React from 'react'

import styled from 'styled-components'

import { MapContainer, 
  TileLayer, 
  Marker,
  Popup
} from 'react-leaflet'

import {
  Container,
  MapBox
} from "./styled-MapContainer"


const CustomMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`

const MappingContainer = () => {

  const position = [-19.126536, -45.947756]

  return (
    <Container>
      <MapBox>
        

        <CustomMapContainer center={position} zoom={8} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </CustomMapContainer>


      </MapBox>
    </Container>
  )
}

export default MappingContainer