import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { EquipmentsType } from "../../types/equipments";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import styles from "./styles.module.scss";
import { Loader } from "../Loader";

interface DetailsProps {
  equipments: (EquipmentsType | undefined)[];
}

const defaultIcon = leaflet.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
});

export default function MapLocation({ equipments }: DetailsProps) {
  if (!equipments) {
    return <Loader />;
  }
  return (
    <MapContainer
      center={[
        equipments[0]!.positionHistory[0].lat,
        equipments[0]!.positionHistory[0].lon,
      ]}
      zoom={13}
      scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {equipments.map((equipment) => {
        return (
          <Marker
            key={equipment!.id}
            position={[
              equipment!.positionHistory[0].lat,
              equipment!.positionHistory[0].lon,
            ]}
            icon={defaultIcon}
          >
            <Popup>
              {equipment!.name} | {equipment!.model.name}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
