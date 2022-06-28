import './Details.css'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import equipmentState from '../../../../data/equipmentState.json'

const listaSitucao = (estadoId) => equipmentState.find(state => estadoId === state.id)

export default function Details({position}) {
  const situacaoName = listaSitucao(position.estado).name

  return(
    <div className="details">
      <h2><strong>Data:</strong> {position.date}</h2><br />
      <span><strong>Estado:</strong> {situacaoName}</span><br />
      <span><strong>Latitude:</strong> {position.lat}</span><br />
      <span><strong>Longitude:</strong> {position.lon}</span><br />
      <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}