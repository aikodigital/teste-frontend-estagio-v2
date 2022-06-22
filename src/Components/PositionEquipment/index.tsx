import equipmentPositionHistory from '../assets/data/equipmentPositionHistory.json'
import L from 'leaflet'
{/* @ts-ignore */}
import iconTractor from '../assets/img/iconTractor.png'
import { Marker, Popup } from 'react-leaflet';
import { lastPosition, takeEquipmentStateHistory, takeModelEquipment } from '../assets/helpers';


const PositionEquipment = () => {

    const apoint = new L.Icon({
        iconUrl: iconTractor,
        iconRetinaUrl: iconTractor,
        iconSize: [40, 50]
    })

    return (
        equipmentPositionHistory.map((item, index)=>(
        <Marker key={index}  position={[lastPosition(item.positions).lat , lastPosition(item.positions).lon ]} icon = {apoint}>
            <Popup>
                Nome:  { takeModelEquipment(item.equipmentId) }, id: {index} <br/>
                Estado Atual:  { takeEquipmentStateHistory(item.equipmentId) }
            </Popup>
        </Marker>
        ))

    )
}

export default PositionEquipment;