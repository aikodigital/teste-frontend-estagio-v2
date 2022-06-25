import equipmentStateHistory from "../data/equipmentStateHistory.json"; 


export default function EquipmentStateHistoryById(equip: string){
    
    const aux = equipmentStateHistory.find(item => item.equipmentId === equip);

    return aux;

}
