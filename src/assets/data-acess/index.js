import equipment from '../data/equipment.json'
import equipmentModel from '../data/equipmentModel.json'
import equipmentState from '../data/equipmentState.json'
import equipmentStateHistory from '../data/equipmentStateHistory.json'

export function getEquipmentName(equipmentId) {
  let equipmentName
  equipment.map((equipment) =>
    equipment.id === equipmentId ? (equipmentName = equipment.name) : '',
  )

  return equipmentName
}

export function getEquipmentModel(equipmentId) {
  let modelId
  let modelName

  equipment.map((equipment) =>
    equipment.id === equipmentId ? (modelId = equipment.equipmentModelId) : '',
  )

  equipmentModel.map((model) =>
    model.id === modelId ? (modelName = model.name) : '',
  )

  return modelName
}

export function getEquipmentCurrentState(equipmentId) {
  let stateId
  let stateName

  equipmentStateHistory.forEach((equipment) => {
    if (equipment.equipmentId === equipmentId) {
      const reverseArray = equipment.states.slice().reverse()
      stateId = reverseArray[0].equipmentStateId
    }
  })

  equipmentState.map((state) =>
    state.id === stateId ? (stateName = state.name) : '',
  )

  return stateName
}

export function getStateColorNameById(stateId) {
  let color = ''
  equipmentState.forEach((state) =>
    state.id === stateId ? (color = state.color) : '',
  )

  switch (color) {
    case '#2ecc71':
      return 'green'
    case '#f1c40f':
      return 'yellow'
    case '#e74c3c':
      return 'red'
    default:
      break
  }
}

export function getStateNameById(stateId) {
  let stateName = ''
  equipmentState.forEach((state) => {
    if (state.id === stateId) {
      stateName = state.name
    }
  })
  return stateName
}

export function getStateHistoryByEquipmentId(equipmentId) {
  let arrayStates = []

  equipmentStateHistory.forEach((state) => {
    if (state.equipmentId === equipmentId) {
      arrayStates = state.states.slice().reverse()
    }
  })

  return arrayStates
}
