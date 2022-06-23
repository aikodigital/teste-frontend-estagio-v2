import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { EquipmentsType } from "../types/equipments";

interface EquipsProviderProps {
  children: ReactNode;
}

interface EquipsContextProps {
  equipments: (EquipmentsType | undefined)[];
  isLoading: boolean;
}

const EquipsContext = createContext({} as EquipsContextProps);

export function EquipsProvider({ children }: EquipsProviderProps) {
  const [equipments, setEquipments] = useState<(EquipmentsType | undefined)[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get<(EquipmentsType | undefined)[]>("/equipments").then((res) => {
      console.log(res.data);
      setEquipments(res.data);
    });
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
