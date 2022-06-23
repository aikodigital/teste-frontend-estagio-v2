import React from "react";
import { Content } from "./style";

interface IButtoEquipament{
    name: string,
    id: string,
}


export default function ButtonsEquipament({name,id}: IButtoEquipament){

    return(
        <li>
            <Content>
                {name}
            </Content>
        </li>
    );
}