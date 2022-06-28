import type { NextApiRequest, NextApiResponse } from 'next'
// TYPES
import { iEquipment, iEquipmentModel, iEquipmentPositionHistory,  iEquipmentPositions,  iEquipmentState,  iEquipmentStateHistory, iEquipmentStates, iHourlyEarnings, iModel, iPositionHistory, iResponseEquipmentAll, iStateHistory } from 'src/@types/api'
// DATA
import equipment from 'public/data/equipment.json';
import equipmentModel from 'public/data/equipmentModel.json';
import equipmentPositionHistory from 'public/data/equipmentPositionHistory.json';
import equipmentStateHistory from 'public/data/equipmentStateHistory.json';
import equipmentState from 'public/data/equipmentState.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<iResponseEquipmentAll | string>
) {
try{
  const {equipmentId, date} = req.query

  // FORMAT DATE
  const dateFormat: string = String(date).split('-').reverse().join('-')
  
  // FIND EQUIPMENT STATE BY STATE ID
  const findEquipmentStateById = (stateId: string) => {
    const response = equipmentState.find( (state: iEquipmentState) => { return (state.id === stateId)})
    return {name: response?.name, color: response?.color}
  }

  // EQUIPMENT
  const equipmentOnly: iEquipment | undefined = equipment.find( (equipament: iEquipment) => {
    return(equipament.id === equipmentId)
  })

  // EQUIPMENT MODEL
  const model: iModel | undefined = equipmentModel.filter( (model: iEquipmentModel) => {
    return(model.id === equipmentOnly?.equipmentModelId)
  }).map( (model: iEquipmentModel) => {
    return({
      name: model.name,
      hourlyEarnings: model.hourlyEarnings.map( (earning: iHourlyEarnings) => {
        return ({value: earning.value, ...findEquipmentStateById(earning.equipmentStateId) })
      })
    })
  })[0]

  // EQUIPMENT POSITION HISTORY
  const positionHistory: iPositionHistory[] | undefined = equipmentPositionHistory.find(
  (positionHistory: iEquipmentPositionHistory) => {
    return(positionHistory.equipmentId === equipmentOnly?.id)
  })?.positions.filter( (position: iEquipmentPositions) => {
    return(position.date.split('T')[0] === dateFormat)
  })

 // EQUIPMENT STATE HISTORY
  const stateHistory: iStateHistory[] | undefined = equipmentStateHistory.find( (position: iEquipmentStateHistory) => {
    return(position.equipmentId === equipmentOnly?.id)
  })?.states.filter( (equipment: iEquipmentStates) => {
    return (equipment.date.split('T')[0] === dateFormat)
  }).map( (equipment: iEquipmentStates) => {
    return {
      date: equipment.date,
      ...findEquipmentStateById(equipment.equipmentStateId)
  }})

  res.status(200).json({model,positionHistory,stateHistory})

} catch(error){
  res.status(500).send('Erro ao requisitar')
  console.log(error)
}
}