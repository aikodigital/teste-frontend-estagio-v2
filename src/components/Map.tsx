import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markup from "./Markup";
import useGetPosition from "../hooks/getPosition";
import "leaflet/dist/leaflet.css";

function Map({ coords }: any) {
  const [equipment, useEquipment] = useState(require("../data/equipment.json"));
  const [equipmentPositionHistory, setEquipmentPositionHistory] = useState(
    require("../data/equipmentPositionHistory.json")
  );

  return (
    <div className="">
      <MapContainer
        center={coords}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "800px" }}
        maxZoom={14}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {useGetPosition(equipmentPositionHistory).map((x: any) => (
          <Markup
            id={x.id}
            position={[x.position.lat, x.position.lon]}
            name={equipment.find((e: any) => e.id === x.id).name}
            lastUpdate={new Date(x.position.date)}
            key={x.id}
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
