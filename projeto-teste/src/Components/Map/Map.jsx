import React, { useState } from 'react'
import './Map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import EquipmentPosition from '../../Assets/data/equipmentPositionHistory.json'
import EquipmentName from '../../Utils/EquipmentName'
import EquipmentModel from '../../Utils/EquipmentModel'
import EquipmentState from '../../Utils/EquipmentState'
import StatesHistory from '../../Utils/StatesHistory'

const Map = () => {
  const [buttom, setButtom] = useState();
  const Position = EquipmentPosition.map(e => e.positions[e.positions.length - 1]);
  const EquipmentId = EquipmentPosition.map(e => e.equipmentId);
  let i = 0;

  function ButtomPopup(props) {
    if(props.trigger) {
      return (
        <section className="content">
          <button className="close" onClick={() => props.closeTrigger(false)}>x</button>
          {props.children}
        </section>
    )} 
  }

  return (
    <MapContainer center={[-19.173577, -46.054022]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {Position.map(e => (
        <Marker key={e.lat} position={[e.lat, e.lon]}>
          <Popup>
            <p id="info">Nome: {EquipmentName(EquipmentId[i])}</p>
            <p id="info">Modelo: {EquipmentModel(EquipmentId[i])}</p>
            <p id="info">Estado: {EquipmentState(EquipmentId[i])}</p>
              
            <button className="buttom" onClick={() => setButtom(true)}>Histórico de Estados</button>   
            <ButtomPopup trigger={buttom} closeTrigger={setButtom}>  
              {StatesHistory(EquipmentId[i]).map((e) => (
                <p id="container" style={{color: e.state.color}}>Estado: {e.state.name}</p>
              ))}   
            </ButtomPopup>
          </Popup>
          {i++}
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map