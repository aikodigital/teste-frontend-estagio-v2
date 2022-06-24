import equipmentPositionHistory from '../assets/data/equipmentPositionHistory.json'
import { Marker, Popup } from 'react-leaflet';
import { lastPosition, EquipmentStateActual, takeModelEquipment, defineIcon } from '../assets/helpers';

const PositionEquipment = () => {
    let a = 'Harvester'
    let todos = true
    return (
        <>
        {equipmentPositionHistory.map((item, index)=>(
            a==takeModelEquipment(item.equipmentId).name|| todos ?
                (
                    <Marker 
                        key={index}  
                        position={[lastPosition(item.positions).lat , lastPosition(item.positions).lon ]} 
                        icon = {defineIcon(takeModelEquipment(item.equipmentId).name)}
                    >

                        <Popup>
                            Nome: {takeModelEquipment(item.equipmentId).name}, id: {index} <br/>
                            Estado Atual:  { EquipmentStateActual(item.equipmentId) }<br/>
                        </Popup>

                    </Marker>
                ) : ''
        ))}
        </>
    )
}

export default PositionEquipment;