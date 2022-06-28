import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';

import { truckIcon, tracerClawIcon, harvesterIcon } from "../../assets/customIcons";

import { useEquipment } from '../../hooks/equipment';

interface MapProps {
    openModal: () => void;
}

export function Map({
    openModal
}: MapProps){
    const [loading, setLoading] = useState(true);

    const { equipmentList, checkEquipmentStateHistory } = useEquipment();

    function handleOpenModal(equipmentId: string){
        checkEquipmentStateHistory(equipmentId);
        openModal();
    }

    function handleEquipmentIcon(equipmentModelName: string){
        if(equipmentModelName === "Caminhão de carga"){
            return truckIcon;
        } else if(equipmentModelName === "Harvester"){
            return harvesterIcon;
        } else if(equipmentModelName === "Garra traçadora"){
            return tracerClawIcon;
        } else {
            return undefined;
        }
    }

    useEffect(() => {
        if(equipmentList.length !== 0){
            setLoading(false);
        }
    }, [equipmentList]);

    if (loading){
        return <h1>Carregando Mapa...</h1>
    } else {
        return (
                <MapContainer 
                center={[equipmentList[0].positionInformation.lat, equipmentList[0].positionInformation.lon]} 
                zoom={11} 
                scrollWheelZoom={false} 
                className={styles.leaflet}
                >
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        equipmentList.map((element) => {
                            return (
                                <Marker 
                                    position={[element.positionInformation.lat, element.positionInformation.lon]}
                                    key={element.id}
                                    icon={handleEquipmentIcon(element.modelName)}
                                >
                                    <Popup>
                                        <strong>{element.name}</strong> - <span 
                                            style={{ 
                                                color: `${element.stateInformation.color}`,
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase' 
                                            }} 
                                        >{element.stateInformation.name}</span>

                                        <div
                                            onClick={() => handleOpenModal(element.id)}
                                            className={styles.popup_button}
                                        >Checar Histórico</div>
                                    </Popup>
                                </Marker>
                            );
                        })
                    }
                </MapContainer>
        );
    }
}