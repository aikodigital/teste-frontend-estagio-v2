import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useData } from "../../hook/useData";
import GanhoEquip from "../../services/GanhoEquip";
import Produtividade from "../../services/Produtividade";
import Buttons from "../Buttons";
import ButtonsStatus from "../ButtonsStatus";
import InfoBlock from "../InfoBlock";
import { Titulo } from "./style";

interface ISideSta{
    CloseInfoEquip(aux:boolean): void
}


export default function SideStates({CloseInfoEquip}:ISideSta){
    const {sideData, sideStateData} = useData();

    const [produto, setProduto] = useState("");
    const [ganho, setGanho] = useState("");

    useEffect(() => {
        setProduto(Produtividade(sideStateData));
        setGanho(GanhoEquip(sideStateData));
    },[sideData]);
    return (
        <>
            <InfoBlock 
                id={sideStateData.equipmentId} 
                name={sideStateData.name} 
                produto={produto}
                ganho={ganho}
            />
            <div>
                <Titulo>Historico de Estados</Titulo>
                <ul style={{marginBottom:"15px"}}>
                    {sideStateData?.states.map((equip, index) =>{  
                        return (<ButtonsStatus key={index} date={equip.date} equipmentStateId={equip.equipmentStateId}/>);
                                }
                        )}
                </ul>
            </div>
            <Buttons ClickFunction={() => {CloseInfoEquip(false);}} >
                <FaArrowLeft/>
                Voltar
            </Buttons>
        </>
    );
}