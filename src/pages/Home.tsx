import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { MapLeaflet } from '../components/Map';
import { getIcon } from '../helpers/Equipments';
import { EquipmentsInterface } from '../interfaces/Equipments';
import EquipmentsService from '../services/EquipmentsService';

export const HomePage = (): JSX.Element => {
  const [equipments, setEquipments] = useState<EquipmentsInterface[]>([]);

  useEffect(() => {
    setEquipments(EquipmentsService.fetchAllEquipments());
  }, []);

  return (
    <Layout currentPath="/">
      <MapLeaflet>
        {equipments.map((equipment) => {
          const equipmentLastPosition = EquipmentsService.getLastPosition(
            equipment.id
          );
          const equipmentModel = EquipmentsService.getModel(
            equipment.equipmentModelId
          );
          const equipmentState = EquipmentsService.getEquipmentState(
            equipment.id
          );
          return (
            <Marker
              key={equipment.id}
              icon={getIcon(equipment.equipmentModelId)}
              position={[equipmentLastPosition.lat, equipmentLastPosition.lon]}
            >
              <Popup closeButton={true}>
                <div>
                  <h2 className="text-lg">Nome: {equipment.name}</h2>
                  <p>Modelo: {equipmentModel.name}</p>
                  <p>
                    Estado:
                    <span
                      className={`p-1 rounded`}
                      style={{ background: equipmentState[0].color }}
                    >
                      {equipmentState[0].name}
                    </span>
                  </p>
                  <Link to={`/equipments/${equipment.id}`}>Ver Detalhes</Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapLeaflet>
    </Layout>
  );
};
