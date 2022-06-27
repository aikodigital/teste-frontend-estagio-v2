/* eslint-disable react/prop-types */
import React from 'react'
import equipment from '../../data/equipment.json'
import { Marker, Popup, Tooltip } from 'react-leaflet'
import { getPositionHistoryById, getStateHistoryById, getStateById, getModelById } from '../../functions'
import { Link } from 'react-router-dom'

export default function Equipments() {
	return (
		<section data-testid='section-equipments'>
			{equipment.map((equipment, key) => {
				const positions = getPositionHistoryById(equipment.id).positions
				const currentPosition = positions[positions.length - 1]

				const states = getStateHistoryById(equipment.id).states
				const stateId = states[states.length - 1].equipmentStateId

				const currentState = getStateById(stateId)
			
				let Icon = getModelById(equipment.equipmentModelId)

				return (
					<Marker key={key} position={[currentPosition.lat, currentPosition.lon]} name={equipment.name} state={currentState.name} id={equipment.id} icon={Icon}>
						<Popup>
							<p>
								<Link to={`/positions/${equipment.id}&${equipment.equipmentModelId}`}>Histórico de posições</Link>
							</p>
							<p>
								<Link to={`/history/${equipment.id}`}>Histórico completo</Link>
							</p>
						</Popup>
						<Tooltip>
							{equipment.name} - <span style={{color: currentState.color, fontWeight: 'bold'}}>{currentState.name}</span>
						</Tooltip>
					</Marker>
				)
			})}
		</section>
	)
}