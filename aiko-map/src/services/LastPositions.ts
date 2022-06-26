import React from "react";
import equipmentPositionHistory from "../data/equipmentPositionHistory.json";
import EquipmentPositionHistoryById from "./ServiceEquipmentPositionHistory";
/*
interface TMapData{
        id: string,
        name: string
        statusId: string,
        positions: {
          date: string,
          lat: number,
          lon: number
        }  
}

*/

export default function LastPositions(id,name,statusId){
    const position = equipmentPositionHistory;
    const history =  EquipmentPositionHistoryById(id);
    //console.log(history);
    const resultado = [];
    
    history.positions.map(hist => {
        resultado.push(
            {
                id:id,
                name: name,
                statusId: statusId,
                positions:{
                    date: hist.date,
                    lat: hist.lat,
                    lon: hist.lon 
                }
            }
        );
    });
    

    console.log(resultado);

    return resultado;
}