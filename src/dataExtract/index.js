import equipment from '../assets/data/equipment.json';
import equipmentModel from '../assets/data/equipmentModel.json';
import equipmentState from '../assets/data/equipmentState.json';
import equipmentStateHistory from '../assets/data/equipmentStateHistory.json';



function dataExtract () {
	
	function handleEquipmentName(equipmentId) {
		
		let equipmentName
		
		equipment.forEach((equipment) => {
			if(equipment.id === equipmentId) equipmentName = equipment.name
		})

		return equipmentName
	}

	function handleEquipmentModel(equipmentId) {
		
		let equipmentModelName, modelId 

		equipment.forEach((equipment) => {
			if(equipment.id === equipmentId)
				modelId = equipment.equipmentModelId
			equipmentModel.forEach((equipmentModel) => {
				
				if(equipmentModel.id === modelId)
					equipmentModelName = equipmentModel.name

			})
		})

		return equipmentModelName
	}

	function handleEquipmentStateHistory(equipmentId) {
		
		let equipmentStates, stateName

		equipmentStateHistory.forEach((equipmentStateHistory) => {
			if(equipmentStateHistory.equipmentId === equipmentId)
				equipmentStates = equipmentStateHistory.states[equipmentStateHistory.states.length-1].equipmentStateId
			 equipmentState.forEach((equipmentState) => {
			 	if(equipmentState.id === equipmentStates)
			 		stateName = equipmentState.name

			 })
		})

		return stateName
		
	}

	function handleStateColor(stateId) {
		
		let color

		equipmentState.forEach(equipmentState => {
			if(equipmentState.id === stateId )
				color = equipmentState.color
		})

		return color
	}

	function handleStateName(stateId) {

		let stateName

		equipmentState.forEach(state => {
			if(state.id === stateId)
				stateName = state.name

		})

		return stateName
	}

	return {handleEquipmentName, handleEquipmentModel,handleEquipmentStateHistory, handleStateColor, handleStateName}
}

export default dataExtract;
