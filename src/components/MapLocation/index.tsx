import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { EquipmentsType } from "../../types/equipments";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import styles from "./styles.module.scss";

interface DetailsProps {
  equipment: EquipmentsType;
}

const defaultIcon = leaflet.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
});

export default function MapLocation({ equipment }: DetailsProps) {
  return (
    <MapContainer
      center={[
        equipment.positionHistory[0].lat,
        equipment.positionHistory[0].lon,
      ]}
      zoom={13}
      style={{ height: "50vh", width: "50vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[
          equipment.positionHistory[0].lat,
          equipment.positionHistory[0].lon,
        ]}
        icon={defaultIcon}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
