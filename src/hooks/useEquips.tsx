import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { EquipmentsType, EquipModelType } from "../types/equipments";
import equipmentsJson from "../../data/equipment.json";
import equipmentModels from "../../data/equipmentModel.json";
import equipmentPositionHistory from "../../data/equipmentPositionHistory.json";
import equipmentState from "../../data/equipmentState.json";
import equipmentStateHistory from "../../data/equipmentStateHistory.json";

interface EquipsProviderProps {
  children: ReactNode;
}

interface EquipsContextProps {
  equipments: EquipmentsType[];
  isLoading: boolean;
}

const EquipsContext = createContext({} as EquipsContextProps);

export function EquipsProvider({ children }: EquipsProviderProps) {
  const [equipments, setEquipments] = useState<EquipmentsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function flatEquipmentsData() {
    const items = equipmentsJson.map((equipmentJson) => {
      const model = equipmentModels.find((models) => {
        return models.id === equipmentJson.equipmentModelId;
      });

      const positionHistory = equipmentPositionHistory.find!((history) => {
        return history.equipmentId === equipmentJson.id;
      });

      const rawStateHistory = equipmentStateHistory.find((equipState) => {
        return equipState.equipmentId === equipmentJson.id;
      });

      const stateHistory = rawStateHistory?.states.map((state) => {
        const stateInfo = equipmentState.find((stateData) => {
          return stateData.id === state.equipmentStateId;
        });

        return {
          date: state.date,
          state: stateInfo,
        };
      });

      const allEquipData: EquipmentsType = {
        id: equipmentJson.id,
        name: equipmentJson.name,
        model,
        positionHistory: positionHistory?.positions,
        stateHistory,
      };

      return allEquipData;
    });

    setEquipments(items);
  }

  useEffect(() => {
    flatEquipmentsData();
  }, []);

  useEffect(() => {
    if (equipments[0]) {
      setIsLoading(false);
    }
  }, [equipments]);

  return (
    <EquipsContext.Provider value={{ equipments, isLoading }}>
      {children}
    </EquipsContext.Provider>
  );
}

export function useEquips() {
  const hook = useContext(EquipsContext);

  return hook;
}
