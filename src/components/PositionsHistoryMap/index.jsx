import './styles.scss'
import 'leaflet/dist/leaflet.css'

import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import { MapPointerIcon, MapDotCircleIcon } from '../MapLeaflet';
import { useState } from 'react';

export function PositionsHistoryMap({ equipmentPositionHistory, equipmentLastPosition }) {
    const [startDate, setStartDate] = useState(new Date('2020-01-01T00:00'));
    const [endDate, setEndDate] = useState(new Date('2023-12-30T00:00'));
    const [isShowLines, setIsShowLines] = useState(false);

    function handleStartDate(e) {
        setStartDate(new Date(`${e.target.value}T00:00`));
    }

    function handleEndDate(e) {
        setEndDate(new Date(`${e.target.value}T00:00`));
    }

    function handleIsShowLines() {
        setIsShowLines(!isShowLines);
    }

    return (
        <div className="position-history-container">
            <header>
                <label htmlFor="startDate">De:</label>
                <input type="date" id="startDate" name="startDate" onChange={handleStartDate}/>
                <label htmlFor="endDate">Até:</label>
                <input type="date" id="endDate" name="endDate" onChange={handleEndDate}/>
                <input type="checkbox" id="showLines" name="showLines" onChange={handleIsShowLines}/>
                <label htmlFor="showLines">Mostrar Linhas</label>
            </header>

            <MapContainer center={{lat: equipmentLastPosition.latitude, lng: equipmentLastPosition.longitude}} zoom={13} style={{ width: "100%", height: "100%" }}>
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_ACCESS_TOKEN_MAP_BOX}`} />
                {
                    equipmentPositionHistory.map((e, i, arr) => {
                        let lastElement = false, skipElement = true;
                        let lastElementPosition = [arr[i].lat, arr[i].lon];
                        if (arr.length - 1 === i) {
                            lastElement = true;
                        }

                        const date = new Date(e.date);
                        if(date >= startDate && date <= endDate) {
                            skipElement = false;
                        }

                        if(i > 0){
                            lastElementPosition = [arr[i-1].lat, arr[i-1].lon];
                        }

                        return (
                            <>
                                {skipElement === false && (
                                    <>
                                        <Marker key={Math.random()} icon={(lastElement) ? MapPointerIcon : MapDotCircleIcon} position={[e.lat, e.lon]}>
                                            <Popup closeButton={true} minWidth={140} maxWidth={140} className="map-popup" >
                                                <div>
                                                    <p>{new Date(e.date).toDateString()}</p>
                                                </div>
                                            </Popup >
                                        </Marker>
                                        {isShowLines && (
                                            <Polyline positions={[[lastElementPosition[0], lastElementPosition[1]], [e.lat, e.lon]]} color="rgba(0,0,0,0.2)" />
                                        )}
                                    </>
                                )}
                            </>            
                        )
                    })
                }
            </MapContainer >
        </div>
    );
}