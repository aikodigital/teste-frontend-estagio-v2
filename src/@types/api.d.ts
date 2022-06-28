export interface iEquipmentStateHistory {
    equipmentId: string
    states: Array<iEquipmentStates>
}

export interface iEquipmentStates {
    date: string
    equipmentStateId: string
}



export interface iEquipmentPositions {
    date: string
    lat: number,
    lon: number
}

export interface iEquipmentModel{ 
    id: string
    name: string
    hourlyEarnings: Array<iHourlyEarnings>
}

export interface iHourlyEarnings {
    equipmentStateId: string
    value: number
}

export interface iEquipment {
    id: string
    equipmentModelId: string
    name: string
}

export interface iEquipmentsApi {
    id: string
    name: string
    model: string | undefined
    state: string | undefined
    position: {
        lat: number
        lon: number
    }
}

export interface iStateHistory {
    date: string 
    name: string | undefined
    color: string | undefined
  }
  

export interface iPositionHistory {
    date: string
      lat: number
      lon: number
  }
  

export interface iModel {
    name: string
      hourlyEarnings: {
        value: number 
        name: string | undefined
        color: string | undefined 
      }[]
}

export interface iStates{
    date: string
    equipmentStateId: string
}

export interface iEquipments {
    id: string
    name: string
    model: {
        name: string | undefined
        hourlyEarnings: {
            value: number
            state: string | undefined
        }[] | undefined
    }
    state: string | undefined
    position: string | undefined
}

export interface iEquipmentsMap extends iEquipments {
    position: {
        lat: number
        lon: number
    }
}

export interface iPosition {
    date: string
    lat: number
    lon: number
}




// EQUIPMENT ALL
export interface iEquipmentPositionHistory {
    equipmentId: string
    positions: Array<iEquipmentPositions>
}

export interface iEquipmentState {
    id: string
    name: string
    color: string
}
export interface iResponseEquipmentAll {
    model: iModel
    positionHistory: iPositionHistory[] | undefined
    stateHistory: iStateHistory[] | undefined
}