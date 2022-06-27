import React from "react";
import statusSerach from "../../services/ServiceEquipmentState";
import { Content } from "./style";

interface IListStatus{
    equipmentStateId: string;
}


export default function ListStatus({equipmentStateId}:IListStatus){

    const statusPronto = statusSerach(equipmentStateId);

    return(
        <Content>
            <li>
                <p>{statusPronto.name}</p>
            </li>
        </Content>
    );
}