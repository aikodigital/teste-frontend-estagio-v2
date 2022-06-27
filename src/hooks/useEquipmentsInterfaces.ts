import { ReactNode } from "react";

import { IConcatenatedEquipmentAndState , IEquipmentStates} from '../interfaces';

export interface EquipmentProviderProps {
  children: ReactNode
}

export interface IEquipmentModalData extends IConcatenatedEquipmentAndState{
  stateHistory: IEquipmentStates[]
}

export interface IEquipmentContextData {
  equipments: IConcatenatedEquipmentAndState[],
  setEquipmentForModalData: (equipment: IConcatenatedEquipmentAndState) => void
  equipmentModalData: IEquipmentModalData;
}