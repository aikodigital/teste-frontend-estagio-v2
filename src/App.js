import './App.css';
import Leaflet from "leaflet";
import 'leaflet/dist/leaflet.css';
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import equipments from './data/equipment.json';
//import equipmentModel from './data/equipmentModel.json';
import equipmentPositionHistory from './data/equipmentPositionHistory.json';
import equipmentStateHistory from "./data/equipmentStateHistory.json";
import equipmentState from "./data/equipmentState.json";
import { useState } from 'react';

function getLastPositionHistory(positions) {
  return positions[positions.length - 1]
}

function getEquipmentById(id) {
  return equipments.find(equipment => {
    if(equipment.id === id) return true
    return false
  })
}

function getStateHistoryById(equipmentId) {
  return equipmentStateHistory.find(stateHistory => {
    if(stateHistory.equipmentId === equipmentId) return true
    return false
  })
}

function getStateById(id) {
  return equipmentState.find(state => {
    if(state.id === id) return true
    return false
  })
}


//@TODO tem que mexer nisso depois, pois não é legal alterar o prototype do objeto
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
	iconUrl: markerIcon,
	iconRetinaUrl: markerIcon2x,
	shadowUrl: markerShadow,
});

function App() {
  const [currentEquipmentStateId, setCurrentEquipmentStateId] = useState(null);

  const handleStateHistory = (equipmentId) => {
    setCurrentEquipmentStateId(equipmentId);
  }

  return (
    <div className="App">
      <MapContainer center={[-19.151801, -46.007759]} zoom={13} style={{height: '100vh'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />  
        {equipmentPositionHistory.map(equipmentHistory => {

          const position = getLastPositionHistory(equipmentHistory.positions);
          const equipment = getEquipmentById(equipmentHistory.equipmentId);
          const stateHistory = getStateHistoryById(equipmentHistory.equipmentId);
          const lastStateId = stateHistory.states[stateHistory.states.length - 1].equipmentStateId;
          const lastState = getStateById(lastStateId);

          return (
            <Marker position={[position.lat, position.lon]}>
              <Popup>
                <ul>
                  <li>
                    Equipamento: {equipment.name}
                  </li>
                  <li>
                    Estado atual: <span style={{color: lastState.color}}>{lastState.name}</span>
                  </li>
                  <button onClick={()=> handleStateHistory(equipmentHistory.equipmentId)}>Histórico de estados</button>
                </ul>
                {currentEquipmentStateId === equipmentHistory.equipmentId && 
                <div style={{maxHeight: '200px', overflow: 'auto'}}>
                  <table>
                    <thead>
                      <tr>
                        <th>Data</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stateHistory.states.map(stateRegister => {
                        const state = getStateById(stateRegister.equipmentStateId);
                        return (
                        <tr>
                          <td>{stateRegister.date}</td>
                          <td style={{color: state.color}}>{state.name}</td>
                        </tr>
                      )
                      })}
                      
                    </tbody>
                  </table>
                </div>
                }
              </Popup>
            </Marker>
          )
        })}
        
      </MapContainer>
    </div>
  );
}

export default App;
