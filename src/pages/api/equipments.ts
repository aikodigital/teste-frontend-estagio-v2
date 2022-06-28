// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import equipmentsJson from "../../../data/equipment.json";
import equipmentModels from "../../../data/equipmentModel.json";
import equipmentPositionHistory from "../../../data/equipmentPositionHistory.json";
import equipmentState from "../../../data/equipmentState.json";
import equipmentStateHistory from "../../../data/equipmentStateHistory.json";
import { EquipmentsType } from "../../types/equipments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	function flatEquipmentsData() {
		const items = equipmentsJson.map!(equipmentJson => {
			const model = equipmentModels.find!(models => {
				return models.id === equipmentJson.equipmentModelId;
			});

			const positionHistory = equipmentPositionHistory.find!(history => {
				return history.equipmentId === equipmentJson.id;
			});

			const rawStateHistory = equipmentStateHistory.find!(equipState => {
				return equipState.equipmentId === equipmentJson.id;
			});

			const stateHistory = rawStateHistory?.states.map(state => {
				const stateInfo = equipmentState.find!(stateData => {
					return stateData.id === state.equipmentStateId;
				});

				return {
					date: state.date,
					state: stateInfo,
				};
			});

			if (model && positionHistory && stateHistory) {
				stateHistory.sort((prev, next) => {
					const prevDate = new Date(prev.date);
					const nextDate = new Date(next.date);
					return nextDate.getTime() - prevDate.getTime();
				});

				positionHistory.positions.sort((prev, next) => {
					const prevDate = new Date(prev.date);
					const nextDate = new Date(next.date);
					return nextDate.getTime() - prevDate.getTime();
				});

				const allEquipData: EquipmentsType = {
					id: equipmentJson.id,
					name: equipmentJson.name,
					model,
					positionHistory: positionHistory?.positions,
					stateHistory,
				};

				return allEquipData;
			}
		});

		return items;
	}

	const equipments = flatEquipmentsData();

	if (req.query.id) {
		const equipment = equipments.find(equip => {
			return equip?.id === req.query.id;
		});

		if (equipment) {
			res.status(200).json(equipment);
		} else {
			res.status(404).json({
				error: "Id not found",
			});
		}
	} else {
		res.status(200).json(equipments);
	}
}
