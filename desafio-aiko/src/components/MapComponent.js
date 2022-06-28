import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../containers/App.css";

import dataId from "../data/equipment.json";
import model from "../data/equipmentModel.json";
import stateHis from "../data/equipmentStateHistory.json";
import states from "../data/equipmentState.json";
import position from "../data/equipmentPositionHistory.json";

export function MapComponent() {
  console.log(
    states.find(
      (x) => stateHis[0].states[Array.length - 1].equipmentStateId === states.id
    ).name
  );
  return (
    <div style={{ zIndex: -1, display: "flex", justifyContent: "center" }}>
      <MapContainer
        height="180px"
        center={[-19.264235, -46.092436]}
        zoom={5}
        scrollWheelZoom={true}
        className="rounded-xl border-box min-w-40 inset-x-0 "
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position.map((cord, i) => {
          return (
            <Marker
              key={cord.equipmentId}
              position={[
                cord.positions[Array.length - 1].lat,
                cord.positions[Array.length - 1].lon,
              ]}
            >
              <Popup>
                <h3>
                  {stateHis.find((x) => x.equipmentStateId === states.id).name}
                </h3>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
