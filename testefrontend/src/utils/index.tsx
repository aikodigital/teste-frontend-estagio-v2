import { 
    EquipmentPositionInformation, 
    EquipmentStateHistory 
} from "../interfaces";

export function findMostRecentTime(array: EquipmentPositionInformation[] | EquipmentStateHistory[]) {
    let aux = 0;

    for(let i = 0; i < array.length; i++){
        const dateToNumber = new Date(array[i].date).getTime();

        if(aux < dateToNumber) {
            aux = dateToNumber;
        }
    }

    return aux;
}

export function formatNumber(num: string){
    if(num.length === 1) {
        return `0${num}`;
    } else {
        return num;
    }
}