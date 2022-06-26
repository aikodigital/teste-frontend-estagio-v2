import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useData } from "../../hook/useData";
import Buttons from "../Buttons";
import ButtonsStatus from "../ButtonsStatus";
import { Titulo } from "./style";

interface ISideSta{
    CloseInfoEquip(aux:boolean): void
}


export default function SideStates({CloseInfoEquip}:ISideSta){
    const {sideData, sideStateData} = useData();

    return (
        <>
            
            <Titulo>Historico de Estados</Titulo>
            <ul>
                {sideStateData?.states.map((equip, index) =>{  
                    return (<ButtonsStatus key={index} date={equip.date} equipmentStateId={equip.equipmentStateId}/>);
                            }
                    )}
            </ul>
            <Buttons ClickFunction={() => {CloseInfoEquip(false);}} >
                <FaArrowLeft/>
                Voltar
            </Buttons>
        </>
    );
}