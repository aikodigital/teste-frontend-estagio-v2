import equipmentStateHistoryData from "../data/equipmentStateHistory.json";
import equipmentStateData from "../data/equipmentState.json";
import equipmentData from "../data/equipment.json";
import equipmentModelData from "../data/equipmentModel.json";

export function findStateName(stateId: string | undefined) {
  let stateName = "";
  equipmentStateData.forEach((state) => {
    if (state.id === stateId) {
      stateName = state.name;
    }
  });
  return stateName;
}

export function findEquipmentName(equipmentId: string | undefined) {
  let equipmentName = "";
  equipmentData.find((equipment) =>
    equipment.id === equipmentId ? (equipmentName = equipment.name) : ""
  );
  return equipmentName;
}

export function findEquipmentState(equipmentId: string | undefined) {
  let stateId = "",
    stateName = "";
  equipmentStateHistoryData.forEach((equipment) => {
    if (equipment.equipmentId === equipmentId) {
      let reverseArray = equipment.states.slice().reverse();
      stateId = reverseArray[0].equipmentStateId;
    }
  });
  equipmentStateData.map((state) =>
    state.id === stateId ? (stateName = state.name) : ""
  );
  return stateName;
}

export function findEquipmentModel(equipmentId: string | undefined) {
  let modelId = "",
    modelName = "";
  equipmentData.map((equipment) =>
    equipment.id === equipmentId ? (modelId = equipment.equipmentModelId) : ""
  );
  equipmentModelData.map((model) =>
    model.id === modelId ? (modelName = model.name) : ""
  );
  return modelName;
}

type StatesArray = {
  date: string;
  equipmentStateId: string;
}[];

export function findStateHistory(equipmentId: string | undefined) {
  let statesArray: StatesArray = [];
  equipmentStateHistoryData.forEach((state) => {
    if (state.equipmentId === equipmentId) {
      statesArray = state.states.slice().reverse();
    }
  });
  return statesArray;
}
