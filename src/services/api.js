import equipment from "../data/equipment.json";
import equipmentModel from "../data/equipmentModel.json";
import equipmentPositionHistory from "../data/equipmentPositionHistory.json";
import equipmentState from "../data/equipmentState.json";
import equipmentStateHistory from "../data/equipmentStateHistory.json";

// import { format } from "../utils/FormatDate";

const api = {
  getEquipment: () => {
    return equipment;
  },
  getEquipmentById: (id) => {
    return equipment.filter((equipment) => equipment.id === id)[0];
  },
  getEquipmentModel: () => {
    return equipmentModel;
  },
  getEquipmentModelById: (id) => {
    return equipmentModel.filter((equipment) => equipment.id === id)[0];
  },
  getEquipmentPositionHistory: () => {
    return equipmentPositionHistory;
  },
  getPositionHistoryById: (id) => {
    return equipmentPositionHistory.filter(
      (equipment) => equipment.equipmentId === id
    )[0];
  },
  getLastPositionById: (id) => {
    const positions = api.getPositionHistoryById(id).positions;

    return positions.reduce((positionA, positionB) => {
      const dateA = new Date(positionA.date);
      const dateB = new Date(positionB.date);

      return dateA.valueOf() > dateB.valueOf() ? positionA : positionB;
    });
  },
  getEquipmentState: () => {
    return equipmentState;
  },
  getEquipmentStateId: (id) => {
    return equipmentState.filter((state) => state.id === id)[0];
  },
  getEquipmentStateHistory: () => {
    return equipmentStateHistory;
  },
  getEquipmentStateHistoryById: (id) => {
    return equipmentStateHistory.filter(
      (equipment) => equipment.equipmentId === id
    )[0].states;
  },
  getEquipmentStateById: (id, date) => {
    const states = api.getEquipmentStateHistoryById(id);

    let state = states.filter((state) => {
      const stateDate = new Date(state.date);

      return stateDate >= date;
    });

    return state[0];
  },
  getLastStateByEquipmentId(id) {
    const states = api.getEquipmentStateHistoryById(id);
    return states.reduce((positionA, positionB) => {
      const dateA = new Date(positionA.date);
      const dateB = new Date(positionB.date);

      return dateA.valueOf() > dateB.valueOf() ? positionA : positionB;
    });
  },
  getStateById: (id) => {
    return equipmentState.filter((state) => state.id === id)[0];
  },
  getStopState: () => {
    return equipmentState.filter((state) => state.name === "Parado")[0];
  },
  getOperaningState: () => {
    return equipmentState.filter((state) => state.name === "Operando")[0];
  },
  getMaintanenceState: () => {
    return equipmentState.filter((state) => state.name === "Manutenção")[0];
  },

  getAllEquipments: () => {
    const equipments = api.getEquipment();
    equipments.forEach((equipment) => {
      equipment.model = api.getEquipmentModelById(equipment.equipmentModelId);
      equipment.positions = api.getPositionHistoryById(equipment.id).positions;
      equipment.position = api.getLastPositionById(equipment.id);
      equipment.states = api.getEquipmentStateHistoryById(equipment.id);
      equipment.states.forEach((state) => {
        state.details = api.getStateById(state.equipmentStateId);
      });
    });
    return equipments;
  },
  getStatesOfEquipmentById: (id) => {
    return api.getAllEquipments().filter((equipment) => equipment.id === id)[0];
  },
  getEquipmentStateByIdFilterState: (id, stateId) => {
    const equipments = api.getEquipmentStateById(id);
    return equipments.states.filter((state) => state.id === stateId);
  },
  getEquipmentHistoryById: (id) => {
    const historyItem = equipmentPositionHistory.filter(
      (equipmentPosition) => equipmentPosition.equipmentId === id
    );
    return historyItem;
  },
  getTotalHours: (states, currentState) => {
    let totalHour = 0;

    states.forEach((state, key) => {
      if (state.equipmentStateId === currentState.id) {
        const dateA = new Date(state.date);
        let nextDate = states[key + 1] ?? states[key];
        
        const dateB = new Date(nextDate.date);
        const hour = Math.floor(((dateB - dateA) % 86400000) / 3600000) ?? 0;
        totalHour = totalHour + parseInt(hour);
      }
    });
    return totalHour;
  },
  getTotalHoursOperaning: (id, modelId) => {
    const states = api.getEquipmentStateHistoryById(id);

    const operaning = api.getOperaningState();
    let value = api.getEquipmentModelById(modelId);
    value = value.hourlyEarnings.filter( value => value.equipmentStateId === operaning.id)[0].value;

    const total = api.getTotalHours(states, operaning);
    return [ total, value ];
  },
  getTotalHoursStop: (id, modelId) => {
    const states = api.getEquipmentStateHistoryById(id);

    const stop = api.getStopState();

    let value = api.getEquipmentModelById(modelId);
    value = value.hourlyEarnings.filter( value => value.equipmentStateId === stop.id)[0].value;

    const total = api.getTotalHours(states, stop);
    return [ total, value ];
  },
  getTotalHoursMaintenence: (id, modelId) => {
    const states = api.getEquipmentStateHistoryById(id);

    const maintanence = api.getMaintanenceState();

    let value = api.getEquipmentModelById(modelId);
    value = value.hourlyEarnings.filter( value => value.equipmentStateId === maintanence.id)[0].value;

    const total = api.getTotalHours(states, maintanence);
    return [ total, value ];
  },
};

export const validateState = (position, equipment, state) => {
  let validate = true;

  const newDate = new Date(position.date);
  const currentState = api.getEquipmentStateById(equipment.id, newDate);

  const details = currentState
    ? api.getStateById(currentState.equipmentStateId)
    : null;

  if (!(state === "1")) {
    validate = currentState ? currentState.equipmentStateId === state : false;
  }
  return [validate, details, newDate];
};

export default api;
