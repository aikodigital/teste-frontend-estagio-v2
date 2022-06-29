import { useState } from "react"

import { Equipment } from "./Equipment"
import equipment from "../data/equipment.json"

export function Main() {
	const [selectedEquipment, setSelectedEquipment] = useState({})
	return (
		<main className="flex flex-col md:flex-row gap-2">
			<ul className="flex md:flex-col flex-wrap justify-center items-center gap-1">
				{equipment.map(item =>
					<li key={item.id}>
						<button onClick={() => setSelectedEquipment(item)}
							className="w-20 bg-teal-700 p-1 font-semibold text-white rounded-md">
							{item.name}
						</button>
					</li>
				)}
			</ul>
			<section className="w-full bg-teal-700 px-2 rounded-md">
				<Equipment equipment={selectedEquipment} />
			</section>
		</main>
	)
}