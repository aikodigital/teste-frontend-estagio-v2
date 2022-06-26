import moment from "moment";
import React from "react";
import styles from "./EquipmentStateHistory.module.css";

export const EquipmentStateHistory = ({
  equipmentStateList,
  equipmentStateHistoryList,
  equipmentID,
  equipmentList,
  activeHistory,
  setActiveHistory
}) => {
  

  const filterEquipmentStateHistory = equipmentStateHistoryList.filter(
    (equipmentStateHistory) => {
      return equipmentStateHistory.equipmentId == equipmentID;
    }
  );


  const filterEquipment = equipmentList.filter(equipment => {
   return equipment.id == equipmentID
  })

  const filterEquipmentState = filterEquipmentStateHistory.map((equipmentState) => {
    return equipmentState.states;
  });

  if(activeHistory)
  return (
    <>
    <button disabled={equipmentID == false} className={styles.occultHistory} onClick={() => setActiveHistory(false)}>Ocultar histórico do equipamento</button>

    <div className={styles.container}>
      <h3>Histórico de estados do equipamento: {filterEquipment[0].name}</h3>   
      {
      filterEquipmentState.map((states) => {
        return states.map((state) => {
          const filterStates = equipmentStateList.filter((equipmentState) => {
            return equipmentState.id == state.equipmentStateId;
          });
          

          return (
            <div key={state.date} className={styles.statusHistory}>
              <p>{moment(state.date).format("DD/MM/YYYY HH:mm")}</p>
              
              <p>
                Status:{" "}
                <span
                  style={{
                    color: `${filterStates[0].color}`,
                    fontWeight: "bold",
                  }}
                >
                  {filterStates[0].name}
                </span>
              </p>
            </div>
          );
        });
      })}
    </div>
    </>
  )
  return <button disabled={equipmentID == false} className={`${styles.historyButton} ${equipmentID && 'btnHistoryActive'}`} onClick={() => setActiveHistory(true)}>Exibir histórico do equipamento</button>
};
