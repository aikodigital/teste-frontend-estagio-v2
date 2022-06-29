
import {useState} from 'react';
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import * as S from './styled';
import dataExtract from '../../dataExtract';
import equipmentPositionHistory from '../../assets/data/equipmentPositionHistory.json';
import EquipmentStates from '../EquipmentStates'

function Map () {				

  const [equipment, setEquipment] = useState([]) 

  function equipments(name, id){
     setEquipment([name, id])
  }

  function returnObject (equipmentId) {

    let img

  
    switch(equipmentId) {
        case 'Caminhão de carga':
          img = 'caminhaodecarga.png'
          break
        case 'Harvester':
          img = 'harvester.png'
          break
        case 'Garra traçadora':
          img = 'garratracadora.png'
          break
       default:
          break
    }


    const customMarker = new L.Icon({
        iconUrl: require(`../../assets/img/${img}`),
        iconRetinaUrl: require(`../../assets/img/${img}`),
        shadowUrl: null,
        iconSize: [40, 35]
    }); 

    return customMarker
  }

 

	return (
		<S.WrapperMap>
			
      

      <MapContainer center={[-19.151801, -46.007759]} zoom={11} scrollWheelZoom={true}>
          <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {equipmentPositionHistory.map((history) => (
              <Marker eventHandlers={{
                click: () => {
        
                 equipments(dataExtract().handleEquipmentName(history.equipmentId), history.equipmentId)
                   
                  }
                }}
                 key={history.equipmentId}   
              position={[history.positions[history.positions.length-1].lat, history.positions[history.positions.length-1].lon]}
              icon={returnObject(dataExtract().handleEquipmentModel(history.equipmentId))}>
                <Tooltip  position={[history.positions[history.positions.length-1].lat, history.positions[history.positions.length-1].lon]}>
            
                  <div>
                    <h2>Nome: {dataExtract().handleEquipmentName(history.equipmentId)}</h2>  
                    <p> Modelo: {dataExtract().handleEquipmentModel(history.equipmentId)}</p>
                    <p> Estado: {dataExtract().handleEquipmentStateHistory(history.equipmentId)}</p>
                    <p> Clique no ícone para mais informações </p>
                  </div>  
                </Tooltip>

              </Marker>

            
            
          ))}


      </MapContainer>

       {equipment.length > 0 && <EquipmentStates name={equipment[0]} id={equipment[1]}/>}

      
      
		</S.WrapperMap>
	);
}

export default Map;
