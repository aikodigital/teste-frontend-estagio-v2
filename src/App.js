import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import equipmentPositionHistory from "./data/equipmentPositionHistory.json";
import equipmentStateHistory from "./data/equipmentStateHistory.json";
import equipmentState from "./data/equipmentState.json";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon.png",
  iconSize: [30, 50],
  iconAnchor: [17, 46],
  popupAnchor: [0, -45],
});

const position = {
  lat: -19.126536,
  lon: -45.947756,
};

function App() {

  const findEquipmentHistorys = (equipmentId) => {
    const foundHistoric = equipmentStateHistory.find((x) => {
      return x.equipmentId === equipmentId;
    });
      foundHistoric.states.forEach((x) => {
        const foundOtherArray = equipmentState.find((y) => {
          return x.equipmentStateId === y.id;
        });
        x.name = foundOtherArray.name;
      });
    return foundHistoric.states;
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "100vw", height: "100vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=XlJSzJhhm9qOforatnQh"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {equipmentPositionHistory.map((equipmentPositionHistorys) => {
        const pos = {
          lat: equipmentPositionHistorys.positions[equipmentPositionHistorys.positions.length - 1].lat,
          lon: equipmentPositionHistorys.positions[equipmentPositionHistorys.positions.length - 1].lon,
        };
        
        const foundHistoricEquipment = equipmentStateHistory.find((equipmentStateHistorys) => {
          return equipmentStateHistorys.equipmentId === equipmentPositionHistorys.equipmentId;
        });

        const foundState = equipmentState.find((equipmentStates) => {
          return equipmentStates.id === foundHistoricEquipment.states[foundHistoricEquipment.states.length - 1].equipmentStateId;
        });

        const historic = findEquipmentHistorys(equipmentPositionHistorys.equipmentId);
        
        return (
          <Marker position={pos} icon={markerIcon}>
            <Tooltip direction="top" offset={[-1, -42]} opacity={1}>
              <b>{foundState.name}</b>
            </Tooltip>
            <Popup>
              <div>
                <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
                  <h4>
                    Histórico
                  </h4>
                  <span>
                    {historic.map((x) => (
                      <p>
                        {x.date} - {x.name}
                      </p>
                    ))}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default App;
