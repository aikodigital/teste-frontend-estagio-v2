import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../containers/App.css";

import dataId from "../data/equipment.json";
import model from "../data/equipmentModel.json";
import stateHis from "../data/equipmentStateHistory.json";
import states from "../data/equipmentState.json";
import position from "../data/equipmentPositionHistory.json";

export function MapComponent() {
  const mapData =
    stateHis &&
    position.map((coord, i) => {
      const stateColor = states.find(
        (stateName) =>
          stateHis[i].states[Array.length - 1].equipmentStateId === stateName.id
      ).color;

      const equipName = dataId.find(
        (name) => name.id === coord.equipmentId
      ).name;

      return (
        <Marker
          key={coord.equipmentId}
          position={[
            coord.positions[Array.length - 1].lat,
            coord.positions[Array.length - 1].lon,
          ]}
        >
          <Popup>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2 style={{ color: stateColor }}> {equipName}: </h2>
              <h3 style={{ color: stateColor }}>
                {
                  states.find(
                    (stateName) =>
                      stateHis[i].states[Array.length - 1].equipmentStateId ===
                      stateName.id
                  ).name
                }
              </h3>
            </div>
          </Popup>
        </Marker>
      );
    });

  return (
    <div style={{ zIndex: -1, display: "flex", justifyContent: "center" }}>
      <MapContainer
        height="180px"
        center={[-19.264235, -46.092436]}
        zoom={6}
        scrollWheelZoom={true}
        className="rounded-xl border-box min-w-full sm:my-2 md:my-2 lg:my-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {mapData}
      </MapContainer>
    </div>
  );
}
