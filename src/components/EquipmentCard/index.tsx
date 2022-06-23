import { CSSProperties } from "react";
import { useRouter } from "next/router";

import { EquipmentsType } from "../../types/equipments";
import styles from "./styles.module.scss";

export interface EquipmentCardProps {
  equipment: EquipmentsType;
}

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  const route = useRouter();
  const { name, model, positionHistory, stateHistory } = equipment;

  const borderStyle: CSSProperties = {
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 10,
    borderBottomWidth: 0,
    borderColor: stateHistory[0].state?.color,
    borderStyle: "solid",
  };

  const order = stateHistory.sort((prev, next) => {
    const today = new Date();
    const prevDate = new Date(prev.date);
    return today.getTime() - prevDate.getTime();
  });

  function handleSeeDetails() {
    route.push(`/details/${equipment.id}`);
  }

  return (
    <div
      className={styles.cardContainer}
      style={borderStyle}
      onClick={() => handleSeeDetails()}
    >
      <h1>{name}</h1>
      <div>
        <span>Modelo: </span>
        <span>{model.name}</span>
      </div>
      <div>
        <span>Estado atual: </span>
        <span>{stateHistory[0].state?.name}</span>
      </div>
    </div>
  );
}
