import L from "leaflet";

import markerRed from "../assets/svg/marker-red.svg";
import markerYellow from "../assets/svg/marker-yellow.svg";
import markerBlue from "../assets/svg/marker-blue.svg";

const iconRed = L.icon({
  iconUrl: markerRed,
  iconRetinaUrl: markerRed,
  iconAnchor: [5, 55],
  popupAnchor: [10, -50],
  iconSize: [35, 50],
});

const iconYellow = L.icon({
  iconUrl: markerYellow,
  iconRetinaUrl: markerYellow,
  iconAnchor: [5, 55],
  popupAnchor: [10, -50],
  iconSize: [35, 50],
});

const iconBlue = L.icon({
  iconUrl: markerBlue,
  iconRetinaUrl: markerBlue,
  iconAnchor: [5, 55],
  popupAnchor: [10, -50],
  iconSize: [35, 50],
});

const chooseIcon = (modelName) => {
  switch (modelName) {
    case "Caminhão de carga":
      return iconRed;
    case "Harvester":
      return iconBlue;
    case "Garra traçadora":
      return iconYellow;
    default:
      break;
  }
};

export default chooseIcon;
