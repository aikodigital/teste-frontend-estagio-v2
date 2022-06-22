import { Marker, Popup } from "react-leaflet";
import { Link } from 'react-router-dom';
import equipmentPositionHistories from '../../assets/data/equipmentPositionHistory.json';
import L from "leaflet";
import { findEquipmentName, findEquipmentModel, findEquipmentState } from "../../accessData/usingData.js";

function reverseArr() {
    equipmentPositionHistories.map((history) => history.positions.reverse())
}

reverseArr();

function Markers() {

    const customMarkerIcon = new L.Icon({
        iconUrl: require('../../assets/img/truck-monster-solid.png'),
        iconRetinaUrl: require('../../assets/img/truck-monster-solid.png'), 
        shadowUrl: null,
        iconSize: [40, 35]
    }); 

    return(
        equipmentPositionHistories.map((positionHistory, i) => (
            <Marker key={i} position={[positionHistory.positions[0].lat, positionHistory.positions[0].lon]} icon={customMarkerIcon}>
                <Popup>
                    <div>Nome: {findEquipmentName(positionHistory.equipmentId)}</div>
                    <div>Modelo: {findEquipmentModel(positionHistory.equipmentId)}</div>
                    <div>Estado: {findEquipmentState(positionHistory.equipmentId)}</div>
                    <Link to={`/states/${positionHistory.equipmentId}`}>Histórico do equipamento</Link> 
                </Popup>
            </Marker>
        ))
    )
}

export default Markers;