import React from 'react'
import Map from './components/Map'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HistoryView from './pages/HistoryView'
import Equipments from './components/Equipments'
import HistoryPositions from './pages/HistoryPositions'

export default function App () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Map content={<Equipments />} zoom={11} />} />
				<Route path='/history'>
					<Route path=':id' element={<HistoryView />} />
				</Route>
				<Route path='/positions'>
					<Route path=':id' element={<HistoryPositions />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}