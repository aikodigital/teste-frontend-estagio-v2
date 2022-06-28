import dataId from "../data/equipment.json";
import model from "../data/equipmentModel.json";
import stateHis from "../data/equipmentStateHistory.json";
import states from "../data/equipmentState.json";
import position from "../data/equipmentPositionHistory.json";

export const data = Object.assign(
  {},
  { dataId, states, position, model, stateHis }
);
