import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../containers/App.css";

import equipModel from "../data/equipmentModel.json";
import equipPosition from "../data/equipmentPositionHistory.json";

export function MapComponent() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MapContainer
        height="180px"
        center={[-19.264235, -46.092436]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {equipPosition.map((cord, i) => {
          return (
            <Marker
              key={equipPosition[i].equipmentId}
              position={[
                equipPosition[i].positions[0].lat,
                equipPosition[i].positions[0].lon,
              ]}
            >
              <Popup>{/* <h3>{equipModel[i].name}</h3> */}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
