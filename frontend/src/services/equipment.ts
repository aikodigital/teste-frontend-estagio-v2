import equipment from "../../../data/equipment.json";
import equipmentModel from "../../../data/equipmentModel.json";
import equipmentPositionHistory from "../../../data/equipmentPositionHistory.json";
import equipmentState from "../../../data/equipmentState.json";
import equipmentStateHistory from "../../../data/equipmentStateHistory.json";

interface EquipmentData {
  id: string;
  equipmentModelId: string;
  name: string;
}

interface EquipmentModelData {
  id: string;
  name: string;
  hourlyEarnings: EquipmentModelHourlyEarning[];
}

interface EquipmentModelHourlyEarning {
  equipmentStateId: string;
  value: number;
}

interface EquipmentPositionsData {
  equipmentId: string;
  positions: PositionData[];
}

interface PositionData {
  date: string;
  lat: number;
  lon: number;
}

interface EquipmentStateData {
  id: string;
  name: string;
  color: string;
}

interface EquipmentStateHistoryData {
  equipmentId: string;
  states: StateHistoryData[];
}

interface StateHistoryData {
  date: string;
  equipmentStateId: string;
}

export const getEquipments = () => {
  const equipments = JSON.parse(JSON.stringify(equipment)) as EquipmentData[];
  return equipments;
};

export const getEquipmentModel = (modelId: string) => {
  const equipmentsModels = JSON.parse(
    JSON.stringify(equipmentModel)
  ) as EquipmentModelData[];

  return equipmentsModels.find((model) => model.id === modelId);
};

export const getEquipmentPositions = (equipmentId: string) => {
  const equipmentPositions = JSON.parse(
    JSON.stringify(equipmentPositionHistory)
  ) as EquipmentPositionsData[];

  // Get equipment positions history and sort by the most recent
  return equipmentPositions
    .find((position) => position.equipmentId === equipmentId)
    ?.positions.sort(
      (posA, posB) =>
        new Date(posB.date).getTime() - new Date(posA.date).getTime()
    );
};

export const getEquipmentStatesHistory = (equipmentId: string) => {
  const equipmentStatesHistory = JSON.parse(
    JSON.stringify(equipmentStateHistory)
  ) as EquipmentStateHistoryData[];

  const states = JSON.parse(
    JSON.stringify(equipmentState)
  ) as EquipmentStateData[];

  const equipmentStatesByMostRecent = equipmentStatesHistory
    .find((state) => state.equipmentId === equipmentId)
    ?.states.sort(
      (stateA, stateB) =>
        new Date(stateB.date).getTime() - new Date(stateA.date).getTime()
    );

  return equipmentStatesByMostRecent?.map((equipment) => ({
    date: equipment.date,
    state: states.find((state) => state.id === equipment.equipmentStateId)
  }));
};
