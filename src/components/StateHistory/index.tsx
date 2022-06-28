import equipmentStateHistory from "../../../data/equipmentStateHistory.json";
import equipmentState from "../../../data/equipmentState.json";
import equipment from "../../../data/equipment.json";
import equipmentModel from "../../../data/equipmentModel.json";

import "./index.css";

import { useParams } from "react-router-dom";
import { format } from "date-fns";

function StateHistory() {
  const { id } = useParams();

  const status = (id: string | undefined) => {
    for (let index = 0; index < equipmentState.length; index++) {
      if (equipmentState[index].id == id) {
        return equipmentState[index].name;
      }
    }
  };

  const equipamentModelId = (id: string | undefined) => {
    for (let index = 0; index < equipment.length; index++) {
      if (equipment[index].id == id) {
        return equipment[index].equipmentModelId;
      }
    }
  };
  const equipamentModelName = (id: string | undefined) => {
    for (let index = 0; index < equipmentModel.length; index++) {
      if (equipmentModel[index].id == id) {
        return equipmentModel[index].name;
      }
    }
  };

  const equipamentName = (id: string | undefined) => {
    for (let index = 0; index < equipment.length; index++) {
      if (equipment[index].id === id) {
        return equipment[index].name;
      }
    }
  };

  const arrayStateEquipament = (id: string | undefined) => {
    for (let index = 0; index < equipmentStateHistory.length; index++) {
      if (equipmentStateHistory[index].equipmentId === id) {
        return equipmentStateHistory[index].states;
      }
    }
  };

  return (
    <main>
      <h1>
        Nome: {equipamentName(id)} - Modelo:
        {equipamentModelName(equipamentModelId(id))}
      </h1>
      <strong>Histórico de estados do equipamento</strong>
      <ul>
        {arrayStateEquipament(id)?.map((state, i) => {
          return (
            <li key={i}>
              <span className="list">
                Data: {format(new Date(state.date), "dd-MM-yyyy")}
              </span>
              <span className="list">
                Horário: {format(new Date(state.date), "k'h'mm")}
              </span>

              {status(state.equipmentStateId) === "Parado" ? (
                <span
                  className="list"
                  style={{ color: "#f1c40f", fontWeight: "bold" }}
                >
                  {status(state.equipmentStateId)}
                </span>
              ) : status(state.equipmentStateId) === "Manutenção" ? (
                <span
                  className="list"
                  style={{ color: "#e74c3c", fontWeight: "bold" }}
                >
                  {status(state.equipmentStateId)}
                </span>
              ) : (
                <span
                  className="list"
                  style={{ color: "#2ecc71", fontWeight: "bold" }}
                >
                  {status(state.equipmentStateId)}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default StateHistory;
