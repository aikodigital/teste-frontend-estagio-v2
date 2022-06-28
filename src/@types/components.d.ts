import { iEquipments, iPositionHistory, iStateHistory } from "./api"

// HEAD PAGE
export interface iHeadPage {
    titlePage: string
}

// LAYOUT
export interface iLayout {
    children: JSX.Element | JSX.Element []
}

// HOME
    // STATISTICS
    export interface iStatistics {
        equipments: iEquipments[] | undefined
    }

    // MAP
    export interface iMap {
        equipments: Array<iEquipmentsMap> | undefined
    }


// PROFILE
    // INFO
    export interface iProfileInfo {
        vehicleImg: string | undefined
        nameImg: string | undefined
        equipmentInfo: {
            name: string
            model: string | undefined
            state: string | undefined
        }
    }
    // MAP
    export interface iMapProfile {
        equipments:{
            statePosition: iPositionHistory[] | undefined
            model: string | undefined
        }
    }
    // STATISTICS
    export interface iStatisticsProfile {
        dataStatistics: {
            stateHistory: iStateHistory[] | undefined;
            hourlyEarnings: {
                value: number;
                state: string | undefined;
            }[] | undefined;
        }
    }
