import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import L from 'leaflet';
import { useParams, useNavigate } from 'react-router-dom';
import equipments from '../../data/equipment.json'
import allEquipmentPositionHistory from '../../data/equipmentPositionHistory.json'
import allEquipmentStateHistory from '../../data/equipmentStateHistory.json'
import MapMarker from './MapMarker';
import { useState } from 'react';

function filterByModelAndState(filtersModel: string[], filtersState: string[]) {
  let newEquipments: typeof allEquipmentPositionHistory = [];

  for(const model of filtersModel) {
    for(const state of filtersState) {
      newEquipments = newEquipments.concat(allEquipmentPositionHistory.filter(position => {
        const eq = equipments.filter(eq => eq.id == position.equipmentId)[0]
        const equipmentStates = allEquipmentStateHistory.filter(state => state.equipmentId == eq.id)[0].states;
        const lastEquipmentState = equipmentStates[equipmentStates.length - 1];

        return lastEquipmentState.equipmentStateId == state && eq.equipmentModelId == model ? true : false;
      }))
    }
  }

  return newEquipments.filter((val, pos, arr) => arr.indexOf(val) == pos);
}

function filterByModel(filtersModel: string[]) {
  let newEquipments: typeof allEquipmentPositionHistory = [];

  for(const model of filtersModel) {
    newEquipments = newEquipments.concat(allEquipmentPositionHistory.filter(position => {
      const eq = equipments.filter(eq => eq.id == position.equipmentId)[0]
      return eq.equipmentModelId == model ? true : false;
    }))
  }

  return newEquipments.filter((val, pos, arr) => arr.indexOf(val) == pos);
}

function filterByState(filtersState: string[]) {
  let newEquipments: typeof allEquipmentPositionHistory = [];

  for(const state of filtersState) {
    newEquipments = newEquipments.concat(allEquipmentPositionHistory.filter(position => {
      const eq = equipments.filter(eq => eq.id == position.equipmentId)[0]
      const equipmentStates = allEquipmentStateHistory.filter(state => state.equipmentId == eq.id)[0].states;
      const lastEquipmentState = equipmentStates[equipmentStates.length - 1];

      return lastEquipmentState.equipmentStateId == state ? true : false;
    }))
  }

  return newEquipments.filter((val, pos, arr) => arr.indexOf(val) == pos);
}

function filteredEquipments(filterConfigs: any) {
  const filtersModel = filterConfigs.model && Object.keys(filterConfigs.model).filter((key: string) => filterConfigs.model[key] == true).length > 0 ? Object.keys(filterConfigs.model).filter((key: string) => filterConfigs.model[key] == true) : undefined;
  const filtersState = filterConfigs.state && Object.keys(filterConfigs.state).filter((key: string) => filterConfigs.state[key] == true).length > 0 ? Object.keys(filterConfigs.state).filter((key: string) => filterConfigs.state[key] == true) : undefined;
  
  if(filtersModel && filtersState) return filterByModelAndState(filtersModel, filtersState);
  if(filtersModel) return filterByModel(filtersModel);
  if(filtersState) return filterByState(filtersState);

  return allEquipmentPositionHistory;
}

function MapEventHandler({ nav, eqId, markIsSelected, setMarkIsSelected }: any) {
  const map = useMap();

  useMapEvents({
    popupclose(e: any) {
      const { id } = equipments.filter(eq => eq.name == e.popup.options.children[2])[0];

      if(markIsSelected) {
        setMarkIsSelected(false);
        setTimeout(() => {
          map.invalidateSize({pan: false})
        }, 100);
      }

      if(eqId && eqId != id) return;
      nav(`/`, { replace: true });
    },

    popupopen(e: any) {
      const { id } = equipments.filter(eq => eq.name == e.popup.options.children[2])[0];

      if(!markIsSelected) {
        setMarkIsSelected(true);
        setTimeout(() => {
          map.invalidateSize({pan: false})
          map.panInside([e.popup._latlng.lat, e.popup._latlng.lng], { padding: [130, 130] })
        }, 100);
      }

      if(eqId == id) return;
      nav(`/${id}`, { replace: true });
    },
  })

  return null
}

function Maps({ filterConfigs, setFilterConfigs }: any) {
    const { equipmentId } = useParams()
    const navigate = useNavigate();
    const [ markIsSelected, setMarkIsSelected ] = useState(false);
    const bounds = allEquipmentPositionHistory.map(eq => {
      const position = eq.positions[eq.positions.length - 1]
      return [position.lat, position.lon];
    });

    return (
      <MapContainer className="flex-1" bounds={bounds as L.LatLngBoundsExpression} >
        <TileLayer
          /* Google Maps
          url="https://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          */
          //attribution={markIsSelected ? 'Selecionado' : 'Nada selecionado'}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapEventHandler nav={navigate} eqId={equipmentId} markIsSelected={markIsSelected} setMarkIsSelected={setMarkIsSelected} />


        {filteredEquipments(filterConfigs).map((eq) => {
          return <MapMarker key={eq.equipmentId} eq={eq} equipments={equipments}/>
        })}
      </MapContainer>
    )
  }
  
  export default Maps
  