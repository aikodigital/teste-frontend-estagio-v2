import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import './map.css'
import Equipament from "../../data/equipment.json"
import EquipamentPosition from "../../data/equipmentPositionHistory.json"
import EquipamentState from "../../data/equipmentState.json"
import EquipamentStateHistory from "../../data/equipmentStateHistory.json"


const Map = () => {

  const equip = Equipament
  const ePos = EquipamentPosition
  const eState = EquipamentState
  const eStateHist = EquipamentStateHistory

  function getEquipName(equipmentId: string) {
    var name = equip.filter(val => val.id === equipmentId).map(function (eq) {
      return eq.name;
    })
    return name
  }

  function getState(equipmentId: string) {
    var state = eStateHist.filter(val => val.equipmentId === equipmentId).map(function (obj) {
      var stateID = obj.states[obj.states.length - 1].equipmentStateId;
      return eState.filter(val => val.id === stateID).map(function (state) {
        return state.name
      });
    })
    return state
  }

  function getStateHistory(equipmentId: string) {
    var stateHist = eStateHist.filter(val => val.equipmentId === equipmentId).map(function (state) {
      return state;
    })
    return stateHist[0].states
  }

  function getStateColorByEquipID(equipmentId: string) {
    var color = eStateHist.filter(val => val.equipmentId === equipmentId).map(function (obj) {
      var stateID = obj.states[obj.states.length - 1].equipmentStateId;
      return eState.filter(val => val.id === stateID).map(function (state) {
        return state.color
      });
    })
    return color[0][0]
  }

  function getStateNameByID(equipmentStateId: string) {
    var name = EquipamentState.filter(val => val.id === equipmentStateId).map(function (eq) {
      return eq.name;
    })
    return name
  }
  function getStateColorByID(equipmentStateId: string) {
    var color = EquipamentState.filter(val => val.id === equipmentStateId).map(function (eq) {
      return eq.color;
    })
    return color[0]
  }

  return (
    <MapContainer center={[-18.6556013, -44.29957]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {ePos.map(e => (
        <Marker key={e.equipmentId} position={[e.positions[e.positions.length - 1].lat, e.positions[e.positions.length - 1].lon]} riseOnHover>
          <Tooltip position={[e.positions[e.positions.length - 1].lat, e.positions[e.positions.length - 1].lon]}>
            <div>

              <h2>
                {getEquipName(e.equipmentId)}
              </h2>

              <div className='t'>  
                <p className='t-status'>Status:</p>              
                <p style={{ color: getStateColorByEquipID(e.equipmentId) }}>
                  {getState(e.equipmentId)}
                </p>
              </div>

            </div>
          </Tooltip>

          <Popup>
            <div className='p'>

              <h2>States History</h2> 

              {getStateHistory(e.equipmentId).map(el => (
                <div className='p-popup-container' key={el.equipmentStateId}>  
                  <h4>{new Date(el.date).toUTCString()}</h4>
                  <div className='p-popup'>
                    <p className='p-status'>Status:</p> 
                    <p style={{ color: getStateColorByID(el.equipmentStateId) }}>
                      {getStateNameByID(el.equipmentStateId)}
                    </p>
                  </div>
                  <hr className='p-hr' />
                </div>
              ))}
               
            </div>
          </Popup>

        </Marker>
      ))}

    </MapContainer>
  )
}

export default Map