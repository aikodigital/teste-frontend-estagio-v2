import equipmentModel from "../data/equipmentModel.json"
import equipmentModelImage from "../data/equipmentModelImage.json"
import equipmentPositionHistory from "../data/equipmentPositionHistory.json"
import equipmentStateHistory from "../data/equipmentStateHistory.json"
import { EquipmentInfoIdentification } from "./EquipmentInfoIdentification"
import { MapView } from "./MapView"
import { PositionsTableList } from "./PositionsTableList"
import { StatesTableList } from "./StatesTableList"

export function Equipment(props) {
	const equipment = props.equipment
	const modifiedEquipmentModel = equipmentModel.map(item => {
		return {
			...item,
			image: equipmentModelImage[item.name.toLowerCase().normalize('NFKD').replace(/[^\w]/g, '')].image
		}
	})

	const modifiedEquipment = {
		id: equipment.id,
		name: equipment.name,
		equipmentModel: modifiedEquipmentModel.filter(item => item.id === equipment.equipmentModelId)[0] || [],
		states: equipmentStateHistory?.filter(item => item.equipmentId === equipment.id)[0]?.states.sort((a, b) => a.date < b.date) || [],
		positions: equipmentPositionHistory?.filter(item => item.equipmentId === equipment.id)[0]?.positions.sort((a, b) => a.date < b.date) || []
	}

	return (
		Object.keys(equipment).length === 0 && equipment.constructor === Object ?
			<span className="text-white font-semibold px-4 py-4">Selecione um dos equipamentos acima</span>
			:
			<div className="flex flex-col md:grid md:grid-cols-4 w-full h-full gap-2 py-2 text-white">
				<section className="col-span-1 row-span-1 flex justify-center">
					<EquipmentInfoIdentification equipment={modifiedEquipment} />
				</section>

				<section className="md:col-span-3 md:row-span-1">
					<MapView equipment={modifiedEquipment} />
				</section>

				<section
					className="md:col-span-2 flex flex-col text-center px-2 p-1 bg-white text-slate-800 text-sm rounded"
				>
					<h2 className="py-1 bg-teal-700 font-bold text-white rounded-sm">Lista de estados</h2>
					<StatesTableList equipment={modifiedEquipment} />
				</section>

				<section
					className="md:col-span-2 flex flex-col text-center px-2 p-1 bg-white text-slate-800 text-sm rounded"
				>
					<h2 className="py-1 bg-teal-700 font-bold text-white rounded-sm">Lista de posições</h2>
					<PositionsTableList equipment={modifiedEquipment} />
				</section>
			</div>
	)
}
