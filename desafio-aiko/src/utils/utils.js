import dataId from "../data/equipment.json";
import model from "../data/equipmentModel.json";
import stateHis from "../data/equipmentStateHistory.json";
import states from "../data/equipmentState.json";
import position from "../data/equipmentPositionHistory.json";

//TABLE METHODS

export const getStateColor = (id) =>
  states.find((stateName) => id === stateName.id).color;

export const getModelName = (id) =>
  model.find((modelName) => id === modelName.id).name;

export const getLastState = (id) =>
  states.find((stateName) => id === stateName.id).name;

export const getEquipName = (id) =>
  dataId.find((equipName) => id === equipName.id).name;
