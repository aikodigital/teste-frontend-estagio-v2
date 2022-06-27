import './PositionsHistory.css'
import React from 'react'

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from 'react-leaflet'
import PositionsMarkers from '../PositionsMarkers/PositionsMarkers'

const equipment = require('../../data/equipment.json')
const equipmentPositionHistory = require('../../data/equipmentPositionHistory.json')

const PositionsHistory = (props) => {

    let lat = 0
    function latAvarage() {
        equipmentPositionHistory[props.index].positions.map((item, index) => {
            lat = lat + equipmentPositionHistory[props.index].positions[index].lat
        })
        lat = lat / equipmentPositionHistory[props.index].positions.length
    }
    latAvarage()

    let lon = 0
    function lonAvarage() {
        equipmentPositionHistory[props.index].positions.map((item, index) => {
            lon = lon + equipmentPositionHistory[props.index].positions[index].lon
        })
        lon = lon / equipmentPositionHistory[props.index].positions.length
    }
    lonAvarage()

    const center = [lat, lon]

    return (
        <div className='positions-history'>
            <h1>Histórico das posições do: <span>{equipment[props.index].name}</span></h1>
            <MapContainer center={center} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PositionsMarkers index={props.index} />
            </MapContainer>
            <p>&#8252; Clique nos marcadores para visualizar as informações.</p>
        </div>
    )
}

export default PositionsHistory