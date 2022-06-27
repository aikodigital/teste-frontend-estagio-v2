import React from 'react'
import { useParams } from 'react-router-dom'
import Map from '../../components/Map'
import PositionsEquipment from '../../components/PositionsEquipment'

export default function HistoryPositions() {
	const params = useParams()
	const [id, iconId] = params.id.split('&')
	return (
		<Map content={<PositionsEquipment id={id} iconId={iconId} />} zoom={13} />
	)
}