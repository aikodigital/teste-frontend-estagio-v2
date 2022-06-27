import { MapContainer, TileLayer } from 'react-leaflet';

import { Markers } from '../Markers';

import classes from './styles.module.css';

export function Map() {
  return (
    <MapContainer
      className={classes.map}
      center={[-19.151801, -46.007759]}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Markers />
    </MapContainer>
  );
}
