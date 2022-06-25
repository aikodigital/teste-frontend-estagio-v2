import equipmentModel from "../data/equipmentModel.json";


export default function ModelStateId(equip){
   
    const aux = equipmentModel.find(item => item.id === equip);
   
    return aux;
}