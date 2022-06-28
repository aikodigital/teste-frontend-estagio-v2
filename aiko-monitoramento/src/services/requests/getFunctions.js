import equipamentStateHistory from "../../constants/data/equipmentStateHistory.json"
import equipamentPositionHistory from "../../constants/data/equipmentPositionHistory.json"

export const getStateHistory = (id) => 
{
  const stateHistory = equipamentStateHistory.find((vehicle) => 
  {
    if(vehicle.equipmentId === id){
      return vehicle.states
    }
  })  
  return stateHistory === undefined ? "" : stateHistory.states
}

export const getPositionHistory = (id) => 
{
  const positionHistory = equipamentPositionHistory.find((data) => {
    if(data.equipmentId === id){
      return data
    }
  })
  return positionHistory === undefined ? "" : positionHistory.positions
}