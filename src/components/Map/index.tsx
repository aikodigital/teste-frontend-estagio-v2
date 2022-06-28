import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";

import equipmentPositionHistory from "../../../data/equipmentPositionHistory.json";
import equipment from "../../../data/equipment.json";
import equipmentStateHistory from "../../../data/equipmentStateHistory.json";
import equipmentState from "../../../data/equipmentState.json";
import equipmentModel from "../../../data/equipmentModel.json";

import "./style.css";

import iconHarvester from "../../assets/harvester.png";
import iconCaminhao from "../../assets/caminhao-de-carga.png";
import iconGarraTracadora from "../../assets/garra-tracadora.png";

function NewMap() {
  const center = {
    lat: -19.126536,
    lng: -45.947756,
  };

  const arrId = () => {
    let Arr = [];
    for (let index = 0; index < equipmentPositionHistory.length; index++) {
      Arr.push(equipmentPositionHistory[index].equipmentId);
    }
    return Arr;
  };

  const equipamentModelId = (id: string | undefined) => {
    for (let index = 0; index < equipment.length; index++) {
      if (equipment[index].id === id) {
        return equipment[index].equipmentModelId;
      }
    }
  };
  const equipamentModelName = (id: string | undefined) => {
    for (let index = 0; index < equipmentModel.length; index++) {
      if (equipmentModel[index].id === id) {
        return equipmentModel[index].name;
      }
    }
  };

  const lastCoord = (id: string | undefined) => {
    for (let index = 0; index < equipmentPositionHistory.length; index++) {
      if (equipmentPositionHistory[index].equipmentId === id) {
        const arrayPositions = equipmentPositionHistory[index].positions;
        const lenghtArrayPositions = arrayPositions.length;
        const lastLat = arrayPositions[lenghtArrayPositions - 1].lat;
        const lastLon = arrayPositions[lenghtArrayPositions - 1].lon;
        return { lat: lastLat, lon: lastLon };
      }
    }
  };

  const equipamentName = (id: string | undefined) => {
    for (let index = 0; index < equipment.length; index++) {
      if (equipment[index].id === id) {
        return equipment[index].name;
      }
    }
  };

  const lastStateEquipament = (id: string | undefined) => {
    for (let index = 0; index < equipmentStateHistory.length; index++) {
      if (equipmentStateHistory[index].equipmentId === id) {
        let length = equipmentStateHistory[index].states.length;
        return equipmentStateHistory[index].states[length - 1].equipmentStateId;
      }
    }
  };
  const status = (id: string | undefined) => {
    for (let index = 0; index < equipmentState.length; index++) {
      if (equipmentState[index].id == id) {
        return equipmentState[index].name;
      }
    }
  };

  const styledMarker = (state: string | undefined) => {
    if (state == "a3540227-2f0e-4362-9517-92f41dabbfdf") {
      return L.icon({
        iconUrl: iconCaminhao,
        iconSize: [30, 30],
      });
    } else if (state == "a4b0c114-acd8-4151-9449-7d12ab9bf40f") {
      return L.icon({
        iconUrl: iconHarvester,
        iconSize: [50, 35],
      });
    }
    return L.icon({
      iconUrl: iconGarraTracadora,
      iconSize: [30, 30],
    });
  };

  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ul>
        {arrId().map((id: string) => {
          return (
            <li key={id}>
              <Marker
                position={{
                  lat: Number(lastCoord(id)?.lat),
                  lng: Number(lastCoord(id)?.lon),
                }}
                icon={styledMarker(equipamentModelId(id))}
              >
                <Popup>
                  <strong>{equipamentName(id)}</strong>
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                    {equipamentModelName(equipamentModelId(id))}
                  </span>
                  {status(lastStateEquipament(id)) === "Parado" ? (
                    <span style={{ color: "#f1c40f", fontWeight: "bold" }}>
                      {status(lastStateEquipament(id))}
                    </span>
                  ) : status(lastStateEquipament(id)) === "Manutenção" ? (
                    <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
                      {status(lastStateEquipament(id))}
                    </span>
                  ) : (
                    <span style={{ color: "#2ecc71", fontWeight: "bold" }}>
                      {status(lastStateEquipament(id))}
                    </span>
                  )}

                  <Link to={"/equipment/" + id}>Visualizar histórico</Link>
                </Popup>
              </Marker>
            </li>
          );
        })}
      </ul>
    </MapContainer>
  );
}

export default NewMap;
