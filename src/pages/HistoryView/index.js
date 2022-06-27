import React from 'react'
import { useParams } from 'react-router-dom'
import { getStateHistoryById, getStateById } from '../../functions'
import './styles.css'

export default function HistoryView() {
	const params = useParams()
	let states = getStateHistoryById(params.id).states
	states = states.slice().reverse()
    
	return (
		<section className='container'>
			<section className='history-container'>
				{states.map((value, key) => {
					let state = getStateById(value.equipmentStateId)
					return (
						<section key={key} className='history' style={{
							borderLeft: `3px solid ${state.color}`,
						}}>
							<p>{new Date(value.date).toLocaleString()}</p>
							<p>{state.name}</p>
						</section>
					)
				})}
			</section>
		</section>
	)
}