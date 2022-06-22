import './style.css';
import { findStateNameById, findStateColorById, findStateHistoryById } from '../../accessData/usingData.js';

function EquipmentCards(props) {
    let states = findStateHistoryById(props.equipmentId)

    return (
        states.map((states, i) => (
            <div key={i} className="col-sm-12 col-md-5 col-lg-4 card" data-bar-color= 
            {findStateColorById(states.equipmentStateId)}>
                Data: {new Date(states.date).toLocaleDateString()+" "+new Date(states.date).toLocaleTimeString()}
                <br/>
                Status: {findStateNameById(states.equipmentStateId)}
            </div>
        ))
    )
}

export default EquipmentCards;