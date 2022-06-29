import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { useState, useCallback } from 'react'
import position from '../data/equipmentPositionHistory.json'
import equipment from '../data/equipment.json'
import stateHistory from '../data/equipmentStateHistory.json'
import states from '../data/equipmentState.json'
import Infos from './Infos'

import styles from './Map.module.css'
import LastState from './LastState'

function Map(props) {
    var latList = position.map(e => {
        var last = e.positions.length - 1;
        return e.positions.at(last).lat
    });
    var lonList = position.map(e => {
        var last = e.positions.length - 1;
        return e.positions.at(last).lon
    });

    var latCenter = latList.reduce((soma, i) => {
        return soma + i;
    })/latList.length

    var lonCenter = lonList.reduce((soma, i) => {
        return soma + i;
    })/lonList.length

    const [show, setShot] = useState('0');
    const [equipmentId, setEquipmentId] = useState(null);

    function showInfo(id){
        setShot('1');
        alert(show);
        setEquipmentId(id);
    }

    function unShowInfo(){
        setShot('0');
        alert(show);
        setEquipmentId(null);
    }

    return (
        <div>
            <MapContainer center={[latCenter, lonCenter]} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    position.map( e => {
                        var last = e.positions.length - 1;
                        return (
                            <Marker 
                                key={e.equipmentId} 
                                position={[e.positions.at(last).lat, e.positions.at(last).lon]}
                            >
                                <LastState equipmentId={e.equipmentId} click={props.click}/>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        </div>
    );
}

export default Map;