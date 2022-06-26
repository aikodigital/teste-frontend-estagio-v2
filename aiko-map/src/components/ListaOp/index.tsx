import React from "react";
import { useData } from "../../hook/useData";
import { Content } from "./style";

interface IListaOP{
    id: string;
    CloseInfoEquip(aux:boolean): void;
}

export default function ListaOp({id, CloseInfoEquip}:IListaOP){

    const {MudaSideStateData} = useData();
    
    return(
        <Content>
            <li>
                <button onClick={() => {
                        MudaSideStateData(id);
                        CloseInfoEquip(true);
                    }}>
                    Informações
                </button>
            </li>
        </Content>
    );
}