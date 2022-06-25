import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  getEquipmentModel,
  getEquipmentPositions,
  getEquipments,
  getEquipmentStatesHistory
} from "../../services/equipment";

import styles from "./index.module.css";

const Map = () => {
  useEffect(() => {
    console.log(getEquipments());
    console.log(getEquipmentStatesHistory(getEquipments()[0].id));
  }, []);

  return (
    <div className={styles.container}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
