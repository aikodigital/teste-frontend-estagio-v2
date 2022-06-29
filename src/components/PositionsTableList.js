import { dateFormater } from "../utils/dateFormat"
import { TableList } from "./TableList"

export function PositionsTableList(props) {
	const { equipment } = props

	return (
		<TableList equipment={equipment} tableHead1="Data" tableHead2="Coordenadas">
			{equipment.positions
				.map(item =>
					<tr key={item.date} className="odd:bg-teal-200 px-1">
						<td className="px-2">{dateFormater(new Date(item.date))}</td>
						<td className="px-2">
							[{item.lat}, {item.lon}]
						</td>
					</tr>
				)
			}
		</TableList>
	)
}