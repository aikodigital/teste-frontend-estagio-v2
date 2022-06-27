import equipment from '../data/equipment.json';
import equipmentModel from '../data/equipmentModel.json';
// import equipmentPositionHistory from '../data/equipmentPositionHistory.json';
import equipmentState from '../data/equipmentState.json';
import equipmentStateHistory from '../data/equipmentStateHistory.json';

import { parseISO } from 'date-fns';

export function getEquipmentNameById(equipmentId) {
  let equipmentName;

  equipment.forEach((equipment) => {
    if (equipment.id === equipmentId) equipmentName = equipment.name;
  });

  return equipmentName;
}

export function getEquipmentModelNameById(equipmentId) {
  let equipmentModelId, equipmentModelName;

  equipment.forEach((equipment) =>
    equipment.id === equipmentId
      ? (equipmentModelId = equipment.equipmentModelId)
      : ''
  );

  equipmentModel.forEach((equipment) => {
    if (equipment.id === equipmentModelId) equipmentModelName = equipment.name;
  });

  return equipmentModelName;
}

export function getEquipmentCurrentStateById(equipmentId) {
  const orderedEquipmentStateHistoryByDate = equipmentStateHistory.map(
    (stateHistory) => {
      return {
        ...stateHistory,
        states: stateHistory.states.sort(function (a, b) {
          return parseISO(b.date) - parseISO(a.date);
        }),
      };
    }
  );

  let equipmentStateId;
  let equipmentStateName;

  orderedEquipmentStateHistoryByDate.forEach((equipStateHistory) => {
    if (equipStateHistory.equipmentId === equipmentId) {
      equipmentStateId = equipStateHistory.states[0].equipmentStateId;
    }
  });

  equipmentState.forEach((equipState) =>
    equipState.id === equipmentStateId
      ? (equipmentStateName = equipState.name)
      : ''
  );

  return equipmentStateName;
}

export function getEquipmentStateHistoryById(equipmentId) {
  const equipStateHistory = equipmentStateHistory.filter(
    (equipment) => equipment.equipmentId === equipmentId
  );

  return equipStateHistory;
}

export function getEquipmentStateNameById(equipmentStateId) {
  let stateName = '';

  equipmentState.forEach((equipState) =>
    equipState.id === equipmentStateId ? (stateName = equipState.name) : ''
  );

  return stateName;
}
