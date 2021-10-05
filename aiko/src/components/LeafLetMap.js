import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'
import { getIconHarv, getIconTruck, getIconExCavator } from '../createIcon/icons'
import equipmentID from '../data/equipment.json'
import positionsHistory from '../data/equipmentPositionHistory.json'
import equipmentState from '../data/equipmentState.json';
import equipmentStateHistory from '../data/equipmentStateHistory.json';
import equipmentModel from '../data/equipmentModel.json';

function Reverse() {
  positionsHistory.map((item) => item.positions.reverse());
  equipmentStateHistory.map((item) => item.states.reverse());
}
Reverse()

function actualState() {
  return equipmentStateHistory.map((item) => equipmentState.find((equipment) => item.states[0].equipmentStateId === equipment.id))
}

function verifyModel(equipment) {
    if(equipment === 'Harvester') {
      return getIconHarv()
    }
    if(equipment === 'Caminhão de carga') {
      return getIconTruck()
    }
    if(equipment === 'Garra traçadora') {
      return getIconExCavator()
    }
}


function verifyEquipmentModel (equipment) {
  const item = equipmentModel.find((item) => equipment === item.id)
  return verifyModel(item.name)
}

function LeafLetMap() {
  return(
    <MapContainer
      data-testid="LeafMap"
      center={[-19.151801, -46.007759]}
      zoom={10} scrollWheelZoom={false}
      style={{ height: '500px', width: '80%' }}
    >
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positionsHistory.map((item, index) => (
        <Marker key={index} icon={verifyEquipmentModel(equipmentID[index].equipmentModelId)} position={[item.positions[0].lat, item.positions[0].lon]}>
          <Popup>
            {equipmentID[index].name}
            <br/>
            {actualState()[index].name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}


export default LeafLetMap
