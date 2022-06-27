export interface IEquipmentByLastPosition {
  equipmentId: string,
  equipmentName: string,
  position: {
    date: string,
    lat: number,
    lon: number
  }
}

export interface IEquipmentStates { 
  date: string,
  state: IEquipmentCurrentState
}

export interface IEquipmentCurrentState {
  id: string,
  name: string,
  color: string
}

export interface IConcatenatedEquipmentAndState extends IEquipmentByLastPosition {
  state: IEquipmentCurrentState
}


