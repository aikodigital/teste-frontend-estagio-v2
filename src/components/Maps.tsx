import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import L from 'leaflet';
import { useParams, useNavigate } from 'react-router-dom';
import equipments from '../../data/equipment.json'
import allEquipmentPositionHistory from '../../data/equipmentPositionHistory.json'
import MapMarker from './MapMarker';
import { useState } from 'react';

function MapEventHandler({ nav, eqId, markIsSelected, setMarkIsSelected }: any) {
  const map = useMap();

  useMapEvents({
    popupclose(e: any) {
      let { id } = equipments.filter(eq => eq.name == e.popup.options.children[2])[0];

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
      let { id } = equipments.filter(eq => eq.name == e.popup.options.children[2])[0];

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

function Maps() {
    const { equipmentId } = useParams()
    const navigate = useNavigate();
    const [ markIsSelected, setMarkIsSelected ] = useState(false);
    const bounds = allEquipmentPositionHistory.map(eq => {
      let position = eq.positions[eq.positions.length - 1]
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


        {allEquipmentPositionHistory.map(eq => {
          return <MapMarker key={eq.equipmentId} eq={eq} equipments={equipments}/>
        })}
      </MapContainer>
    )
  }
  
  export default Maps
  