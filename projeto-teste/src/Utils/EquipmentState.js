import React from 'react'
import EquipmentStates from '../Assets/data/equipmentState.json';
import EquipmentStatesHistory from '../Assets/data/equipmentStateHistory.json'

const EquipmentState = (props) => {
  const State = EquipmentStatesHistory.map(e => e.states[e.states.length - 1]);
  let stateId = '';
  let stateName = '';
  let i = 0;
  EquipmentStatesHistory.map(e => {
    if(e.equipmentId === props) stateId = State[i].equipmentStateId;
    i++
  });
  EquipmentStates.map(e => {
    if(e.id === stateId) stateName = e.name;
  });
  return stateName
}

export default EquipmentState