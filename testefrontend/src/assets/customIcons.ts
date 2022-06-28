import L from 'leaflet';

import truckImg from './caminhao.png';
import tracerClawImg from './garra.png';
import harvesterImg from './harvester.png';

export const truckIcon = L.icon({
    iconUrl: truckImg,
    iconRetinaUrl: truckImg,
    iconSize: new L.Point(60, 60),
});

export const tracerClawIcon = L.icon({
    iconUrl: tracerClawImg,
    iconRetinaUrl: tracerClawImg,
    iconSize: new L.Point(40, 40),
});

export const harvesterIcon = L.icon({
    iconUrl: harvesterImg,
    iconRetinaUrl: harvesterImg,
    iconSize: new L.Point(50, 50),
});