import React from 'react'

import {
  TileLayer,
  Marker,
  Popup,
  Polyline
} from 'react-leaflet'

import {
  MapBox,
  CustomMapContainer,
  CustomPopup
} from "./styled-MapBoxContainer"

import { getPositionHistory } from '../../../../services/requests/getFunctions'
import { findVehicleLastPosition } from '../../../../services/requests/findFunctions'

import equipament from "../../../../constants/data/equipment.json"
import VehiclesCard from "../../../../components/VehiclesCard/VehiclesCard"
import { primaryColor } from '../../../../constants/colors'

const MapBoxContainer = ({ selected, getId, viewTrajetory }) => {

  const positions = getPositionHistory(selected)

  const trajetory = positions && positions.map((info) => {
    return [info.lat, info.lon]
  })

  const initialPositions = equipament.map((vehicle) => {
    return (
      <Marker position={findVehicleLastPosition(vehicle.id)} key={vehicle.id}>
        <CustomPopup>
          <VehiclesCard
            key={vehicle.id}
            name={vehicle.name}
            modelId={vehicle.equipmentModelId}
            id={vehicle.id}
            getId={getId}
            popup={true}
          />
        </CustomPopup>
      </Marker>
    )
  })

  const positionsList = positions && positions.map((data) => {

    const calendar = {
      dia: data.date.slice(8, 10),
      mes: data.date.slice(5, 7),
      ano: data.date.slice(0, 4),
      hora: data.date.slice(11, 19)
    }
    const { dia, mes, ano, hora } = calendar

    const formatedData = `${dia}/${mes}/${ano} | ${hora}`

    return (
          <Marker position={[data.lat, data.lon]} key={data.date}>
            <Popup>
              {formatedData}
            </Popup>
          </Marker>
    )
  })

  return (
      <MapBox>

        <CustomMapContainer center={[-19.126536, -45.947756]} zoom={11} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {!viewTrajetory && <Polyline pathOptions={{ color: primaryColor }} positions={trajetory} />}
          {selected === "" ? initialPositions : positionsList}
        </CustomMapContainer>

      </MapBox>
  )
}

export default MapBoxContainer