import { Marker, Popup } from 'react-leaflet'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import L from 'leaflet';
import allEquipmentStateHistory from '../../data/equipmentStateHistory.json'
import equipmentState from '../../data/equipmentState.json'
import equipmentModels from '../../data/equipmentModel.json'
import Truck from './icons/Truck';
import Harvester from './icons/Harvester';
import Claw from './icons/Claw';

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

type Key = keyof typeof icons;

const icons = {
  "a3540227-2f0e-4362-9517-92f41dabbfdf": Truck,
  "a4b0c114-acd8-4151-9449-7d12ab9bf40f": Harvester,
  "9c3d009e-0d42-4a6e-9036-193e9bca3199": Claw,
}

function MapMarker({eq, equipments}: {eq: EquipmentType, equipments: EquipmentType2[]}) {
  const { equipmentId, equipmentPositionDate } = useParams()
  const equipment = equipments.filter(equipment => equipment.id == eq.equipmentId)[0]
  const equipmentModel = equipmentModels.filter(model => model.id == equipment.equipmentModelId)[0]
  const equipmentStates = allEquipmentStateHistory.filter(state => state.equipmentId == eq.equipmentId)[0]?.states;
  const lastEquipmentState = equipmentStates[equipmentStates.length - 1];
  const lastEquipmentStateObj = equipmentState.filter(state => state.id == lastEquipmentState.equipmentStateId)[0];
  const getIcon = icons[equipmentModel.id as Key]
  const equipmentPosition = equipmentId && equipmentPositionDate && eq.equipmentId == equipmentId && eq.positions.filter(pos => pos.date == equipmentPositionDate)[0]
  ? eq.positions.filter(pos => pos.date == equipmentPositionDate)[0]
  : eq.positions[eq.positions.length - 1];

  const svgIcon = L.divIcon({
    html: getIcon(lastEquipmentStateObj.color),
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 10],
  });

    return (
      <Marker
          ref={(r) => {eq.equipmentId == equipmentId && r ? setTimeout(() => {r.openPopup()}, 0) : null}}
          position={[equipmentPosition.lat, equipmentPosition.lon]}
          icon={svgIcon}>
        <Popup>
          <span className="font-bold">Equipamento:</span> {equipment.name}
          <br />
          <span className="font-bold">Modelo:</span> {equipmentModel.name}
          <br />
          <span className="font-bold">Estado atual:</span> <span style={{color: lastEquipmentStateObj.color}}>{lastEquipmentStateObj.name}</span>
          <br />
          <span className="font-bold">Última alteração:</span> 
          <div className="ml-1">
            {format(new Date(eq.positions[eq.positions.length - 1].date), "dd'/'MM'/'yyyy HH':'mm")} <span className="text-xs text-gray-500">(localização)</span>
            <br />
            {format(new Date(lastEquipmentState.date), "dd'/'MM'/'yyyy HH':'mm")} <span className="text-xs text-gray-500">(estado)</span>
          </div>
          <span className="block mt-2 text-xs text-gray-500">Mais informações na barra lateral direita.</span>
        </Popup>
      </Marker>
    )
  }
  
  export default MapMarker
  