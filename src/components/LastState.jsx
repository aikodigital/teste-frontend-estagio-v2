import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import styles from './LastState.module.css'
import equipment from '../data/equipment.json'
import stateHistory from '../data/equipmentStateHistory.json'
import states from '../data/equipmentState.json'
import Infos from './Infos'


function LastState(props) {
    return (
        <Popup>
            {
                stateHistory.map( value => {
                    var lastState = value.states.length - 1;
                        if(value.equipmentId === props.equipmentId){
                            var index = states.findIndex(state => state.id === value.states.at(lastState).equipmentStateId);
                            return (
                                <div  className={styles.pop}  key={value.equipmentId}>
                                    <p>Status: <span>{states.at(index).name}</span></p>
                                    <button onClick={() => props.click(value.equipmentId, 1)} >ver mais</button>
                                </div>
                            )
                        }
                })
             }
        </Popup>
    );
}

export default LastState;