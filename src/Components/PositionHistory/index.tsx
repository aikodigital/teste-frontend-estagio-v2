import equipmentPositionHistory from '../assets/data/equipmentPositionHistory.json'
import { Marker, Popup } from 'react-leaflet';
import { EquipmentStateActual, takeModelEquipment, defineIcon, DataConvert, takeHistoryPostion, takeNameEquipment } from '../assets/helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const PositionHistyory = () => {
    const idEquipment = useSelector((state: RootState)=>state.IdSlice.id)
    return (
        <>
        {takeHistoryPostion(idEquipment).map((item, index)=>(
        <Marker key={index}  position={[item.lat, item.lon ]} icon = {defineIcon(takeModelEquipment(idEquipment).name)}>
            <Popup>
                Modelo: {takeModelEquipment(idEquipment).name}<br/>
                Nome: {takeNameEquipment(idEquipment).name}<br/>
                Ordem no historico: {index}<br/>
                Estado Atual:  { EquipmentStateActual(idEquipment) }<br/>
                Data:  {DataConvert(item.date) }<br/>
            </Popup>
        </Marker>
        ))}
        </>
    )
}

export default PositionHistyory;