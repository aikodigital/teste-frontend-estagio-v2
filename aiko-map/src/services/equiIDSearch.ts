import equipment from "../data/equipment.json";

import EquipmentPositionHistoryById from "./ServiceEquipmentPositionHistory";
import EquipmentStateHistoryById from "./ServiceEquipmentStateHistory";
import ModelStateId from "./ServiceEquipmentModel";


 

export default function EquiIDSearch(equipmentId:string){
    const aux = equipment.find(item => item.id === equipmentId);
    ModelStateId(aux.equipmentModelId);
    const positionHistory = EquipmentPositionHistoryById(aux.id);
    const stateHistory = EquipmentStateHistoryById(aux.id,aux.name);

    const neededInfoMap = {
        name: aux.name,
        id: aux.id,
        statusId: stateHistory.states[stateHistory.states.length - 1].equipmentStateId,
        positions:{
            date: positionHistory.positions[positionHistory.positions.length -1].date,
            lat: positionHistory.positions[positionHistory.positions.length -1].lat,
            lon: positionHistory.positions[positionHistory.positions.length -1].lon,
        }
    };
    
   /* 
    const allInFo = {
        Equip: aux,
        Model: ModelStateId(aux.equipmentModelId),
        Position: EquipmentPositionHistoryById(aux.id),
        StateHistory: EquipmentStateHistoryById(aux.id)
    };    
    */
    
    return neededInfoMap;
}

