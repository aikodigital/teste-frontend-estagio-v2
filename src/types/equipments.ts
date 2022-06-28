export type EquipModelType = {
	id: string;
	name: string;
	hourlyEarnings: {
		equipmentStateId: string;
		value: number;
	}[];
};

export type EquipPositionHistoryType = {
	equipmentId: string;
	positions: {
		date: string;
		lat: number;
		lon: number;
	}[];
};

export type EquipStateType = {
	id: string;
	name: string;
	color: string;
};

export type EquipStateHistoryType = {
	date: string;
	state: EquipStateType | undefined;
}[];

export type EquipmentsType = {
	id: string;
	name: string;
	model: EquipModelType;
	positionHistory: EquipPositionHistoryType["positions"];
	stateHistory: EquipStateHistoryType;
};
