import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getEquipmentStatesHistory } from "../../services/equipment";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./index.module.css";

interface Equipment {
  id: string;
  name: string;
  model: string;
  positions: Position[];
}

interface Position {
  date: string;
  lat: number;
  lon: number;
}

interface EquipmentState {
  date: string;
  state: {
    name: string;
    color: string;
  };
}

interface StateHistoryModalProps {
  equipment: Equipment;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleString("pt-BR");
};

const StateHistoryModal = ({
  equipment,
  setIsModal
}: StateHistoryModalProps) => {
  const [states, setStates] = useState([] as EquipmentState[]);

  useEffect(() => {
    const equipmentStates = getEquipmentStatesHistory(equipment.id);

    setStates(equipmentStates);
  }, [equipment]);

  return (
    <div className={styles.container}>
      <main>
        <AiOutlineArrowLeft
          cursor={"pointer"}
          fontSize={"1.6em"}
          onClick={() => setIsModal(false)}
        />
        <section className={styles.titleContainer}>
          <h2>{equipment.name}</h2>
          <small>{equipment.model}</small>
        </section>
        <section className={styles.stateHistoryContainer}>
          <ul>
            {states.map((stateData) => (
              <li
                key={uuidv4()}
                style={{
                  backgroundColor: stateData.state.color
                }}
              >
                <span>{stateData.state.name}</span> -{" "}
                <span>{formatDate(stateData.date)}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default StateHistoryModal;
