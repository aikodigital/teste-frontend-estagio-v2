import type { NextApiRequest, NextApiResponse } from 'next'
// TYPES
import { iEquipment, iEquipmentModel, iEquipments, iEquipmentState, iEquipmentStateHistory, iStates } from 'src/@types/api';
// DATA
import equipments from 'public/data/equipment.json';
import equipmentModel from 'public/data/equipmentModel.json';
import equipmentStateHistory from 'public/data/equipmentStateHistory.json';
import equipmentState from 'public/data/equipmentState.json'; 

export default function handler(req: NextApiRequest, res: NextApiResponse
) {
try{
    const { query: { equipmentId } } = req 

    // FIND LAST STATE HISTORY 
    const findStateHistory = (equipamentId: string) => {
        const states: iStates[] = equipmentStateHistory.filter((stateHistory: iEquipmentStateHistory) => {
            return(stateHistory.equipmentId === equipamentId)
        })[0]?.states

        const lastState:iStates = states[states.length - 1]

        const state: string | undefined = equipmentState.find( (state: iEquipmentState) => {
            if(state.id === lastState.equipmentStateId){
                return({
                    name: state.name
                })
            }
        })?.name

        return state
    }

    // FIND LAST POSITION HISTORY 
    const findPositionHistory = (equipamentId: string) => {
        const states: iStates[] = equipmentStateHistory.filter((stateHistory: iEquipmentStateHistory) => {
            return(stateHistory.equipmentId === equipamentId)
        })[0]?.states

        const dateState: string | undefined = states.map((stateHistory: iStates)=>{
            return(stateHistory.date)
        }).pop()
        
        return dateState
    }

     // EQUIPMENT
    const equipment: iEquipments[] | undefined = equipments.filter( (equipament: iEquipment) => {
        return(equipament.id === equipmentId)
    }).map( (equipament: iEquipment) => {

    // FIND MODEL
    const findModel = () => {
        const model = equipmentModel.find( (model: iEquipmentModel) => {
            return(model.id === equipament.equipmentModelId)
        })

        const hourlyEarnings = model?.hourlyEarnings.map( (hourly) => {
            return ({
                value: hourly.value,
                state: equipmentState.find( (state)=>{
                    return state.id === hourly.equipmentStateId
                })?.name
            })
        })

        return {model, hourlyEarnings}
    } 

    // RESULT
        return({
            id: equipament.id,
            name: equipament.name,
            model: {
                name: findModel().model?.name,
                hourlyEarnings:findModel().hourlyEarnings
            },
            state: findStateHistory(equipament.id),
            position: findPositionHistory(equipament.id)
        })
    })

    res.status(200).json(equipment)

} catch(error){
    res.status(500).send('Erro ao requisitar')
    console.log(error)
}
}