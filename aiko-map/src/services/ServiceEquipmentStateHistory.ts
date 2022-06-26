import equipmentStateHistory from "../data/equipmentStateHistory.json"; 


export default function EquipmentStateHistoryById(equip: string,name: string){
    
    const aux = equipmentStateHistory.find(item => item.equipmentId === equip);

    const aux2 = {
        name: name,
        equipmentId: aux.equipmentId,
        states: aux.states
    };

    return aux2;

}
