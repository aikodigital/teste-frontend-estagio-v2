import EquiIDSearch from "./equiIDSearch";
import equipment from "../data/equipment.json";

export default function DefaultMapSearch(){
    const resultado = [];

    equipment.map(equip => {
        resultado.push(EquiIDSearch(equip.id));
    });
    return resultado; 
}