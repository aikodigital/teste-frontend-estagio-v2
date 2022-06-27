
const equipment = require('../data/equipment.json')
const equipmentModel = require('../data/equipmentModel.json')
const equipmentPositionHistory = require('../data/equipmentPositionHistory.json')
const equipmentState = require('../data/equipmentState.json')
const equipmentStateHistory = require('../data/equipmentStateHistory.json')

export function getEquipmentName(id) {
    return equipment[id].name
}

export function getEquipmentModel(id) {
    let model = ''
    equipmentModel.map((item) => {
        if (equipment[id].equipmentModelId == item.id) {
            model = item.name
        }
    })
    return model
}

export function getEquipmentPositionHistory(id) {
    return equipmentPositionHistory[id]
}

export function getEquipmentLat(id) {
    return equipmentPositionHistory[id].positions[equipmentPositionHistory[id].positions.length - 1].lat
}

export function getEquipmentLon(id) {
    return equipmentPositionHistory[id].positions[equipmentPositionHistory[id].positions.length - 1].lon
}

export function getLastEquipmentState(id) {
    let state = ''
    let lastState = equipmentStateHistory[id].states[equipmentStateHistory[id].states.length - 1]
    equipmentState.map((item) => {
        if(lastState.equipmentStateId == item.id) {
            state = item
        }
    }) 
    return state
}

export function getEquipmentState(id) {
    let state = ''
    equipmentState.map((item) => {
        if (equipmentStateHistory[id[0]].states[id[1]].equipmentStateId == item.id) {
            state = item
        }
    })
    return state
}

export function getEquipmentIcon(item) {
    let iconUrl = ''

    if (item.equipmentModelId == equipmentModel[0].id) {
        iconUrl = 'truck'
    } else if (item.equipmentModelId == equipmentModel[1].id) {
        iconUrl = 'harvester'
    } else {
        iconUrl = 'graple-saw'
    }

    return iconUrl
}