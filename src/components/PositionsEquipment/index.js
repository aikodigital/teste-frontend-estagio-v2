/* eslint-disable react/prop-types */
import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { getModelById, getPositionHistoryById } from '../../functions'

export default function PositionsEquipment({ id, iconId }) {
	const positions = getPositionHistoryById(id).positions
	const Icon = getModelById(iconId)
	return (
		<section data-testid='section-positions'>
			{positions.map((position, key) => {
				return (
					<Marker key={key} position={[position.lat, position.lon]} icon={Icon}>
						<Popup>
							<p>Data: {new Date(position.date).toLocaleString()}</p>
							<p>Lat: {position.lat}</p>
							<p>Lon: {position.lon}</p>
						</Popup>
					</Marker>
				)
			})}
		</section>
	)
}