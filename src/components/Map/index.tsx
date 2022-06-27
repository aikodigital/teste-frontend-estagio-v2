import { Marker, TileLayer } from 'react-leaflet';
import { useEquipments } from '../../hooks/useEquipments';
import { getIcon } from './Icons';

import { IConcatenatedEquipmentAndState } from '../../interfaces'

import { MapContainer, Popup } from './styles';

interface IMap {
  equipments: IConcatenatedEquipmentAndState[];
  openEquipmentInfoModal: () => void
}

export const Map: React.FC<IMap> = ({ equipments, openEquipmentInfoModal }) => {
  const { setEquipmentForModalData } = useEquipments();

  function handleOpenModal(equipment: IConcatenatedEquipmentAndState) {
    setEquipmentForModalData(equipment);
    openEquipmentInfoModal();
  }

  return (
    <MapContainer 
      center={[-13.6210239, -48.4196375]} 
      zoom={5} 
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        equipments.map(equipment => (
          <Marker 
            position={[equipment.position.lat, equipment.position.lon]} 
            title={equipment.state.name} 
            key={equipment.equipmentId}
            icon={getIcon(equipment.state.name)}
          >
            <Popup buttonBackground={equipment.state.color}>
              <strong>{equipment.equipmentName}</strong>
              <div>
                <span>{equipment.equipmentModel.name}</span>
                <h5>Status: {equipment.state.name}</h5>
              </div>
              <span>{equipment.position.date}</span>
              <button 
                type='button' 
                onClick={() => handleOpenModal(equipment)}
              >
                Informações
              </button>
            </Popup>
          </Marker>
        ))
      }
    </MapContainer>
  )
}