import EquipmentStates from '../Assets/data/equipmentState.json';
import EquipmentStatesHistory from '../Assets/data/equipmentStateHistory.json'

const StatesHistory = (props) => {
  let equipmentId = EquipmentStatesHistory.find((e) => e.equipmentId === props);
  let state = '';
  let stateName = [];

  const stateId = (id) => {
    return EquipmentStates.find((e) => e.id === id)
  }

  if(equipmentId) {
    equipmentId.states.map((e) => {
      state = stateId(e.equipmentStateId);
      stateName.push({state});
  })};
  
  return stateName
}

export default StatesHistory