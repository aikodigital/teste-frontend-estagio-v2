/* eslint-disable react/prop-types */
import React from "react";
import { CircleMarker } from "react-leaflet";

import equipmentState from "../../assets/data/equipmentState.json";
import equipmentStateHistory from "../../assets/data/equipmentStateHistory.json";
import PopupMarker from "./PopupMarker";

function Marker({ loc, index }) {
	const markColor = equipmentState.find(
		(status) =>
			status.id ===
			equipmentStateHistory[index].states[
				equipmentStateHistory[index].states.length - 1
			].equipmentStateId
	).color;

	return (
		<CircleMarker
			center={[
				loc.positions[loc.positions.length - 1].lat,
				loc.positions[loc.positions.length - 1].lon,
			]}
			color={markColor}
		>
			<PopupMarker index={index} markColor={markColor} />
		</CircleMarker>
	);
}

export default Marker;
