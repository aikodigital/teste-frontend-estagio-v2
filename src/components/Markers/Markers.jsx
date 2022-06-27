import './Markers.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { getEquipmentName, getEquipmentLat, getEquipmentLon, getEquipmentModel, getLastEquipmentState, getEquipmentIcon } from '../../scripts/getData'

const equipment = require('../../data/equipment.json')

const Markers = (props) => {
    
    function checkStateFilter(id) {
        if (getLastEquipmentState(id).id.includes(props.stateFilter)) {
            return true
        } else {
            return false
        }
    }

    function checkModelFilter(item) {
        if (item.equipmentModelId.includes(props.modelFilter)) {
            return true
        } else {
            return false
        }
    }

    function checkSearchFilter(item) {
        const lowerName = item[1].name.toLowerCase()
        const lowerModel = getEquipmentModel(item[0]).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        const lowerState = getLastEquipmentState(item[0]).name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        const lowerSearch = props.search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if(lowerName.includes(lowerSearch) || lowerModel.includes(lowerSearch) || lowerState.includes(lowerSearch)) {
            return true
        } else {
            return false
        }
    }

    return (
        equipment.map((item, index) => {

            const markerIcon = new L.Icon({
                iconUrl: require('../../img/' + getEquipmentIcon(item) + '.png'),
                iconSize: [40, 40],
                className: 'marker'
            })
            
            const markerIconOff = new L.Icon({
                iconUrl: require('../../img/' + getEquipmentIcon(item) + '.png'),
                iconSize: [0, 0],
                className: 'marker'
            })

            function checkFilter(i) {
                if (checkStateFilter(i[0]) && checkModelFilter(i[1]) && checkSearchFilter([i[0], i[1]])) {
                    return markerIcon
                } else {
                    return markerIconOff
                }
            }

            return (
                <Marker
                    position={[getEquipmentLat(index), getEquipmentLon(index)]} 
                    icon={checkFilter([index, item])} 
                    key={index}>
                    <Popup>
                        <div className='pop-up-wrap'>
                            <div><span>ID:</span> {getEquipmentName(index)}</div>
                            <div><span>Modelo:</span> {getEquipmentModel(index)}</div>
                            <div style={{color: getLastEquipmentState([index]).color}}>
                                <span>Estado:</span> {getLastEquipmentState(index).name}
                            </div>
                            <Link className='pop-up-history-btn' to={'/states/' + equipment[index].name}>
                                <span>Histórico de estados</span>
                            </Link>
                            <Link className='pop-up-history-btn' to={'/positions/' + equipment[index].name}>
                                <span>Histórico de posições</span>
                            </Link>
                        </div>
                    </Popup>
                </Marker>
            )
        })
    )
}

export default Markers