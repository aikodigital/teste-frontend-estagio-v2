import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../containers/App.css";

import { data } from "../data/assignedData";

export function MapComponent() {
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
        {data.stateHis &&
          data.position.map((cord, i) => {
            return (
              <Marker
                key={cord.equipmentId}
                position={[
                  cord.positions[Array.length - 1].lat,
                  cord.positions[Array.length - 1].lon,
                ]}
              >
                <Popup>
                  <h3>{data.stateHis[i].states[Array.length - 1].date}</h3>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
}
