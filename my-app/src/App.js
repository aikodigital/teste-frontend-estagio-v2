
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

const dataEqpPositionHist = []

const dataEqpPopup = []

for (let i = 0; i < equipmentPositionHistory.length; i++) {

  let tamanho = equipmentPositionHistory[i].positions.length - 1

  dataEqpPositionHist.push(equipmentPositionHistory[i].positions[tamanho])

}

const [data, setData] = useState('')

function handleFiltraEstados(e){

  e.preventDefault()

  setData(e.target.value)

  const dataFiltrado = equipmentStateHistory.map(v => v.states)

  const statesFiltrados = dataFiltrado.map(v => v.map(v => v.date.includes(data))) // FIXME FILTROS FALHANDO

  console.log(statesFiltrados)

}

  return (

    <MapContainer center={[-19.151801, -46.007759]} zoom={11} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dataEqpPositionHist.map(v => (
        <Marker key={v.lat} position={[v.lat, v.lon]}>
          <Popup>
            <button value={v.date} onClick={handleFiltraEstados}>Listar Estados:</button>
            {data && (
              <p>Opa</p>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>

  );
}

export default App;
