import { icon } from "leaflet";

import caminhao from '../../../assets/caminhao.svg'
import harvester from '../../../assets/harvester.svg'
import tracerclaw from '../../../assets/tracerclaw.svg'

const caminhaoIcon = icon({
  iconUrl: caminhao,
  iconSize: [50, 50],
  iconAnchor: [22, 94],
  popupAnchor: [0, -76],
});

const harvesterIcon = icon({
  iconUrl: harvester,
  iconSize: [50, 50],
  iconAnchor: [22, 94],
  popupAnchor: [0, -76]
});

const tracerclawIcon = icon({
  iconUrl: tracerclaw,
  iconSize: [50, 50],
  iconAnchor: [22, 94],
  popupAnchor: [0, -76]
});

export function getIcon(name: string) {
  if(name === 'Caminhão de carga') {
    return caminhaoIcon;
  }
  if(name === 'Harvester') {
    return harvesterIcon;
  }
  if(name === 'Garra traçadora') {
    return tracerclawIcon;
  }
}