import Leaflet from 'leaflet';
import cargoTruck from '../assets/img/cargo-truck.png';
import claw from '../assets/img/claw.png';
import harvester from '../assets/img/harvester.png';

export const generateIcon = (icon: any) => {
  return new Leaflet.Icon({
    iconUrl: icon,
    iconSize: [40, 40],
    popupAnchor: [0, -20],
  });
};

export const getIcon = (id: string) => {
  switch (id) {
    case 'a3540227-2f0e-4362-9517-92f41dabbfdf':
      return generateIcon(cargoTruck);
    case 'a4b0c114-acd8-4151-9449-7d12ab9bf40f':
      return generateIcon(harvester);
    case '9c3d009e-0d42-4a6e-9036-193e9bca3199':
      return generateIcon(claw);
    default:
      return generateIcon(harvester);
  }
};
