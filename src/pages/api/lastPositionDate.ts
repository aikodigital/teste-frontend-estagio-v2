import type { NextApiRequest, NextApiResponse } from 'next'
// TYPES
import { iEquipmentPositionHistory, iPosition } from 'src/@types/api';
// DATA
import equipmentPositionHistory from 'public/data/equipmentPositionHistory.json'



export default function handler(req: NextApiRequest, res: NextApiResponse
) {
try {
    // FIND LAST POSITION DATE
    const position: iPosition[] = equipmentPositionHistory.filter((stateHistory: iEquipmentPositionHistory) => {
        return(stateHistory.equipmentId)
    })[0].positions

    const lastPosition: iPosition = position[position.length - 1]

    res.status(200).json(lastPosition.date)

} catch (error) {
    res.status(500).send('Erro ao requisitar')
    console.log(error)
}
}