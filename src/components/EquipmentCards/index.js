import React from 'react';
import './style.css';
import { findStateNameById, findStateColorNameById, findStateHistoryByEquipmentId } from '../../data-access/data-functions.js';

function EquipmentCards(props) {

    let states = findStateHistoryByEquipmentId(props.equipmentId);

    return (
        states.map((states, i) => (
            <div key={i} className="col-sm-12 col-md-5 col-lg-4 card" data-bar-color={findStateColorNameById(states.equipmentStateId)}>
                Data: {new Date(states.date).toLocaleDateString()+" "+new Date(states.date).toLocaleTimeString()}
                <br/>
                Status: {findStateNameById(states.equipmentStateId)}
            </div>
        ))
    )
}

export default EquipmentCards;