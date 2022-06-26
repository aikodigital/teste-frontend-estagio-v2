import { Marker, Popup } from 'react-leaflet'
import equipmentPositionHistory from '../../assets/data/equipmentPositionHistory.json'
import {
  getEquipmentName,
  getEquipmentModel,
  getEquipmentCurrentState,
} from '../../assets/data-acess/index'
import L from 'leaflet'
import { Link } from 'react-router-dom'

function reverseArray() {
  equipmentPositionHistory.map((history) => history.positions.reverse())
}

reverseArray()

const pinIconMap = L.icon({
  iconUrl: require('../../assets/img/car_google_icons.png'),
  shadowUrl: null,

  iconSize: [40, 40],
})

export function MapsMarkings() {
  return equipmentPositionHistory.map((positionHistory, i) => (
    <Marker
      key={i}
      position={[
        positionHistory.positions[0].lat,
        positionHistory.positions[0].lon,
      ]}
      icon={pinIconMap}
    >
      <Popup>
        <p>Nome: {getEquipmentName(positionHistory.equipmentId)}</p>
        <p>Modelo: {getEquipmentModel(positionHistory.equipmentId)}</p>
        <p>Estado: {getEquipmentCurrentState(positionHistory.equipmentId)}</p>
        <Link to={`/states/${positionHistory.equipmentId}`}>
          Histórico de estados
        </Link>
      </Popup>
    </Marker>
  ))
}
