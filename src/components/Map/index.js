/* eslint-disable react/prop-types */
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import './styles.css'

export default function Map ({ content, zoom }) {
	return (
		<section data-testid='section-map' className='container-map'>
			<MapContainer center={[-19.151801, -46.007759]} zoom={zoom}>
				<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{content}
			</MapContainer>
		</section>
	)
}