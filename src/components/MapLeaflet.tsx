import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import equipmentPositionHistoryData from "../data/equipmentPositionHistory.json";

import {
  findEquipmentName,
  findEquipmentModel,
  findEquipmentState,
} from "./EquipmentData";

export default function MapLeaflet() {
  return (
    <MapContainer
      center={[-19.126536, -45.947756]}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {equipmentPositionHistoryData.map((positionHistory, i) => (
        <Marker
          key={i}
          position={[
            positionHistory.positions[0].lat,
            positionHistory.positions[0].lon,
          ]}
        >
          <Popup>
            <div>Nome: {findEquipmentName(positionHistory.equipmentId)}</div>
            <div>Modelo: {findEquipmentModel(positionHistory.equipmentId)}</div>
            <div>Estado: {findEquipmentState(positionHistory.equipmentId)}</div>
            <Link to={`/${positionHistory.equipmentId}`}>
              Histórico de estados.
            </Link>
          </Popup>
        </Marker>
      ))}{" "}
    </MapContainer>
  );
}
