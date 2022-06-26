import equipmentStateHistory from '../data/equipmentStateHistory.json'
import equipmentState from '../data/equipmentState.json'
import equipment from '../data/equipment.json'
import equipmentPositionHistory from '../data/equipmentPositionHistory.json'
import equipmentModel from '../data/equipmentModel.json'
import { HistoryPosition, NameState, StateEquipment } from '../../@types'
import L from 'leaflet'
import tracto from '../img/iconTractor.png'
import logo from '../img/aiko.png'
import harvester from '../img/harvester.jpg'
import garra from '../img/garra.png'

export const lastPosition = (array:any[]) => {
    return array[array.length-1]
}

export const takeNameEquipment = (id:string) => {
    let filterName = equipment.filter(item => item.id === id)
    return filterName[0]
}

export const EquipmentStateActual =  (id:string) => {
    try {
        let equipment = equipmentStateHistory.filter(item=>item.equipmentId == id)
        let lastState = lastPosition(equipment[0].states) as StateEquipment
        let actualState = equipmentState.filter(item => item.id == lastState.equipmentStateId)        
        return actualState[0].name
    } catch (error) {
        return console.error('Houve algum erro ', error) as any        
    }
}

export const takeModelEquipment = (id:string) => {
    try {
        let typeModel = equipment.filter(item=>item.id == id )
        let nameEquipment = equipmentModel.filter(item=>item.id == typeModel[0].equipmentModelId)
        return nameEquipment[0]
    } catch (error) {
        return console.error('Houve algum erro ', error) as any
    }
}

export const EquipmentStateHistory = (id:string) => {

    try {
        let equipment = equipmentStateHistory.filter(item=>item.equipmentId == id)[0].states
        let arrayStateEquipment = [] as NameState[]
        equipment.map(item=>{
            equipmentState.forEach(itemState=>{
                if(item.equipmentStateId==itemState.id){
                    arrayStateEquipment.push({date:item.date, name:itemState.name, color: itemState.color})
                }
            })
        })
        return arrayStateEquipment.reverse()
    } catch (error) {
        return console.error('Houve algum erro ', error) as unknown as NameState[]
    }
}

export const takeHistoryPostion = (id:string) => {
    try {
        let historyposition = equipmentPositionHistory.filter(item=>item.equipmentId == id)[0].positions
        return historyposition
    } catch (error) {
        return console.error('Houve algum erro ', error) as any as HistoryPosition[]
    }
}

export const filterState = (id:string, state:string) =>{
    try {
        let filter = EquipmentStateHistory(id).filter(
            item=> item.name == state
        )
        return filter.length
    } catch (error) {
        return console.error('Houve algum erro ', error) as any
    }
}

export const earnedEquipment = (id:string, hoursWork:number, hoursSupport:number) =>{
    try {
        let hourEquip = equipmentModel.filter(item => item.name == takeModelEquipment(id).name )[0]
        let yieldEquipment  = hourEquip.hourlyEarnings[0].value * hoursWork + hourEquip.hourlyEarnings[2].value * hoursSupport
        return yieldEquipment
    } catch (error) {
        return console.error('Houve algum erro ', error) as any
    }
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

export const CreateIcon = (icon: any) =>{
    return new L.Icon({
        iconUrl: icon,
        iconRetinaUrl: icon,
        iconSize: [40, 50]
    })
}

export const defineIcon = (str:string) =>{
    switch (str) {
        case 'Caminhão de carga':
            return CreateIcon(tracto)
        case 'Harvester':
            return CreateIcon(harvester)
        case 'Garra traçadora':
            return CreateIcon(garra)    
        default:
            return CreateIcon(logo) 
    }
}
