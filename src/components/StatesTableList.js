import equipmentState from "../data/equipmentState.json"
import { dateFormater } from "../utils/dateFormat"
import { TableList } from "./TableList"

export function StatesTableList(props) {
	const { equipment } = props

	return (
		<TableList equipment={equipment} tableHead1="Data" tableHead2="Estado">
			{equipment.states
				.map(item =>
					<tr key={item.date} className="odd:bg-teal-200 px-1">
						<td className="px-2">{dateFormater(new Date(item.date))}</td>
						<td className="px-2">
							{equipmentState.filter(stateItem => stateItem.id === item.equipmentStateId)[0]?.name}
						</td>
					</tr>
				)
			}
		</TableList>
	)
}