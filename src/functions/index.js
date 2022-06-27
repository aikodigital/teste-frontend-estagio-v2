import stateHistories from '../data/equipmentStateHistory.json'
import equipmentStates from '../data/equipmentState.json'
import positionHistories from '../data/equipmentPositionHistory.json'
import L from 'leaflet'
import truck from '../assets/truck.png'
import harvester from '../assets/harvester.png'
import claw from '../assets/claw.png'

export function getPositionHistoryById(id) {
	return positionHistories.filter((value) => {
		return value.equipmentId == id
	})[0]
}

export function getStateHistoryById(id) {
	return stateHistories.filter((value) => {
		return value.equipmentId == id
	})[0]
}

export function getStateById(id) {
	return equipmentStates.filter((value) => {
		return value.id == id
	})[0]
}

export function getModelById(id) {
	let Icon
	switch (id) {
	case 'a3540227-2f0e-4362-9517-92f41dabbfdf':
		Icon = new L.Icon({
			iconUrl: truck,
			iconSize: [40, 40]
		})
		break
	case 'a4b0c114-acd8-4151-9449-7d12ab9bf40f':
		Icon = new L.Icon({
			iconUrl: harvester,
			iconSize: [40, 40]
		})
		break
	case '9c3d009e-0d42-4a6e-9036-193e9bca3199':
		Icon = new L.Icon({
			iconUrl: claw,
			iconSize: [40, 40]
		})
	}

	return Icon
}