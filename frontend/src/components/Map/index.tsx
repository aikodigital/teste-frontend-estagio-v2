import { useEffect, useState } from "react";
import L, { LatLngExpression } from "leaflet";
import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap
} from "react-leaflet";

import StateHistoryModal from "../StatesHistoryModal";

import {
  getEquipmentModel,
  getEquipmentPositions,
  getEquipments,
  getEquipmentStatesHistory
} from "../../services/equipment";

import Truck from "../../assets/truck.png";

import styles from "./index.module.css";

interface Equipment {
  id: string;
  name: string;
  model: string;
  positions: Position[];
}

interface Position {
  date: string;
  lat: number;
  lon: number;
  state: EquipmentState;
}

interface EquipmentState {
  id: string;
  name: string;
  color: string;
}

const Map = () => {
  const [equipmentsData, setEquipmentsData] = useState<Equipment[]>([]);
  const [center, setCenter] = useState([51.505, -0.09] as LatLngExpression);
  const [isStateHistoryModal, setIsStateHistoryModal] = useState(false);
  const [focusedEquipment, setFocusedEquipment] = useState<Equipment>(
    equipmentsData[0]
  );

  useEffect(() => {
    const getData = () => {
      const equipments = getEquipments();
      const equipmentsStored: Equipment[] = [];

      equipments.forEach((equipment) => {
        const positions = getEquipmentPositions(equipment.id);
        const model = getEquipmentModel(equipment.equipmentModelId);
        const states = getEquipmentStatesHistory(equipment.id);

        const newEquipment = {
          id: equipment.id,
          name: equipment.name,
          model: model.name,
          positions: positions.map((position) => ({
            date: position.date,
            lat: position.lat,
            lon: position.lon,
            state: states[0].state
          }))
        };

        equipmentsStored.push(newEquipment);
      });

      const lastEquipmentStored = equipmentsStored[equipmentsStored.length - 1];

      setCenter([
        lastEquipmentStored.positions[0].lat,
        lastEquipmentStored.positions[0].lon
      ]);

      setEquipmentsData(equipmentsStored);
    };
    getData();
  }, []);

  const ChangeMapView = ({ coords }: { coords: LatLngExpression }) => {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  };

  const checkTruckType = (equipmentModel: string, equipmentState?: string) => {
    switch (equipmentModel) {
      case "Caminhão de carga":
        return `/src/assets/truck-${checkTruckColor(equipmentState)}.png`;
      case "Harvester":
        return `/src/assets/harvester-${checkTruckColor(equipmentState)}.png`;

      case "Garra traçadora":
        return `/src/assets/tow-truck-${checkTruckColor(equipmentState)}.png`;
      default:
        return;
    }
  };

  const checkTruckColor = (equipmentState?: string) => {
    switch (equipmentState) {
      case "Operando":
        return "green";
      case "Parado":
        return "yellow";

      case "Manutenção":
        return "red";
      default:
        return;
    }
  };

  return (
    <div className={styles.container}>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {equipmentsData.map((equipment) => {
          console.log(equipment);
          const customIcon = L.icon({
            iconUrl:
              checkTruckType(
                equipment.model,
                equipment.positions[0].state.name
              ) || Truck,
            iconSize: [50, 50], // size of the icon
            shadowSize: [50, 64], // size of the shadow
            iconAnchor: [2, 9], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62] // the same for the shadow
          });
          return (
            <Marker
              position={[
                equipment.positions[0].lat,
                equipment.positions[0].lon
              ]}
              icon={customIcon}
              eventHandlers={{
                click: () => {
                  setIsStateHistoryModal(true);
                  setFocusedEquipment(equipment);
                }
              }}
              key={equipment.id}
            >
              <Tooltip>
                {equipment.name} - {equipment.positions[0].state.name}
              </Tooltip>
            </Marker>
          );
        })}
        <ChangeMapView coords={center} />
      </MapContainer>

      {isStateHistoryModal && (
        <StateHistoryModal equipment={focusedEquipment} />
      )}
    </div>
  );
};

export default Map;
