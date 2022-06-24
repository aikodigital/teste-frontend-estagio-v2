import equipment from "../data/equipment.json";

import EquipmentPositionHistoryById from "./equipmentPositionHistoryById";
import EquipmentStateHistoryById from "./EquipmentStateHistoryById";
import ModelStateId from "./ModelStateId";


 

export default function EquiIDSearch(equipmentId:string){
    const aux = equipment.find(item => item.id === equipmentId);
    ModelStateId(aux.equipmentModelId);
    const allInFo = {
        Equip: aux,
        Model: ModelStateId(aux.equipmentModelId),
        Position: EquipmentPositionHistoryById(aux.id),
        StateHistory: EquipmentStateHistoryById(aux.id)
    };    

    console.log(allInFo);
    return allInFo;
}

