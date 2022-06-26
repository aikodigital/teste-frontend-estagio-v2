import React from "react";
import styles from "./EquipmentsSection.module.css";

export const EquipmentsSection = ({
  equipmentList,
  equipmentModelList,
  setEquipmentID,
  setActiveHistory,
}) => {
  function handleClick(element) {
    const id = element.currentTarget.id;
    setEquipmentID(id);
  }

  return (
    <section className={styles.section}>
      <h1>Lista de Equipamentos</h1>
      <div className={styles.content}>
        <button
          onClick={() => {
            setEquipmentID("");
            setActiveHistory(false);
          }}
          className={styles.button}
        >
          selecionar todos
        </button>
        <div className={styles.equipmentsList}>
          {equipmentModelList.map((equipmentModel) => (
            <div
              className={styles.model}
              id={equipmentModel.id}
              key={equipmentModel.id}
            >
              <h4>{equipmentModel.name}</h4>
              <div className={styles.equipment}>
                {equipmentList
                  .filter((equipment) => {
                    return equipment.equipmentModelId == equipmentModel.id;
                  })
                  .map((element) => (
                    <button
                      className={styles.button}
                      key={element.id}
                      id={element.id}
                      onClick={handleClick}
                    >
                      {element.name}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
