import data from "./data";
import { 
  IEquipmentCurrentState,
  IEquipmentByLastPosition,
  IEquipmentStates,
  IConcatenatedEquipmentAndState,
  IEquipmentModel
} from '../interfaces';


export const fetchEquipmentsByLastPosition = (): IEquipmentByLastPosition[] => {
  const allEquipmentsByLastPosition = 
  data
    .equipmentPositionHistory
    .map(item => { 
        const equipmentId = item.equipmentId;

        const equipmentName = 
          data.equipment
          .find(equipm => equipm.id === item.equipmentId)?.name || '';

        const equipmentModelId = 
          data.equipment
          .find(equipm => equipm.id === item.equipmentId)
          ?.equipmentModelId || null;

        const equipmentModel = 
          data.equipmentModel
            .find(model => equipmentModelId === model.id) 
            || {} as IEquipmentModel

        const position = {
          ...item.positions[item.positions.length - 1],
          date: new Date(item.positions[item.positions.length - 1].date).toLocaleString()
        };

        return {
          position,
          equipmentModel,
          equipmentName,
          equipmentId
        }
      });

  return allEquipmentsByLastPosition;
}

const fetchState = 
  (stateId: string): IEquipmentCurrentState => {
    const state = 
    data.equipmentState.find(item => item.id === stateId)
    
    if(!state) return {} as IEquipmentCurrentState
    
    return state;
}

export const fetchEquipmentStates = 
  (equipmentId: string): IEquipmentStates[] => {
    const equipmentStateHistory = 
      data.equipmentStateHistory.find(item => item.equipmentId === equipmentId);

    if(!equipmentStateHistory) {
      return [] as IEquipmentStates[];
    }

    const equipmentStatesConcatenated = 
      equipmentStateHistory.states.map(item => {
        const state = fetchState(item.equipmentStateId);

        return {
          date: new Date(item.date).toLocaleString('pt-BR'),
          state,
        }
      }).reverse()

    return equipmentStatesConcatenated;
}

export const fetchLastEquipmentState = 
  (equipmentId: string): IEquipmentCurrentState => {
    const equipmentStateHistory = 
      data.equipmentStateHistory.find(item => item.equipmentId === equipmentId);

    if(!equipmentStateHistory) {
      return {} as IEquipmentCurrentState;
    }

    const lastStateId = 
      equipmentStateHistory
        .states[equipmentStateHistory.states.length - 1].equipmentStateId;
    
    const equipmentLastState = fetchState(lastStateId);

    return equipmentLastState;
}

export const concatEquipmentAndState = 
  (equipmentsByLastPosition: IEquipmentByLastPosition[]): IConcatenatedEquipmentAndState[] => {
    const concatenatedArr = equipmentsByLastPosition.map(item => {
    const state = fetchLastEquipmentState(item.equipmentId)

    return {
      ...item,
      state
    }
  })

  return concatenatedArr;
}