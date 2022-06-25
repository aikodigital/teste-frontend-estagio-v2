import React from 'react';
import './style.css';
import Map from '../../components/Map';

function MapView(){
    return(
        <div className='container' id='map-container'>
            <h2>Posição atual dos equipamentos:</h2>
            <Map/>
        </div>
    );
}

export default MapView;