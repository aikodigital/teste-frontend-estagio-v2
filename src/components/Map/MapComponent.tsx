import { LatLngExpression, popup } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './MapComponent.css';
import locData from '../../data/equipmentPositionHistory.json';
import eqData from '../../data/equipment.json';
import stateHistoryData from '../../data/equipmentStateHistory.json';
import stateData from '../../data/equipmentState.json';

import { render } from '@testing-library/react';

function MapComponent() {

  
   

  const LeafletMarkers = locData.map(marker => (
    <Marker position={[marker.positions[marker.positions.length - 1].lat, marker.positions[marker.positions.length - 1].lon]} key={`marker_${marker.equipmentId}`}>
      
      <Popup>
        <span> Equipamento : {equipmentName(marker.equipmentId)} <br></br></span>
        <span> Modelo do equipamento : {equipmentModelId(marker.equipmentId)}  <br></br></span>
        <span> Id do equipamento : {marker.equipmentId} <br></br></span>
        <span> Estado do equipamento : {equipmentState(marker.equipmentId)} <br></br></span>
        <span> Histórico de Estados do equipamento : <br></br></span>
      </Popup>
    </Marker>
  ));

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

function createLngLat(lon: number, lat: number): LatLngExpression {
  return { lng: lon, lat: lat }
}

function equipmentName(id: string) {
  var index = eqData.filter(x => x.id === id);  
  var name = index[0].name;
  return name;
}

function equipmentModelId(id: string) {
  var modelo;
  var index = eqData.filter(x => x.id === id);  
  var modelId = index[0].equipmentModelId;
  if (modelId == "a4b0c114-acd8-4151-9449-7d12ab9bf40f"){
   modelo  = 'Harvester';
  }else if (modelId == "9c3d009e-0d42-4a6e-9036-193e9bca3199" ){
    modelo = 'Garra Traçadora';
  }else if (modelId == "a3540227-2f0e-4362-9517-92f41dabbfdf" ){
    modelo = 'Caminhão de Carga';
  }else{
    modelo = 'desconhecido';
  }
  return modelo;
}



function equipmentState(id: string) {
  var index = stateHistoryData.find((x) => x.equipmentId === id); 
  var state = index?.states[index?.states.length-1].equipmentStateId; 
  var atual;
  if (state == "0808344c-454b-4c36-89e8-d7687e692d57"){
    atual = "operando";
  }else if (state == "baff9783-84e8-4e01-874b-6fd743b875ad"){
    atual = "parado";
  }else if (state == "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f"){
    atual = "Manutenção";
  }else {
    atual = "desconhecido";
  }
   
  
  return atual;
}


export default MapComponent;
