
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

  const [date, setDate] = useState('');

  const [estadoEqp, setEstadoEqp] = useState([]);

  const [color, setColor] = useState('');

  const [show, setShow] = useState(false);

  const [estadoEqpHist, setEstadoEqpHist] = useState([]);

  const [estadoEqpDate, setEstadoEqpDate] = useState([]);

  const [showHistorico, setShowHistorico] = useState(false);


  // Pega a última locaçização do eqipamento

  const dataEqpPositionHist = equipmentPositionHistory.map(v => v.positions[v.positions.length - 1]);

  const dataEqpIds = equipmentPositionHistory.map(e => e.equipmentId);


  function handleShowHistAtual(e) {

    setDate(e.target.value);

    const idEquipmentSelected = date.split('_')[1];

    const estadoDoEquipamento = equipmentStateHistory.filter(e => e.equipmentId === idEquipmentSelected).map(v => v.states[v.states.length - 1]);

    setEstadoEqp(equipmentState.filter(v => v.id == estadoDoEquipamento[0].equipmentStateId));

    setShow(!show);
  }

  function handleShowHist2(e) {

    setDate(e.target.value)

    const idEquipmentSelected = date.split('_')[1];

    const estadoDoEquipamento = equipmentStateHistory.filter(e => e.equipmentId === idEquipmentSelected).map(v => v.states[v.states.length - 1]);

    setEstadoEqp(equipmentState.filter(v => v.id == estadoDoEquipamento[0].equipmentStateId));

  }

  function handleShowHistorico(e) {

    setDate(e.target.value);

    const idEquipmentSelected = date.split('_')[1];

    const estadoDoEquipamento = equipmentStateHistory.filter(e => e.equipmentId === idEquipmentSelected).map(v => v.states);

    const estadoDoEquipamentoFiltrado = estadoDoEquipamento[0].slice(estadoDoEquipamento[0].length - 10, estadoDoEquipamento[0].length);

    const nomeEstados = [];

    const dataHist = estadoDoEquipamentoFiltrado.map(v => v.date);

    for (let i = 0; i < estadoDoEquipamentoFiltrado.length; i++) {
      nomeEstados.push(equipmentState.filter(v => v.id == estadoDoEquipamentoFiltrado[i].equipmentStateId).map(v => v.name).toString());
    }

    setEstadoEqpDate(dataHist);

    setEstadoEqpHist(nomeEstados);

    setShowHistorico(!showHistorico);

  }

  function handleShowHistorico2(e) {

    setDate(e.target.value);

    const idEquipmentSelected = date.split('_')[1];

    const estadoDoEquipamento = equipmentStateHistory.filter(e => e.equipmentId === idEquipmentSelected).map(v => v.states);

    const estadoDoEquipamentoFiltrado = estadoDoEquipamento[0].slice(estadoDoEquipamento[0].length - 10, estadoDoEquipamento[0].length);

    const nomeEstados = [];

    const dataHist = estadoDoEquipamentoFiltrado.map(v => v.date);

    for (let i = 0; i < estadoDoEquipamentoFiltrado.length; i++) {

      nomeEstados.push(equipmentState.filter(v => v.id == estadoDoEquipamentoFiltrado[i].equipmentStateId).map(v => v.name).toString());

    }

    setEstadoEqpDate(dataHist);

    setEstadoEqpHist(nomeEstados);

  }

  var increment = 0;
  
  return (
    <div className='container-bg'>
      <div className='container-map-tile'>
        {/* <h1>Teste de Estágio - Aiko - Pedro Alves Lara </h1> */}
        <p className='txt-info'>• Consulta de equipamentos - Aiko: </p>
        <p className='txt-desc'>• O objetivo desse sistema é realizar o controle dos equipamentos da empresa Aiko! Clique em um equipamento para visualizar as informações:</p>
        <MapContainer center={[-19.151801, -46.007759]} zoom={11} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {dataEqpPositionHist.map(v => (
            <Marker key={v.lat} position={[v.lat, v.lon]}>
              <div onMouseLeave={(e) => setShow(false)}>
                <Popup>
                  <p>• ID do Equipamento: <br /> {dataEqpIds[increment]}</p>
                  <button value={v.date + '_' + dataEqpIds[increment]} onClick={handleShowHistAtual} onMouseEnter={handleShowHist2}>Estado Atual</button>
                  {show && (
                    <>
                      {estadoEqp.map(e => (
                        <div >
                          <p>• Estado: {e.name}</p>
                          <p>• Data: {v.date.replace('T', ' - ')}</p>
                          <p>• ID Equipamento: {date.split('_')[1]}</p>
                        </div>
                      ))}
                    </>
                  )}
                  <hr />
                  <button value={v.date + '_' + dataEqpIds[increment]} onClick={handleShowHistorico} onMouseEnter={handleShowHistorico2}>Histórico</button>
                  {showHistorico === true && (
                    <div className='overflow-historico'>
                      {estadoEqpHist.map((v, i) => (
                        <div key={i}>
                          <p>• Estado: {v}</p>
                          <p>• Data: {estadoEqpDate[i]} </p>
                          <hr />
                        </div>
                      ))}
                    </div>
                  )}
                </Popup>
              </div>
              <div style={{ display: 'none' }}>
                {increment++}
              </div>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>

  );
}

export default App;
