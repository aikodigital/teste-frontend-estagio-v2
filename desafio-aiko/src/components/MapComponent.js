import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../containers/App.css";

import equipModel from "../data/equipmentModel.json";
import equipPosition from "../data/equipmentPositionHistory.json";
import equip from "../data/equipment.json";

export function MapComponent() {
  const data = [equipModel, equipPosition, equip];
  return (
    <div>
      <MapContainer
        height="180px"
        center={[-19.264235, -46.092436]}
        zoom={4}
        scrollWheelZoom={true}
        className="rounded-xl m-4  border-box"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((cord, i) => {
          return (
            <Marker
              key={i}
              position={[
                equipPosition[i].positions[0].lat,
                equipPosition[i].positions[0].lon,
              ]}
            >
              <Popup>{/* <h3>{equip[i].name}</h3> */}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
