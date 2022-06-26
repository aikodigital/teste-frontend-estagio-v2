import React, { useState } from "react";
import { EquipmentsSection } from "./EquipmentsSection";
import styles from "./MainContent.module.css";
import { Map } from "./Map";
import equipmentList from "../../data/equipment.json";
import equipmentModelList from "../../data/equipmentModel.json";
import equipmentPositionList from "../../data/equipmentPositionHistory.json";
import equipmentStateList from "../../data/equipmentState.json";
import equipmentStateHistoryList from "../../data/equipmentStateHistory.json";
import { EquipmentStateHistory } from "./EquipmentStateHistory";

export const MainContent = () => {
  const [equipmentID, setEquipmentID] = useState("");
  const [activeHistory, setActiveHistory] = useState(false)

  return (
    <main className={styles.main}>
      
      <section className={styles.map}>
        <Map
          equipmentID={equipmentID}
          equipmentPositionList={equipmentPositionList}
          equipmentStateList={equipmentStateList}
          equipmentStateHistoryList={equipmentStateHistoryList}
          equipmentList={equipmentList}
        />
      </section>

      <section className={styles.menu}>
        <EquipmentsSection
          equipmentList={equipmentList}
          equipmentModelList={equipmentModelList}
          equipmentID={equipmentID}
          setEquipmentID={setEquipmentID}
          setActiveHistory={setActiveHistory}
        />

        <EquipmentStateHistory
          equipmentStateList={equipmentStateList}
          equipmentStateHistoryList={equipmentStateHistoryList}
          equipmentID={equipmentID}
          equipmentList={equipmentList}
          activeHistory={activeHistory}
          setActiveHistory={setActiveHistory}
        />
      </section>
    </main>
  );
};
