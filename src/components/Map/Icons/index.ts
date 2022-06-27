import { icon } from "leaflet";

import parado from '../../../assets/parado.png'
import manutencao from '../../../assets/manutencao.png'
import operacao from '../../../assets/operacao.png'

const paradoIcon = icon({
  iconUrl: parado,
  iconSize: [50, 50],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'my-icon-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

const manutencaoIcon = icon({
  iconUrl: manutencao,
  iconSize: [50, 50],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

const operandoIcon = icon({
  iconUrl: operacao,
  iconSize: [50, 50],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

export function getIcon(name: string) {
  if(name === 'Manutenção') {
    return manutencaoIcon;
  }
  if(name === 'Parado') {
    return paradoIcon;
  }
  if(name === 'Operando') {
    return operandoIcon;
  }
}