export interface Position{
    date: string; 
    lat: number; 
    lon: number;

}
export interface StateEquipment{
    date: string; 
    equipmentStateId:string
}

export interface NameState{
    date: string,
    name: string,
    color: string
}

export interface TypeFilter{
    nome: string,
    situation: string,
}
