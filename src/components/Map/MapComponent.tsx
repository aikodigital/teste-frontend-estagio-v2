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
          <span> Equipamento : {equipmentName(marker.equipmentId)} <br></br></span>
          <span> Modelo do equipamento : {equipmentModelId(marker.equipmentId)}  <br></br></span>
          <span> Id do equipamento : {marker.equipmentId} <br></br></span>
          <span> Estado do equipamento : {equipmentState(marker.equipmentId)} <br></br></span>
          <span> Histórico de Estados do equipamento : <br></br></span>
          <button onClick={() => showHistory(marker.equipmentId)}> Ver mais </button>
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
  var modelo;
  var index = eqData.filter(x => x.id === id);
  var modelId = index[0].equipmentModelId;
  if (modelId === "a4b0c114-acd8-4151-9449-7d12ab9bf40f") {
    modelo = 'Harvester';
  } else if (modelId === "9c3d009e-0d42-4a6e-9036-193e9bca3199") {
    modelo = 'Garra Traçadora';
  } else if (modelId === "a3540227-2f0e-4362-9517-92f41dabbfdf") {
    modelo = 'Caminhão de Carga';
  } else {
    modelo = 'desconhecido';
  }
  return modelo;
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
    console.log("manteve");
    return undefined;
    
  }
    el?.classList.remove('show');
    el?.classList.add('hide');
    console.log("mudou");
  return undefined;
}


export default MapComponent;
