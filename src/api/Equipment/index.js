import equipments from '../../data/equipment.json'
import equipmentsModel from '../../data/equipmentModel.json'
import equipmentsPositionHistory from '../../data/equipmentPositionHistory.json'
import equipmentsState from '../../data/equipmentState.json'
import equipmentsStateHistory from '../../data/equipmentStateHistory.json'

export function getEquipments() {
    return equipments;
}

export function getEquipmentStates() {
    let states = {};

    equipmentsState.forEach((e) => {
        Object.assign(states, {
            [e.name]: {
                id: e.id,
                color: e.color
            }
        });
    });

    return states;
}

export function getEquipmentModels() {
    let models = {};

    equipmentsModel.forEach((e) => {
        Object.assign(models, {
            [e.name.trim()]: {
                id: e.id,
                equipmentModelId: e.equipmentModelId
            }
        });
    });

    return models;
}

export function getEquipmentModel(modelId) {
    let model = {};
    equipmentsModel.forEach((e) => {
        if(e.id === modelId) {
            model = e;
        }
    });

    return model;
}

export function getEquipmentPositionHistory(equipmentId) {
    let positions = [];
    equipmentsPositionHistory.forEach((e) => {
        if(e.equipmentId === equipmentId) {
            positions = e.positions;
        }
    });

    return positions;
}

export function getEquipmentLastPosition(positionHistory) {
    let aux = positionHistory[0];

    positionHistory.forEach((e) => {
        const date = new Date(e.date),
              auxDate = new Date(aux.date);
        if(date > auxDate) {
            aux = e;
        }
    });

    return { latitude: aux.lat, longitude: aux.lon };
}

export function getEquipmentStateHistory(equipmentId) {
    let states = [];
    equipmentsStateHistory.forEach((e) => {
        if(e.equipmentId === equipmentId) {
            states = e.states;
        }
    });

    return states;
}

export function getEquipmentLastState(stateHistory) {
    let aux = stateHistory[0];

    stateHistory.forEach((e) => {
        const date = new Date(e.date),
              auxDate = new Date(aux.date);
        if(date > auxDate) {
            aux = e;
        }
    });


    let state = {};
    equipmentsState.forEach((e) => {
        if(e.id === aux.equipmentStateId) {
            state = {
                name: e.name,
                color: e.color,
                id: e.id          
            };
        }
    });

    return state;
}

export function getEquipmentStateById(id) {
    let obj = {};
    equipmentsState.map((e) => {
        if(e.id === id) {
            obj = e;
        }
    });

    return obj;
}

export function getEquipmentProductivityPercentage(stateHistory) {
    const equipStates = getEquipmentStates();

    let count = 0,
        workingHours = 0;

    stateHistory.forEach((e) => {
        const date = new Date(e.date);

        if(e.equipmentStateId === equipStates.Operando.id) {
            workingHours += date.getHours();
            count++;
        }
    });

    return (workingHours / (24 * count)  * 100).toFixed(2);
}

export function getEquipmentEarn(stateHistory, equipmentModel) {
    let earn = 0;

    stateHistory.forEach((state) => {
        const date = new Date(state.date);

        equipmentModel.hourlyEarnings.forEach((hourlyE) => {
            if(state.equipmentStateId === hourlyE.equipmentStateId) {
                earn += date.getHours() * hourlyE.value;
            }
        });

    });

    return earn;
}
