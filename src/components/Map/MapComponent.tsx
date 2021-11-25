import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './MapComponent.css';
import locData from '../../data/equipmentPositionHistory.json';
import eqData from '../../data/equipment.json';
import stateHistoryData from '../../data/equipmentStateHistory.json';
import stateData from '../../data/equipmentState.json';

import { render } from '@testing-library/react';

function MapComponent() {

  const LeafletMarkers = locData.map(marker => {

    marker.positions = marker.positions.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))


    return (
      <Marker position={[marker.positions[0].lat, marker.positions[0].lon]} key={`marker_${marker.equipmentId}`}>

        <Popup className="pop">
          <span> <b>Equipamento :</b> {equipmentName(marker.equipmentId)} <br></br></span>
          <span> <b>Modelo do equipamento :</b> {equipmentModelId(marker.equipmentId)}  <br></br></span>
          <span> <b>Id do equipamento :</b> {marker.equipmentId} <br></br></span>
          <span> <b>Estado do equipamento :</b> {equipmentState(marker.equipmentId)} <br></br></span>
          <span> <b>Histórico de Estados do equipamento</b>                       </span>
          <button id="button" className="btn" onClick={() => showHistory(marker.equipmentId)}> Ver mais </button>
          <ul id={marker.equipmentId} className="hide">
            {getStateHistory(marker.equipmentId).map((item) => (
              <li key={`li_${item.equipmentStateId}_${item.date}`}>
                {getStateName(item.equipmentStateId)} | {new Date(item.date).toDateString()}
              </li>
            ))}
          </ul>

        </Popup>
      </Marker>
    )
  });

  return (


    <MapContainer center={[-19.264235, -45.947756]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {LeafletMarkers}

    </MapContainer>
  )
};



function equipmentName(id: string) {
  var index = eqData.filter(x => x.id === id);
  return index[0].name;
}

function equipmentModelId(id: string) {
  var model;
  var index = eqData.filter(x => x.id === id)[0].equipmentModelId;
  if (index === "a4b0c114-acd8-4151-9449-7d12ab9bf40f") {
    model = 'Harvester';
  } else if (index === "9c3d009e-0d42-4a6e-9036-193e9bca3199") {
    model = 'Garra Traçadora';
  } else if (index === "a3540227-2f0e-4362-9517-92f41dabbfdf") {
    model = 'Caminhão de Carga';
  } else {
    model = 'desconhecido';
  }
  return model;
}

function equipmentState(id: string) {
  var equipmentStates = stateHistoryData.filter((x) => x.equipmentId === id)[0];
  equipmentStates.states = equipmentStates.states.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
  var stateId = equipmentStates.states[0].equipmentStateId;

  return stateData.filter((state) => state.id === stateId)[0].name;
}

function getStateHistory(id: string) {
  var equipmentStates = stateHistoryData.filter((x) => x.equipmentId === id)[0];
  return equipmentStates.states.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
}

function getStateName(id: string) {
  return stateData.filter((state) => state.id === id)[0].name;
}

function showHistory(id: string) {
  let el = document.getElementById(id);
  if (el?.classList.contains("hide")) {
    el.classList.remove('hide');
    el.classList.add('show');
    return undefined;
  }
  el?.classList.remove('show');
  el?.classList.add('hide');
  return undefined;
}


export default MapComponent;
