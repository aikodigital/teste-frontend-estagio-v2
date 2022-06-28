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
import { findVehicleLastPosition } from '../../../services/requests/findFunctions'

import equipament from "../../../constants/data/equipment.json"

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

  const vehiclesList = equipament.map((vehicle) => {
    return vehicle.id
  })

  const initialPositions = vehiclesList.map((id) => {
    return (
      <Marker position={findVehicleLastPosition(id)} key={id}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    )
  })

  
  return (
    <Container>
      <MapBox>
        
        <CustomMapContainer center={[-19.126536, -45.947756]} zoom={11} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {selected === "" ? initialPositions : positionsList}
        </CustomMapContainer>

      </MapBox>
    </Container>
  )
}

export default MappingContainer