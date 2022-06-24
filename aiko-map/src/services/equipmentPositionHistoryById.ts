import equipmentPositionHistory from "../data/equipmentPositionHistory.json";


export default function EquipmentPositionHistoryById(equip){
    
    const aux = equipmentPositionHistory.find(item => item.equipmentId === equip);
    
    return aux;
}
