import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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

import { FaFilter } from "react-icons/fa";

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
  const [filteredEquipmentsData, setFilteredEquipmentsData] = useState<
    Equipment[]
  >([]);
  const [center, setCenter] = useState([51.505, -0.09] as LatLngExpression);
  const [isStateHistoryModal, setIsStateHistoryModal] = useState(false);
  const [focusedEquipment, setFocusedEquipment] = useState<Equipment>(
    equipmentsData[0]
  );
  const [filterSelected, setFilterSelected] = useState("");

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

      // Adiciona o centro na posição do último equipamento armazenado
      setCenter([
        lastEquipmentStored.positions[0].lat,
        lastEquipmentStored.positions[0].lon
      ]);

      setEquipmentsData(equipmentsStored);
      setFilteredEquipmentsData(equipmentsStored);
    };
    getData();
  }, []);

  const filterEquipmentsByModel = (model: string) => {
    if (model === "Todos") {
      setFilteredEquipmentsData(equipmentsData);
    } else {
      setFilteredEquipmentsData(
        equipmentsData.filter((equipment) => equipment.model === model)
      );
    }
  };

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
    <>
      {isStateHistoryModal && (
        <StateHistoryModal
          equipment={focusedEquipment}
          setIsModal={setIsStateHistoryModal}
        />
      )}
      <div className={styles.container}>
        <div className={styles.filter}>
          <FaFilter fontSize={"1.5rem"} />
          <select
            value={filterSelected}
            onChange={(event) => {
              setFilterSelected(event.target.value);
              filterEquipmentsByModel(event.target.value);
            }}
          >
            <option defaultValue="Todos">Todos</option>
            <option value="Caminhão de carga">Caminhão de carga</option>
            <option value="Harvester">Harvester</option>
            <option value="Garra traçadora">Garra traçadora</option>
          </select>
        </div>

        <MapContainer
          center={center}
          zoom={11}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
          />
          {filteredEquipmentsData.map((equipment) => {
            const customIcon = L.icon({
              iconUrl:
                checkTruckType(
                  equipment.model,
                  equipment.positions[0].state.name
                ) || Truck,
              iconSize: [50, 50],
              shadowSize: [50, 64],
              iconAnchor: [2, 9],
              shadowAnchor: [4, 62]
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
                    setCenter([
                      equipment.positions[0].lat,
                      equipment.positions[0].lon
                    ]);
                  }
                }}
                key={uuidv4()}
              >
                <Tooltip>
                  {equipment.name} - {equipment.positions[0].state.name}
                </Tooltip>
              </Marker>
            );
          })}
          <ChangeMapView coords={center} />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
