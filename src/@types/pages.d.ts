import { iEquipments } from "./api"

// HOME
export interface iHome {
    lastPositionDate: string
} 

// PROFILE
export interface iProfile {
    equipment: iEquipments
}