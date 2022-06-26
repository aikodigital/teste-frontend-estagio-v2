import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


import './app.css'
import equipments from './data/equipment.json'
import equipmentsPosition from './data/equipmentPositionHistory.json'
import equipmentsState from './data/equipmentState.json'
import equipmentsStateHistory from './data/equipmentStateHistory.json'

import PopUp from './components/Popup'


function App() {

  const [equipment, setEquipment] = useState(equipments)
  const [equipmentPos, setEquipmentPos] = useState(equipmentsPosition)
  const [equipmentState, setEquipmentState] = useState(equipmentsState)
  const [equipmentStateHistory, setEquipmentStateHistory] = useState(equipmentsStateHistory)

  const [equipmentCurrentPos , setEquipmentCurrentPos] = useState([])
  const [equipmentCurrentState, setEquipmentCurrentState] = useState([])

  const [popupButtom, setPopupButtom] = useState(false)


    for(let i in equipment){
      for(let c in equipmentPos ){
        let equip = equipment[i]
        let equipPos = equipmentPos[c]
  
        if(equip.id === equipPos.equipmentId){
          // var positions = equipPos.positions[equipPos.positions.length - 1]
          let obj = equipPos.positions[equipPos.positions.length - 1] 
          obj.equipmentId = equipPos.equipmentId
          equipmentCurrentPos.push(obj)
          // console.log(obj)
        }
      }
    }

    // retorna o nome do equipamento passando o id dele como parâmetro
  function equipmentName(equipmentId){
    for(let i in equipment){
      let equip = equipment[i]

      if(equip.id === equipmentId){
        return equip.name
      }
    }
  }

  // guarda o ultimo State registrado de cada equipment 
  function getCurrentEquipmentState(equipmentId){
    for(let i in equipmentStateHistory){
      let equip = equipmentStateHistory[i]

      if(equip.equipmentId === equipmentId){
        let obj = equip.states[equip.states.length - 1]
        obj.equipmentId = equip.equipmentId
        equipmentCurrentState.push(obj)
        // return equip.states.length - 1
        // console.log(obj)
      }
    }
  }

  // retorna nome e status color de cada equipment baseado no último State
  function getState(equipmentId){
    for(let i in equipmentCurrentState){
      for(let c in equipmentState){
        let equip = equipmentCurrentState[i]
        let equipState = equipmentState[c]
  
        if(equip.equipmentId === equipmentId){
          if(equip.equipmentStateId === equipState.id ){
            // console.log(equipState.name)
            return {name: equipState.name, color: equipState.color}
            
            // return equipState.name
          }
        }
      }
    }
  }


   
  return (
<>
    <MapContainer style={{width: '100vw', height: '100vh'}} center={[-19.151801, -46.007759]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { equipmentCurrentPos.map(items => (
        <Marker key={items.equipmentId} position={[items.lat, items.lon]}>
          <div onBlur={(e)=> setPopupButtom(false)}>
        <Popup>
          {getCurrentEquipmentState(items.equipmentId)}
          <h2>Nome: {equipmentName(items.equipmentId)} </h2>
          <p>Status: <span style={{color: getState(items.equipmentId).color} }>
                      {getState(items.equipmentId).name}
                     </span>
          </p>

          <button type='buttom' onClick={() => setPopupButtom(true) }>Ver histórioco do equipamento</button>

          
          <PopUp onBlur={(e)=> setPopupButtom(false)} trigger={popupButtom} closeTrigger={setPopupButtom}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eaque. Tempore provident molestias modi commodi nesciunt cumque ratione autem adipisci, perspiciatis nobis debitis eveniet magni, blanditiis est ut expedita perferendis?
          </PopUp>
          
          {/* {equipmentState(items.equipmentId)} */}
        </Popup>
        </div>
      </Marker>
      )) }
      
    </MapContainer> 
      
    </>
  )
}

export default App
