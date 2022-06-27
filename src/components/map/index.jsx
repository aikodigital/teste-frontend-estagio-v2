import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, TileLayer} from 'react-leaflet';
import Markers from './../markers/index';
import styles from './map.module.css'
import equipmentArr from '../../data/dataTratement';

const Map = (nameSearch) => {
  const [position, setPosition] = useState([-19.126536,-45.947756])

  useEffect(() => {
    for(let i = 0; i < equipmentArr.length; i++){
      if (equipmentArr[i].name === nameSearch.nameSearch) {
        setPosition([equipmentArr[i].atualPosition[1],equipmentArr[i].atualPosition[2]])
      }
    }
  },[nameSearch])

  return (
    <div id='map'>
        <MapContainer key={position} className={styles.mapHeight} center={position} zoom={10} scrollWheelZoom={true}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <button></button>
            <Markers/>
            {nameSearch.nameSearch !== '' &&(
              <Circle center={position} radius={3000}></Circle>
            )}
        </MapContainer>
    </div>
  )
}

export default Map;