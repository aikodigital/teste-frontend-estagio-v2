import equipment from '../data/equipment.json';
import equipmentModel from '../data/equipmentModel.json';
import equipmentPositionHistory from '../data/equipmentPositionHistory.json';
import equipmentState from '../data/equipmentState.json';
import equipmentStateHistory from '../data/equipmentStateHistory.json';
import LastState from './lastState';
import LastPosition from './lastPosition';


const CollectionsJoin = () => {

    const equipmentModelArray = [];

    for (let i = 0; i < equipment.length; i++) {
        for (let j = 0; j < equipmentModel.length; j++) {        
            if (equipment[i].equipmentModelId === equipmentModel[j].id) {
                
                let equipmentModelModel = {
                    "equipmentId": equipment[i].id,
                    "modelId": equipment[i].equipmentModelId,
                    "equipmentName": equipment[i].name,
                    "modelName": equipmentModel[j].name,
                    "hourlyEarnings": equipmentModel[j].hourlyEarnings,
                }

                equipmentModelArray.push(equipmentModelModel);
            }
        }
    }

    let stateArr: any = [];
    const equipmentStatesHistoryArray = [];

    for (let y = 0; y < equipmentStateHistory.length; y++) {
        for (let x = 0; x < equipmentStateHistory[y].states.length; x++) {
            for (let p = 0; p < equipmentState.length; p++) {
                if (equipmentState[p].id === equipmentStateHistory[y].states[x].equipmentStateId){

                    let states = {
                        "date": equipmentStateHistory[y].states[x].date,
                        "equipmentStateId": equipmentStateHistory[y].states[x].equipmentStateId,
                        "stateName": equipmentState[p].name,
                        "stateColor": equipmentState[p].color
                    }
                    
                    stateArr.push(states);
                }
            }
        }

        let equipmentStateModel = {
            "equipmentId": equipmentStateHistory[y].equipmentId,
            "states": stateArr
        }

        equipmentStatesHistoryArray.push(equipmentStateModel);

        stateArr = [];
    }

    const equipmentModelStateArray = [];

    for (let k = 0; k < equipmentModelArray.length; k++) {
        for (let l = 0; l < equipmentStatesHistoryArray.length; l++) {
            if (equipmentModelArray[k].equipmentId === equipmentStatesHistoryArray[l].equipmentId) {

                let equipmentModelStateModel = {
                    "equipmentId": equipmentModelArray[k].equipmentId,
                    "modelId": equipmentModelArray[k].modelId,
                    "equipmentName": equipmentModelArray[k].equipmentName,
                    "modelName": equipmentModelArray[k].modelName,
                    "hourlyEarnings": equipmentModelArray[k].hourlyEarnings,
                    "equipmentStateHistory": equipmentStatesHistoryArray[l].states
                }

                equipmentModelStateArray.push(equipmentModelStateModel);
            }
        }
    }

    const equipmentModelStatePositionArray = [];

    for (let q = 0; q < equipmentModelStateArray.length; q++) {
        for (let m = 0; m < equipmentPositionHistory.length; m++) {
            if (equipmentModelStateArray[q].equipmentId === equipmentPositionHistory[m].equipmentId) {

                let equipmentModelStatePositionModel = {
                    "equipmentId": equipmentModelStateArray[q].equipmentId,
                    "modelId": equipmentModelStateArray[q].modelId,
                    "equipmentName": equipmentModelStateArray[q].equipmentName,
                    "modelName": equipmentModelStateArray[q].modelName,
                    "hourlyEarnings": equipmentModelStateArray[q].hourlyEarnings,
                    "equipmentStateHistory": equipmentModelStateArray[q].equipmentStateHistory,
                    "equipmentPositionHistory": equipmentPositionHistory[m].positions
                }

                equipmentModelStatePositionArray.push(equipmentModelStatePositionModel);
            }
        }
    }

    const equipmentModelStatePositionLastArray = [];

    for (let n = 0; n < LastPosition().length; n++) {
        for (let b = 0; b < equipmentModelStatePositionArray.length; b++) {
            if (LastPosition()[n].equipmentId === equipmentModelStatePositionArray[b].equipmentId) {

                let equipmentModelStatePositionLastModel = {
                    "equipmentId": equipmentModelStatePositionArray[b].equipmentId,
                    "modelId": equipmentModelStatePositionArray[b].modelId,
                    "equipmentName": equipmentModelStatePositionArray[b].equipmentName,
                    "modelName": equipmentModelStatePositionArray[b].modelName,
                    "hourlyEarnings": equipmentModelStatePositionArray[b].hourlyEarnings,
                    "equipmentStateHistory": equipmentModelStatePositionArray[b].equipmentStateHistory,
                    "equipmentPositionHistory": equipmentModelStatePositionArray[b].equipmentPositionHistory,
                    "lastPositionDate": LastPosition()[n].date,
                    "lastPositionLat": LastPosition()[n].lat,
                    "lastPositionLon": LastPosition()[n].lon
                }

                equipmentModelStatePositionLastArray.push(equipmentModelStatePositionLastModel);
            }
        }
    }

    const globalCollection = [];

    for (let v = 0; v < LastState().length; v++) {
        for (let c = 0; c < equipmentModelStatePositionArray.length; c++) {
            if (LastState()[v].equipmentId === equipmentModelStatePositionLastArray[c].equipmentId) {

                let globalCollectionModel = {
                    "equipmentId": equipmentModelStatePositionLastArray[c].equipmentId,
                    "modelId": equipmentModelStatePositionLastArray[c].modelId,
                    "equipmentName": equipmentModelStatePositionLastArray[c].equipmentName,
                    "modelName": equipmentModelStatePositionLastArray[c].modelName,
                    "hourlyEarnings": equipmentModelStatePositionLastArray[c].hourlyEarnings,
                    "equipmentStateHistory": equipmentModelStatePositionLastArray[c].equipmentStateHistory,
                    "equipmentPositionHistory": equipmentModelStatePositionLastArray[c].equipmentPositionHistory,
                    "lastPositionDate": equipmentModelStatePositionLastArray[c].lastPositionDate,
                    "lastPositionLat": equipmentModelStatePositionLastArray[c].lastPositionLat,
                    "lastPositionLon": equipmentModelStatePositionLastArray[c].lastPositionLon,
                    "lastStateDate": LastState()[v].date,
                    "lastStateName": LastState()[v].stateName,
                    "lastStateColor": LastState()[v].stateColor
                }

                globalCollection.push(globalCollectionModel);
            }
        }
    }

    return globalCollection;

}

export default CollectionsJoin;