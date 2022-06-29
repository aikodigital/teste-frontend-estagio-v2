import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet'

import equipmentState from "../data/equipmentState.json"

export function MapView(props) {
	const { equipment } = props
	const lastPosition = equipment.positions[0]
	const zoom = 12

	return (
		<div className="relative flex flex-col w-full h-[20rem] rounded-md overflow-hidden z-0">
			<MapContainer
				className="w-full h-full"
				center={[lastPosition.lat, lastPosition.lon]}
				zoom={zoom} scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<ChangeView center={[lastPosition.lat, lastPosition.lon]} zoom={zoom} />
				<Marker position={[lastPosition.lat, lastPosition.lon]} >
					<Popup className="text-center">
						Estado atual: {equipmentState
							.filter(item => item.id === equipment.states[0].equipmentStateId)[0]
							.name}
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

function ChangeView({ center, zoom }) {
	const map = useMap()
	map.setView(center, zoom)
	return null
}
