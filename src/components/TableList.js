export function TableList(props) {
	const { tableHead1, tableHead2, children } = props

	return (
		<div className="flex items-start overflow-y-auto h-80 md:h-40">
			<table className="w-full">
				<thead>
					<tr>
						<th>{tableHead1}</th>
						<th>{tableHead2}</th>
					</tr>
				</thead>
				<tbody className="h-60">
					{children}
				</tbody>
			</table>
		</div>
	)
}