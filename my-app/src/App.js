
import React from 'react';

import { useState, useEffect } from 'react';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import './App.css';

import equipment from './data/equipment.json'

import equipmentModel from './data/equipmentModel.json'

import equipmentPositionHistory from './data/equipmentPositionHistory.json'

import equipmentStateHistory from './data/equipmentStateHistory.json'

import equipmentState from './data/equipmentState.json'

function App() {

  // Pega a última locaçização do eqipamento

  const dataEqpPositionHist = equipmentPositionHistory.map(v => v.positions[v.positions.length - 1])

  const dataEqpIds = equipmentPositionHistory.map(e => e.equipmentId)

  const [date, setDate] = useState('')

  const [estadoEqp, setEstadoEqp] = useState([])

  const [show, setShow] = useState(false)

  const [color, setColor] = useState('')

  function handleShowHist(e) {

      setDate(e.target.value)
    
      const idEquipmentSelected = date.split('_')[1]
  
      const estadoDoEquipamento = equipmentStateHistory.filter(e => e.equipmentId === idEquipmentSelected).map(v => v.states[v.states.length - 1])
  
      setEstadoEqp(equipmentState.filter(v => v.id == estadoDoEquipamento[0].equipmentStateId))

      setShow(!show)
  }

  function handleShowHist2(e) {

    setDate(e.target.value)
  
    const idEquipmentSelected = date.split('_')[1]

    const estadoDoEquipamento = equipmentStateHistory.filter(e => e.equipmentId === idEquipmentSelected).map(v => v.states[v.states.length - 1])

    setEstadoEqp(equipmentState.filter(v => v.id == estadoDoEquipamento[0].equipmentStateId))

}

  var increment = 0;

  return (

    <MapContainer center={[-19.151801, -46.007759]} zoom={11} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dataEqpPositionHist.map(v => (
        <Marker key={v.lat} position={[v.lat, v.lon]}>

          <div onMouseLeave={(e) => setShow(false)}>
            <Popup>

              <button value={v.date + '_' + dataEqpIds[increment]} onClick={handleShowHist} onMouseEnter={handleShowHist2}>Estado Atual</button>

              {show && (
                <>
                  {estadoEqp.map(e => (
                    <div >
                      <p>Estado: {e.name}</p>
                      <p>Data: {v.date}</p>
                      <p>ID Equipamento: {date.split('_')[1]}</p>
                    </div>
                  ))}
                </>
              )}

            </Popup>
          </div>
          <div style={{display: 'none'}}>
            {increment++}
          </div>
        </Marker>
      ))}
    </MapContainer>

  );
}

export default App;
