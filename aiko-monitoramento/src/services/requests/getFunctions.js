import equipamentStateHistory from "../../constants/data/equipmentStateHistory.json"

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