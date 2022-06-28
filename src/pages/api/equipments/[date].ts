import type { NextApiRequest, NextApiResponse } from 'next'
// TYPES
import { iEquipmentState, iEquipmentStateHistory } from 'src/@types/api';
// DATA
import equipment from 'public/data/equipment.json';
import equipmentModel from 'public/data/equipmentModel.json';
import equipmentStateHistory from 'public/data/equipmentStateHistory.json';
import equipmentState from 'public/data/equipmentState.json';
import equipmentPositionHistory from 'public/data/equipmentPositionHistory.json';

export default function handler(req: NextApiRequest, res: NextApiResponse
) {
try{
    const { query: { date } } = req

    // FORMAT DATE
    const dateFormat: string = String(date).split('-').reverse().join('-')


    // FIND LAST STATE HISTORY 
    const findStateHistory = (equipamentId: string) => {
        const states = equipmentStateHistory.filter((stateHistory: iEquipmentStateHistory) => {
            return(stateHistory.equipmentId === equipamentId)
        })[0]?.states

        const lastState = states[states.length - 1]

        const state = equipmentState.find( (state: iEquipmentState) => {
            if(state.id === lastState.equipmentStateId){
                return({
                    name: state.name
                })
            }
        })?.name

        return state
    }

    // FIND LAST POSITION HISTORY
    const findPositionHistory = (equipamentId: any) => {
        const position = equipmentPositionHistory.filter((stateHistory) => {
            return(stateHistory.equipmentId === equipamentId)
        })[0].positions
        .filter( (stateHistory) => {
            return stateHistory.date.split('T')[0] === dateFormat
        }).pop()

        return {lat: position?.lat, lon: position?.lon}
    }
    
    // EQUIPMENT
    const equipments = equipment.map( (equipament) => {

        // MODEL
        const model = equipmentModel.find( (model) => {
            return(model.id === equipament.equipmentModelId)
        })?.name

    return({
        id: equipament.id,
        name: equipament.name,
        model: model,
        state: findStateHistory(equipament.id),
        position: findPositionHistory(equipament.id)
    })
    })

    res.status(200).json(equipments)

} catch(error){
    res.status(500).send('Erro ao requisitar')
    console.log(error)
}
}