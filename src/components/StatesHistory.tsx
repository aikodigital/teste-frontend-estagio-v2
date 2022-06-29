import { Link, useParams } from "react-router-dom";
import {
  findEquipmentState,
  findStateHistory,
  findStateName,
  findEquipmentName,
} from "./EquipmentData";
import "../styles/styles.css";

export default function StatesHistory() {
  const params = useParams();

  let states = findStateHistory(params.equipmentId);

  return (
    <div className="Container">
      <div>
        <Link to="/">Voltar</Link>
        <h3>
          Histórico de estados: {findEquipmentName(params.equipmentId)}{" "}
          {findEquipmentState(params.equipmentId)}
        </h3>
        <div className="States">
          <div className="row">
            {states.map((states, data) => (
              <div key={data} className="StatesData">
                Data:{" "}
                {new Date(states.date).toLocaleDateString() +
                  " " +
                  new Date(states.date).toLocaleTimeString()}
                <br />
                Status: {findStateName(states.equipmentStateId)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
