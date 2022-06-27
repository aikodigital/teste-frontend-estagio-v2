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
  displayedEquipments: (EquipmentsType | undefined)[];
  isLoading: boolean;
  handleSearchEquipments(category: string, search: string): void;
}

const EquipsContext = createContext({} as EquipsContextProps);

export function EquipsProvider({ children }: EquipsProviderProps) {
  const [equipments, setEquipments] = useState<(EquipmentsType | undefined)[]>(
    []
  );
  const [displayedEquipments, setDisplayedEquipments] = useState<
    (EquipmentsType | undefined)[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleSearchEquipments(category: string, search: string) {
    if (search !== "") {
      let filteredEquipmentsList: (EquipmentsType | undefined)[] = [];
      if (category === "model") {
        filteredEquipmentsList = equipments.filter((equipment) => {
          return equipment?.model.name
            .toLowerCase()
            .includes(search.toLowerCase());
        });
      }
      if (category === "state") {
        filteredEquipmentsList = equipments.filter((equipment) => {
          return equipment?.stateHistory[0].state?.name
            .toLowerCase()
            .includes(search.toLowerCase());
        });
      }
      if (category === "name") {
        filteredEquipmentsList = equipments.filter((equipment) => {
          return equipment?.name.toLowerCase().includes(search.toLowerCase());
        });
      }

      setDisplayedEquipments(filteredEquipmentsList);
    } else {
      setDisplayedEquipments(equipments);
    }
  }

  useEffect(() => {
    api.get<(EquipmentsType | undefined)[]>("/equipments").then((res) => {
      setDisplayedEquipments(res.data);
      setEquipments(res.data);
    });
  }, []);

  useEffect(() => {
    if (equipments[0]) {
      setIsLoading(false);
    }
  }, [equipments]);

  return (
    <EquipsContext.Provider
      value={{
        equipments,
        displayedEquipments,
        isLoading,
        handleSearchEquipments,
      }}
    >
      {children}
    </EquipsContext.Provider>
  );
}

export function useEquips() {
  const hook = useContext(EquipsContext);

  return hook;
}
