import equipmentPositionHistory from '../assets/data/equipmentPositionHistory.json'
import { Marker, Popup } from 'react-leaflet';
import { EquipmentStateActual, takeModelEquipment, defineIcon, DataConvert, takeHistoryPostion } from '../assets/helpers';


const PositionHistyory = () => {

    return (
        <>
        {takeHistoryPostion("a7c53eb1-4f5e-4eba-9764-ad205d0891f9").map((item, index)=>(
        <Marker key={index}  position={[item.lat, item.lon ]} icon = {defineIcon(takeModelEquipment("a7c53eb1-4f5e-4eba-9764-ad205d0891f9").name)}>
            <Popup>
                Nome: {takeModelEquipment("a7c53eb1-4f5e-4eba-9764-ad205d0891f9").name}<br/>
                Ordem no historico: {index}<br/>
                Estado Atual:  { EquipmentStateActual("a7c53eb1-4f5e-4eba-9764-ad205d0891f9") }<br/>
                Data:  {DataConvert(item.date) }<br/>
            </Popup>
        </Marker>
        ))}
        </>
    )
}

export default PositionHistyory;