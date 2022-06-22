import equipmentStateHistory from '../data/equipmentStateHistory.json'
import equipmentState from '../data/equipmentState.json'
import equipment from '../data/equipment.json'
import equipmentModel from '../data/equipmentModel.json'
import { StateEquipment } from '../../@types'

export const lastPosition = (array:any[]) => {
    return array[array.length-1]
}   

export const takeEquipmentStateHistory = (id:string) => {
    let equipment = equipmentStateHistory.filter(item=>item.equipmentId == id)
    let lastState = lastPosition(equipment[0].states) as StateEquipment
    let actualState = equipmentState.filter(item => item.id == lastState.equipmentStateId)        
    return actualState[0].name
}

export const takeModelEquipment = (id:string) => {
    let typeModel =equipment.filter(item=>item.id == id )
    let nameEquipment = equipmentModel.filter(item=>item.id == typeModel[0].equipmentModelId)
    return nameEquipment[0].name
}