import React from 'react'

import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import { getEquipmentIcon } from '../../scripts/getData'

const equipment = require('../../data/equipment.json')
const equipmentModel = require('../../data/equipmentModel.json')
const equipmentPositionHistory = require('../../data/equipmentPositionHistory.json')

const PositionsMarkers = (props) => {
    return (
        equipmentPositionHistory[props.index].positions.map((item, index) => {
            
            const markerIcon = new L.Icon({
                iconUrl: require('../../img/' + getEquipmentIcon(equipment[props.index]) + '.png'),
                iconSize: [40, 40],
                className: 'marker'
            })

            return (
                <Marker position={[item.lat, item.lon]}
                        icon={markerIcon}
                        key={index}>
                    <Popup>
                        <div className="pop-up-wrap">
                            <div><span>Data:</span> {new Date(item.date).toLocaleDateString()}</div>
                            <div><span>Horário:</span> {new Date(item.date).toLocaleTimeString()}</div>
                        </div>
                    </Popup>
                </Marker>
            )
        })
    )
}

export default PositionsMarkers