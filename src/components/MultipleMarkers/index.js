import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import equipmentPositionHistories from '../../assets/data/equipmentPositionHistory.json';
import L from "leaflet";
import {findEquipmentName, findEquipmentModel, findEquipmentCurState } from '../../data-access/data-functions.js';

function reverseArray() {
    equipmentPositionHistories.map((history) => history.positions.reverse());
}

reverseArray();
function MultipleMarkers() {

    const customMarker = new L.Icon({
        iconUrl: require('../../assets/img/trator.png'),
        iconRetinaUrl: require('../../assets/img/trator.png'),
        shadowUrl: null,
        iconSize: [40, 35]
    }); 

    return (
        equipmentPositionHistories.map((positionHistory, i) => (
            <Marker key={i} position={[positionHistory.positions[0].lat, positionHistory.positions[0].lon]} icon={customMarker}>
                <Popup>
                    <div>Nome: {findEquipmentName(positionHistory.equipmentId)}</div>
                    <div>Modelo: {findEquipmentModel(positionHistory.equipmentId)}</div>
                    <div>Estado: {findEquipmentCurState(positionHistory.equipmentId)}</div>
                    <Link to={`/states/${positionHistory.equipmentId}`}>Histórico de estados.</Link>
                </Popup>
            </Marker>
        )))
}

export default MultipleMarkers;
