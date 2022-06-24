import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import Marker from "./Marker";
import equipmentPositionHistory from "../../assets/data/equipmentPositionHistory.json";

function Map() {
	return (
		<MapContainer
			center={[-19.151801, -46.007759]}
			zoom={11}
			scrollWheelZoom={false}
		>
			{equipmentPositionHistory.map((loc, index) => (
				<Marker key={index} loc={loc} index={index} />
			))}

			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="© OpenStreetMap"
			/>
		</MapContainer>
	);
}

export default Map;
