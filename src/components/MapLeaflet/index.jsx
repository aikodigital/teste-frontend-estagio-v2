import './styles.scss'
import 'leaflet/dist/leaflet.css'

import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

/*Provided by Flaticon*/
import mapHeavyTruck from '/images/delivery-truck.png'
import mapClaw from '/images/claw.png'
import mapHarvester from '/images/harvester.png'
import mapPointer from '/images/pointer.png'
import mapDotCircle from '/images/dot-inside-a-circle.png'

import { 
    getEquipments, 
    getEquipmentLastPosition, 
    getEquipmentModel,
    getEquipmentPositionHistory, 
    getEquipmentStateHistory, 
    getEquipmentLastState, 
    getEquipmentStates,
    getEquipmentModels
} from '../../api/Equipment';

export const MapHeavyTruckIcon = Leaflet.icon({
    iconUrl: mapHeavyTruck,
    iconSize: [40, 40],
    popupAnchor: [0, -20],
});

export const MapClawIcon = Leaflet.icon({
    iconUrl: mapClaw,
    iconSize: [40, 40],
    popupAnchor: [0, -20],
});

export const MapHarvesterIcon = Leaflet.icon({
    iconUrl: mapHarvester,
    iconSize: [40, 40],
    popupAnchor: [0, -20],
});

export const MapPointerIcon = Leaflet.icon({
    iconUrl: mapPointer,
    iconSize: [40, 40],
    popupAnchor: [0, -20],
});

export const MapDotCircleIcon = Leaflet.icon({
    iconUrl: mapDotCircle,
    iconSize: [15, 15],
    popupAnchor: [0, -20],
});

const firstInputOption = 'Todos';

export function MapLeaflet({ initialPosition, zoom}) {
    const [equipments, setEquipments] = useState([]);
    const [selectedState, setSelectedState] = useState(firstInputOption);
    const [selectedModel, setSelectedModel] = useState(firstInputOption);

    useEffect(() => {
        const equips = getEquipments().filter((e) => {
            const equipmentModel = getEquipmentModel(e.equipmentModelId);
            const equipmentStateHistory = getEquipmentStateHistory(e.id);
            const equipmentLastState = getEquipmentLastState(equipmentStateHistory);

            if(selectedState === firstInputOption && selectedModel === firstInputOption){
                return true;
            }

            if(selectedState === firstInputOption && selectedModel !== firstInputOption){
                if(equipmentModel.id === selectedModel) {
                    return true;
                }
            }   

            if(selectedState !== firstInputOption && selectedModel === firstInputOption){
                if(equipmentLastState.id === selectedState) {
                    return true;
                }
            }   

            if(equipmentLastState.id === selectedState && equipmentModel.id === selectedModel) {
                return true;
            }

            return false;
        });

        setEquipments(equips);
    }, [selectedState, selectedModel]);

    return (
        <section id="map-section" className='map-section'>
            <header>
                <label htmlFor='inputStates'>Estado:</label>
                <select name="inputStates" id="inputStates" onChange={(e) => setSelectedState(e.target.value)}>
                    <option value={firstInputOption}>{firstInputOption}</option>
                    {
                        Object.entries(getEquipmentStates()).map((e) => {
                            return <option key={e[1].id} value={e[1].id}>{e[0]}</option>;
                        })
                    }
                </select>
                <label htmlFor='inputModels'>Modelo:</label>
                <select name="inputModels" id="inputModels" onChange={(e) => setSelectedModel(e.target.value)}>
                    <option value={firstInputOption}>{firstInputOption}</option>
                    {
                        Object.entries(getEquipmentModels()).map((e) => {
                            return <option key={e[1].id} value={e[1].id}>{e[0]}</option>;
                        })
                    }
                </select>
            </header>

            <MapContainer center={{lat: initialPosition.latitude, lng: initialPosition.longitude}} zoom={zoom} style={{ width: "100%", height: "100%" }}>
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_ACCESS_TOKEN_MAP_BOX}`} />

                {
                    equipments.map((e) => {
                        const equipmentModel = getEquipmentModel(e.equipmentModelId);
                        const equipmentPositionHistory = getEquipmentPositionHistory(e.id);
                        const equipmentLastPosition = getEquipmentLastPosition(equipmentPositionHistory);
                        const equipmentStateHistory = getEquipmentStateHistory(e.id);
                        const equipmentLastState = getEquipmentLastState(equipmentStateHistory);

                        let icon = MapHeavyTruckIcon;
                        if (equipmentModel.id === 'a3540227-2f0e-4362-9517-92f41dabbfdf' /*Caminhão de Carga*/) {
                            icon = MapHeavyTruckIcon;
                        } else if (equipmentModel.id === 'a4b0c114-acd8-4151-9449-7d12ab9bf40f' /*Harvester*/) {
                            icon = MapHarvesterIcon;
                        } else if (equipmentModel.id === '9c3d009e-0d42-4a6e-9036-193e9bca3199' /*Garra traçadora*/) {
                            icon = MapClawIcon;
                        }

                        return (
                            <Marker key={e.id} icon={icon} position={[equipmentLastPosition.latitude, equipmentLastPosition.longitude]}>
                                <Popup closeButton={true} minWidth={140} maxWidth={140} className="map-popup" >
                                    <div>
                                        <h3>{e.name}</h3>
                                        <p> {equipmentModel.name} </p>
                                        <p style={{ color: equipmentLastState.color }}> {equipmentLastState.name} </p>
                                    </div>
                                </Popup >
                            </Marker>
                        )
                    })
                }
            </MapContainer >
        </section>
    );
}

