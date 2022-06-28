import { CSSProperties } from "react";
import { useRouter } from "next/router";

import { EquipmentsType } from "../../types/equipments";
import styles from "./styles.module.scss";

export interface EquipmentCardProps {
	equipment: EquipmentsType;
}

export function EquipmentCard({ equipment }: EquipmentCardProps) {
	const route = useRouter();
	const { name, model, stateHistory } = equipment;

	const borderStyle: CSSProperties = {
		borderRightWidth: 0,
		borderTopWidth: 0,
		borderLeftWidth: 12,
		borderBottomWidth: 0,
		borderColor: stateHistory[0].state?.color,
		borderStyle: "solid",
	};

	function handleSeeDetails() {
		route.push(`/details/${equipment.id}`);
	}

	return (
		<div
			className={styles.cardContainer}
			style={borderStyle}
			onClick={() => handleSeeDetails()}
		>
			<h2>{name}</h2>
			<div>
				<span>Modelo: </span>
				<span>{model.name}</span>
			</div>
			<div>
				<span>Estado atual: </span>
				<span style={{ color: stateHistory[0].state?.color, fontWeight: 500 }}>
					{stateHistory[0].state?.name}
				</span>
			</div>
		</div>
	);
}
