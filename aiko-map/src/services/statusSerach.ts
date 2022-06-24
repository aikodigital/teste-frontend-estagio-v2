import React from "react";
import equipmentState from "../data/equipmentState.json";


export default function statusSerach(statusId: string){

    return equipmentState.find(item => item.id === statusId);
}