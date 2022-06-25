
import equipmentStateHistories from '../assets/data/equipmentStateHistory.json';
import equipmentStates from '../assets/data/equipmentState.json';
import equipments from '../assets/data/equipment.json';
import equipmentModels from '../assets/data/equipmentModel.json';

export function findEquipmentName(equipmentId) {
    let equipmentName = '';
    equipments.map((equipment) => equipment.id === equipmentId ? equipmentName = equipment.name : '');
    return equipmentName;
}

export function findEquipmentModel(equipmentId) {
    let modelId = '', modelName = '';
    equipments.map((equipment) => equipment.id === equipmentId ? modelId = equipment.equipmentModelId : '');
    equipmentModels.map((model) => model.id === modelId ? modelName = model.name : '');
    return modelName;
}

export function findEquipmentCurState(equipmentId) {
    let stateId = '', stateName = '';
    equipmentStateHistories.forEach(equipment => {
        if (equipment.equipmentId === equipmentId) {
            let reverseArray = equipment.states.slice().reverse();
            stateId = reverseArray[0].equipmentStateId;
        }
    });
    equipmentStates.map(state => state.id === stateId ? stateName = state.name : '');
    return stateName;
}

export function findStateNameById(stateId){
    let stateName = '';
    equipmentStates.forEach(state => {
        if(state.id === stateId){
            stateName = state.name;
        } 
    });
    return stateName;
}

export function findStateColorNameById(stateId){
    let color = '';
    equipmentStates.forEach(state => state.id === stateId ? color = state.color : '');
    switch (color) {
        case '#2ecc71':
            return 'green'
        case '#f1c40f':
            return 'yellow'
        case '#e74c3c':
            return 'red'
        default:
            break;
    }
}

export function findStateHistoryByEquipmentId(equipmentId){
    let arrayStates = [];
    equipmentStateHistories.forEach(state => {
        if(state.equipmentId === equipmentId){
            arrayStates = state.states.slice().reverse();
        }
    });
    return arrayStates;
}