export interface IHourlyEarnings {
  equipmentStateId: string;
  value: number;
}

export interface IEquipmentModel {
  id: string;
  name: string;
  hourlyEarnings: IHourlyEarnings[]
}

export interface IEquipmentByLastPosition {
  equipmentId: string,
  equipmentName: string,
  equipmentModel: IEquipmentModel,
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


