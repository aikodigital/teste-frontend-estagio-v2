import equipmentPosition from '../data/equipmentPositionHistory.json';


const LastPosition = () => {

    let positionDateArrMS = [];
    let positionDateArrYMD = [];

    const lastPositionArr = [];

    for (let i = 0; i < equipmentPosition.length; i++) {

        for (let j = 0; j < equipmentPosition[i].positions.length; j++) {

            positionDateArrMS.push(new Date(equipmentPosition[i].positions[j].date).getTime());
            positionDateArrYMD.push(new Date(equipmentPosition[i].positions[j].date));

        }

        const lastDateMS = positionDateArrMS.sort();

        for (let k = 0; k < positionDateArrYMD.length; k++) {
            if (lastDateMS[lastDateMS.length - 1] === positionDateArrYMD[k].getTime()) {
    
                let lastPosition = {
                "equipmentId": equipmentPosition[i].equipmentId,
                "date": positionDateArrYMD[k],
                "lat": equipmentPosition[i].positions[k].lat,
                "lon": equipmentPosition[i].positions[k].lon
                }

                lastPositionArr.push(lastPosition);
            }
        }

        positionDateArrMS = [];
        positionDateArrYMD = [];

    }

    return lastPositionArr;

}

export default LastPosition;