import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import equipment from '../../data/equipment.json'
import equipmentModel from '../../data/equipmentModel.json'
import equipmentState from '../../data/equipmentState.json'
import equipmentStateHistory from '../../data/equipmentStateHistory.json'
import equipmentPositionHistory from '../../data/equipmentPositionHistory.json'
import Modal from './components/Modal/Modal'


const modelo = (equipment: string[]) => equipmentModel.map(model => equipment.equipmentModelId === model.id ? model.name : "")
const lastState = (equipment: string[]) => equipmentStateHistory.map(history => {
  const [state] = equipmentState.filter(state =>  state.id === history.states[history.states.length - 1].equipmentStateId)
  return equipment.id === history.equipmentId ? state.name : ""})

function App() {
  return (
    <MapContainer center={[-19,-46]} zoom={11} scrollWheelZoom={true}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        equipment.map((equipment, index) => {
          return(
          <Marker 
            key={equipment.id}
            position={[equipmentPositionHistory[index].positions.slice(-1)[0].lat,equipmentPositionHistory[index].positions.slice(-1)[0].lon]}>
            <Popup>
              <>
                <span><strong>Nome do equipamento:</strong> {equipment.name} </span><br />             
                <span><strong>Nome do modelo:</strong> {modelo(equipment)} </span><br />             
                <span><strong>Estado Atual:</strong> {lastState(equipment)} </span><br />             
                <span><strong>Id do equipamento:</strong> {equipment.id}  </span><br />             
                <span><strong>Id do modelo:</strong> {equipment.equipmentModelId}</span><br />             
                <Modal equipment={{indice: index, modelo: modelo(equipment), ...equipment}}/>
              </>
            </Popup>
          </Marker>
          )      
        })
      }
    </MapContainer>
  )
}

export default App
