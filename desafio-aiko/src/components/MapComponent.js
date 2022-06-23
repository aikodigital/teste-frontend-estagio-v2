import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../containers/App.css";

export function MapComponent() {
  return (
    <MapContainer
      height="180px"
      center={[51.505, -0.09]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ display: "flex", justifyContent: "center" }}
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
  );
}
