import equipmentPositionHistory from '../assets/data/equipmentPositionHistory.json'
import { Marker, Popup } from 'react-leaflet';
import { lastPosition, EquipmentStateActual, takeModelEquipment, defineIcon, takeNameEquipment } from '../assets/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { TypeFilter } from '../@types';
import { setId } from '../store/equipmentId';
import { Fragment } from 'react';

const PositionEquipment = () => {

    const dispatch = useDispatch()
    let filters: TypeFilter = useSelector((state: RootState)=>state.filterSlice.filter)
    return (
        <Fragment>
        {equipmentPositionHistory.map((item, index)=>(
            (filters.nome==takeModelEquipment(item.equipmentId).name || filters.nome == 'todos') &&
            (filters.situation==EquipmentStateActual(item.equipmentId)  || filters.situation == 'todos')
            ?
                (   
                
                    <Marker 
                        key={index}  
                        position={[lastPosition(item.positions).lat , lastPosition(item.positions).lon ]} 
                        icon = {defineIcon(takeModelEquipment(item.equipmentId).name)}
                        eventHandlers = {{
                            click : (e) => dispatch(setId(item.equipmentId))
                        }}
                    >

                        <Popup>
                            Nome: {takeNameEquipment(item.equipmentId).name}<br/>
                            Modelo: {takeModelEquipment(item.equipmentId).name}<br/>
                            Estado Atual:  { EquipmentStateActual(item.equipmentId) }<br/>
                        </Popup>

                    </Marker>

                ) : ''
        ))}
        </Fragment>
    )
}

export default PositionEquipment;