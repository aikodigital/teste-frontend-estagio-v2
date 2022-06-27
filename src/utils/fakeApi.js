const equipments = require('../data/equipment.json')
const equipmentsModel = require('../data/equipmentModel.json')
const equipmentsState = require('../data/equipmentState.json')
const equipmentsStateHistory = require('../data/equipmentStateHistory.json')
const equipmentsPositionHistory = require('../data/equipmentPositionHistory.json')


export async function getEquipments() {
    return equipments
}

export async function getModels() {
    return equipmentsModel
}

export async function getStates() {
    return equipmentsState
}

export async function getEquipmentsStateHistory() {
    return equipmentsStateHistory
}

export async function getEquipmentsPositionHistory() {
    return equipmentsPositionHistory
}

export async function getEquipmentDataById(id) {
    const equipmentData = getEquipments().then(data => data.find(equipment => equipment.id === id))
    return equipmentData
}