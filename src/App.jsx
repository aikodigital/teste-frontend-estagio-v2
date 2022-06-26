import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import moment from 'moment'


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
          let obj = equipPos.positions[equipPos.positions.length - 1] 
          obj.equipmentId = equipPos.equipmentId
          equipmentCurrentPos.push(obj)
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
      }
    }
  }

  // retorna nome e status color de cada equipment baseado no último State
  function getCurrentState(equipmentId){
    for(let i in equipmentCurrentState){
      for(let c in equipmentState){
        let equip = equipmentCurrentState[i]
        let equipState = equipmentState[c]
  
        if(equip.equipmentId === equipmentId){
          if(equip.equipmentStateId === equipState.id ){
            return {name: equipState.name, color: equipState.color}
          }
        }
      }
    }
  }

  function formatDate(date){
    return moment.utc(date).format('DD/MM/YYYY   h:mm a')
  }

  function getEquipmentStateById(equipmentId){
    return equipmentState.find((state) => state.id === equipmentId)
  }

  function getEquipmentStateHystoryById(equipmentId){
    let equip = equipmentStateHistory.find((item) => item.equipmentId === equipmentId)
    let date = ''
    let equipmentState = ''
    let info = []

      if(equip){
        equip.states.map((item) => {
          date = formatDate(item.date) 
          equipmentState = getEquipmentStateById(item.equipmentStateId) 
          info.push({date,equipmentState})
        })
      }
      return info
    }
  

  return (

    <MapContainer style={{width: '100vw', height: '100vh'}} center={[-19.151801, -46.007759]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      { equipmentCurrentPos.map(items => (
        <Marker key={items.equipmentId} position={[items.lat, items.lon]}>
          <div onBlur={(e)=> setPopupButtom(false)}>

          <Popup className='popup-info' >
            {getCurrentEquipmentState(items.equipmentId)}
            <p>Nome: {equipmentName(items.equipmentId)} </p>
            <p>Status: 
              <span style={{color: getCurrentState(items.equipmentId).color} }>
                {getCurrentState(items.equipmentId).name}
              </span>
            </p>

            <button className='btn' type='buttom' onClick={() => setPopupButtom(true) }>Histórico do Equipamento</button>   
            
            <PopUp  onBlur={(e)=> setPopupButtom(false)} trigger={popupButtom} closeTrigger={setPopupButtom}>
              
              {getEquipmentStateHystoryById(items.equipmentId).map((state) => (
                <div key={state.date} className="container">
                  <div className="equip-date col">
                    <p>Data:</p>
                    <p >{state.date}</p>

                  </div>
                  <div className="equip-status col">
                    <p>Status:</p>
                    <span style={{color: state.equipmentState.color}}>{state.equipmentState.name}</span>
                  </div>
                </div>
              ))}
              
            </PopUp>
          </Popup>
        </div>
      </Marker>
      )) }
      
    </MapContainer> 

  )
}

export default App
