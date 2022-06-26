import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { MapsMarkings } from '../MapMarkings/index'

export function Map() {
  return (
    <>
      <MapContainer
        center={[-19.1478, -46.0125]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapsMarkings />
      </MapContainer>

      <style jsx>{`
        .leaflet-container {
          height: 550px;
        }
      `}</style>
    </>
  )
}
