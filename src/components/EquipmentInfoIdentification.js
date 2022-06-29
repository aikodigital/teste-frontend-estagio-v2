export function EquipmentInfoIdentification(props) {
	const { equipment } = props

	return (
		<ul className="flex flex-col justify-center items-center w-40">
			<li className="font-semibold">{equipment.equipmentModel.name}</li>
			<li>
				<figure className="w-36">
					<img src={equipment.equipmentModel.image} alt="" />
				</figure>
			</li>
			<li className="font-bold text-xl">{equipment.name}</li>
		</ul>
	)
}