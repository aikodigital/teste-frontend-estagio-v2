import equipamentModel from "../../constants/data/equipmentModel.json"
import equipamentStateHistory from "../../constants/data/equipmentStateHistory.json"
import equipamentState from "../../constants/data/equipmentState.json"
import equipamentPositionHistory from "../../constants/data/equipmentPositionHistory.json"

//Função encontrar o nome do modelo:
export const findModel = (modelNumber) => {
  const modelResult = equipamentModel.find((model) => {
    return modelNumber === model.id
  })
  return modelResult.name
}

//Função encontrar último registro no histórico:
export const findLastState = (id) => {
  const lastState = equipamentStateHistory.find((vehicle) => {
    return id === vehicle.equipmentId
  })
  return lastState.states[lastState.states.length - 1].equipmentStateId
}

//Função encontrar informações sobre o histórico:
export const findIdStateDetails = (idState) => {
  const details = equipamentState.find((state) => {
    return idState === state.id
  })
  return details
}

export const findVehicleLastPosition = (id) => {
  const vehiclesLastPosition = equipamentPositionHistory.find((vehicle) => {
    // return vehicle.positions[vehicle.positions.length - 1]
    if(vehicle.equipmentId === id){
      return vehicle
    }
  })
  const lat = vehiclesLastPosition.positions[vehiclesLastPosition.positions.length - 1].lat
  const lon = vehiclesLastPosition.positions[vehiclesLastPosition.positions.length - 1].lon
  return [lat, lon]
}