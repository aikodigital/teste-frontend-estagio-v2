export interface Equipment {
    id: string; 
    equipmentModelId: string;
    name: string;
}

export interface DesiredEquipmentHistoryList {
    id: string;
    name: string;
    date: string;
    time: string;
    state: string;
    color: string;
}

export interface EquipmentPositionInformation {
    date: string;
    lat: number;
    lon: number;
};

export interface EquipmentStateInformation {
    name: string;
    color: string;
}

export interface EquipmentStateHistory {
    date: string;
    equipmentStateId: string;
}

export interface DesiredEquipmentProps {
    id: string;
    name: string;
    modelName: string;
    positionInformation: EquipmentPositionInformation;
    stateInformation: EquipmentStateInformation;
} 

export interface EquipmentContextData {
    equipmentList: DesiredEquipmentProps[];
    desiredEquipmentHistoryList: DesiredEquipmentHistoryList[];
    checkEquipmentStateHistory: (equipmentId: string) => void;
    filterEquipments: (desiredEquipmentModel: string) => void;
}