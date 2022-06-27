import './Map.css'
import React, { useState } from 'react'

import Markers from '../Markers/Markers'
import Filter from '../Filter/Filter'

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from 'react-leaflet'

const center = [-19.126536, -45.997756]

const Map = () => {

    const [stateFilter, setStateFilter] = useState('')
    const [modelFilter, setModelFilter] = useState('')
    const [search, setSearch] = useState('')

    function stateFilterFunc(e) {
        setStateFilter(e)
    }

    function modelFilterFunc(e) {
        setModelFilter(e)
    }

    return (
        <div className='map-conteiner'>
            <div className="map-wrap">
                <MapContainer center={center} zoom={10} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Markers stateFilter={stateFilter} modelFilter={modelFilter} search={search} />
                </MapContainer>
                <p>&#8252; Clique nos marcadores para visualizar as informações.</p>
            </div>
            <Filter stateFilter={stateFilterFunc} 
                    modelFilter={modelFilterFunc} 
                    setSearch={setSearch} 
                    search={search} />
        </div>
    )
}

export default Map