import { Marker, Popup } from 'react-leaflet'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import allEquipmentStateHistory from '../../data/equipmentStateHistory.json'
import equipmentState from '../../data/equipmentState.json'
import equipmentModels from '../../data/equipmentModel.json'

type EquipmentType = {
  equipmentId: string,
  positions: {
    date: string,
    lat: number,
    lon: number,
  }[],
}

type EquipmentType2 = {
  equipmentModelId: string
  id: string,
  name: string,
}

function MapMarker({eq, equipments}: {eq: EquipmentType, equipments: EquipmentType2[]}) {
  const { equipmentId, equipmentPositionDate } = useParams()
  const equipment = equipments.filter(equipment => equipment.id == eq.equipmentId)[0]
  const equipmentModel = equipmentModels.filter(model => model.id == equipment.equipmentModelId)[0]
  const equipmentStates = allEquipmentStateHistory.filter(state => state.equipmentId == eq.equipmentId)[0]?.states;
  const lastEquipmentState = equipmentStates[equipmentStates?.length - 1];
  const lastEquipmentStateName = equipmentState?.filter(state => state.id == lastEquipmentState.equipmentStateId)[0]?.name;
  const equipmentPosition = equipmentId && equipmentPositionDate && eq.equipmentId == equipmentId && eq.positions.filter(pos => pos.date == equipmentPositionDate)[0] ? eq.positions.filter(pos => pos.date == equipmentPositionDate)[0] : eq.positions[eq.positions.length - 1];

    return (
      <Marker
          ref={(r) => {eq.equipmentId == equipmentId && r ? setTimeout(() => {r.openPopup()}, 0) : null}}
          position={[equipmentPosition.lat, equipmentPosition.lon]}>
        <Popup>
          <span className="font-bold">Equipamento:</span> {equipment.name}
          <br />
          <span className="font-bold">Modelo:</span> {equipmentModel?.name}
          <br />
          <span className="font-bold">Estado atual:</span> {lastEquipmentStateName}
          <br />
          <span className="font-bold">Última alteração:</span> 
          <div className="ml-1">
            {format(new Date(equipmentPosition.date), "dd'/'MM'/'yyyy HH':'mm")} <span className="text-xs text-gray-500">(localização)</span>
            <br />
            {format(new Date(lastEquipmentState.date), "dd'/'MM'/'yyyy HH':'mm")} <span className="text-xs text-gray-500">(estado)</span>
          </div>
          <span className="block mt-2 text-xs text-gray-500">Mais informações na barra lateral direita.</span>
        </Popup>
      </Marker>
    )
  }
  
  export default MapMarker
  