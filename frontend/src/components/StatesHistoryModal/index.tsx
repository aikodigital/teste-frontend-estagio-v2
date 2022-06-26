import { v4 as uuidv4 } from "uuid";
import styles from "./index.module.css";

interface Equipment {
  name: string;
  model: string;
  positions: Position[];
}

interface Position {
  date: string;
  lat: number;
  lon: number;
  state: EquipmentState;
}

interface EquipmentState {
  name: string;
  color: string;
}

interface StateHistoryModalProps {
  equipment: Equipment;
}

const StateHistoryModal = ({ equipment }: StateHistoryModalProps) => {
  return (
    <div className={styles.container}>
      <main>
        <section></section>
        <section>
          <ul>
            {equipment.positions.map((position) => (
              <li key={uuidv4()}>
                {position.state.name} - {position.date}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default StateHistoryModal;
