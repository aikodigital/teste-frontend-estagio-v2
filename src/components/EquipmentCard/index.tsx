import { CSSProperties, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

export interface EquipmentCardProps {
  color: string | undefined;
}

export function EquipmentCard({ color }: EquipmentCardProps) {
  const borderStyle: CSSProperties = {
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 5,
    borderBottomWidth: 5,

    borderColor: color,
    borderStyle: "solid",
  };

  return (
    <div className={styles.cardContainer} style={borderStyle}>
      <h1>Hello World!</h1>
    </div>
  );
}
