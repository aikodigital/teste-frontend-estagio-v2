import { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchEquipmentStates,
  fetchEquipmentsByLastPosition,
  concatEquipmentAndState,
} from '../services/api';

import { 
  EquipmentProviderProps, 
  IEquipmentModalData, 
  IEquipmentContextData 
} from './useEquipmentsInterfaces';
import { IConcatenatedEquipmentAndState } from '../interfaces';


const EquipmentContext = createContext<IEquipmentContextData>(
  {} as IEquipmentContextData
);

export function EquipmentProvider({ children }: EquipmentProviderProps) {
  const [equipments, setEquipments] = useState<IConcatenatedEquipmentAndState[]>([]);
  const [equipmentModalData, setEquipmentForModal] = 
    useState<IEquipmentModalData>({} as IEquipmentModalData);

  useEffect(() => {
    const equipmentByLastPosition =  fetchEquipmentsByLastPosition()
    setEquipments(concatEquipmentAndState(equipmentByLastPosition))
  }, []);

  function setEquipmentForModalData(equipment: IConcatenatedEquipmentAndState) {
    const stateHistory = fetchEquipmentStates(equipment.equipmentId);

    const data = {
      ...equipment,
      stateHistory
    };

    setEquipmentForModal(data);
  }

  return (
    <EquipmentContext.Provider 
      value={{ equipments, setEquipmentForModalData, equipmentModalData }}
    >
      {children}
    </EquipmentContext.Provider>
  );
}

export function useEquipments() {
  const context = useContext(EquipmentContext);

  return context;
}