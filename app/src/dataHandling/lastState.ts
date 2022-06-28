import equipmentStateHistory from '../data/equipmentStateHistory.json';
import equipmentState from '../data/equipmentState.json';


const LastState = () => {


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


    let stateDateArrMS = [];
    let stateDateArrYMD = [];

    const lastStateArr = [];

    for (let i = 0; i < equipmentStatesHistoryArray.length; i++) {

        for (let j = 0; j < equipmentStatesHistoryArray[i].states.length; j++) {

            stateDateArrMS.push(new Date(equipmentStatesHistoryArray[i].states[j].date).getTime());
            stateDateArrYMD.push(new Date(equipmentStatesHistoryArray[i].states[j].date));

        }

        const lastDateMS = stateDateArrMS.sort();

        for (let k = 0; k < stateDateArrYMD.length; k++) {
            if (lastDateMS[lastDateMS.length - 1] === stateDateArrYMD[k].getTime()) {

                let lastState = {
                "equipmentId": equipmentStatesHistoryArray[i].equipmentId,
                "date": stateDateArrYMD[k],
                "equipmentStateId": equipmentStatesHistoryArray[i].states[k].equipmentStateId,
                "stateColor": equipmentStatesHistoryArray[i].states[k].stateColor,
                "stateName": equipmentStatesHistoryArray[i].states[k].stateName,
                }

                lastStateArr.push(lastState);
            }
        }

        stateDateArrMS = [];
        stateDateArrYMD = [];

    }

    return lastStateArr;

}

export default LastState;