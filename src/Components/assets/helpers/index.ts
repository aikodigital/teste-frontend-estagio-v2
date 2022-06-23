import equipmentStateHistory from '../data/equipmentStateHistory.json'
import equipmentState from '../data/equipmentState.json'
import equipment from '../data/equipment.json'
import equipmentModel from '../data/equipmentModel.json'
import { NameState, StateEquipment } from '../../@types'

export const lastPosition = (array:any[]) => {
    return array[array.length-1]
}   

export const EquipmentStateActual = (id:string) => {
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

export const EquipmentStateHistory = (id:string) => {
    let equipment = equipmentStateHistory.filter(item=>item.equipmentId == id)[0].states
    let arrayStateEquipment = [] as NameState[]
    equipment.map(item=>{
        equipmentState.forEach(itemState=>{
            if(item.equipmentStateId==itemState.id){
                arrayStateEquipment.push({date:item.date, name:itemState.name})
            }
        })
    })
    return arrayStateEquipment.reverse()
}

export var DataConvert = (x:string) =>{
    let data = x.split('T')[0]
    let hora = x.split('T')[1].slice(0,5)
    let ano = data.split('-')[0].slice(2,4)
    let mes = data.split('-')[1]
    let dia =data.split('-')[2]
    return dia+'/'+mes+'/'+ano+' '+hora;
}

export const ColorState:{ [key: string]: any }  ={    
    Manutenção: 'rgba(255,0,0,1)',
    Parado: 'rgba(0,0,0,1)',
    Operando: 'rgba(0,255,0,1)'
}