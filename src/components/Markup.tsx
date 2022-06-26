import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import useGetStateById from "../hooks/getStateById";
import useGetModel from "../hooks/getModel";
import formatStringDate from "../utils/formatStringDate";
import useGetStatusClassById from "../hooks/getStatusClassById";
import L from "leaflet";

import caminhaoDeCarga from '../img/caminhao-de-carga.png';
import harvester from '../img/harvester.png';
import garraTraçadora from '../img/garra-traçadora.png';

function Markup({ id, position, name, lastUpdate }: any) {
  const [equipmentStateHistory] = useState(
    require("../data/equipmentStateHistory.json")
  );
  const [equipmentState] = useState(
    require("../data/equipmentState.json")
  );
  const [equipmentModel] = useState(
    require("../data/equipmentModel.json")
  );
  const [equipment] = useState(require("../data/equipment.json"));

  const modelName = useGetModel(id, equipment, equipmentModel).map((e:any) => e.name).join('')
  function getModelIcon(modelName:any) {
    if(modelName === "Caminhão de carga") {
      return [{ width: 60, heigth: 60, path: caminhaoDeCarga }]
    } else if (modelName === "Harvester") {
      return [{ width: 60, heigth: 60, path: harvester }]
    } else if (modelName === "Garra traçadora") {
      return [{ width: 60, heigth: 40, path: garraTraçadora }]
    } else {
      return [{ width: 80, heigth: 50, path: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png"}]
    }
  }

const defaultIcon = L.icon({
  iconUrl: `${getModelIcon(modelName).map((e:any) => e.path)}`,
  iconSize: [Number(getModelIcon(modelName).map((e:any) => e.width)), Number(getModelIcon(modelName).map((e:any) => e.heigth))],
  iconAnchor: [18, 18],
  popupAnchor: [0, -10],
  shadowSize: [0, 0],
  shadowAnchor: [10, 10]
});

  return (
    <Marker position={position} icon={defaultIcon}>
      <Popup>
        <div>
          <h4>{`Nome: ${name}`}</h4>
          <p style={{margin: '0', marginBottom: '10px'}}>
            {`Modelo: ${useGetModel(id, equipment, equipmentModel).map((e:any) => e.name)}`}
          </p>
          <p style={{margin: '0', marginBottom: '10px'}}>
            <span className={`circle-dot ${useGetStatusClassById(id, equipmentStateHistory, equipmentState)}`}></span>
            {useGetStateById(id, equipmentStateHistory, equipmentState).map(
              (e: any) => e.state.map((e:any) => e.name)
            )}
          </p>
          <p style={{margin: '0', marginBottom: '10px'}}>
            {`Ultima atualização: ${formatStringDate(lastUpdate)}`}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

export default Markup;
