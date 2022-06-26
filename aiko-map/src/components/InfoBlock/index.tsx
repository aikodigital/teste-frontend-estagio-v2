import React from "react";
import { FaArrowRight } from "react-icons/fa";
import LastPositions from "../../services/LastPositions";
import Buttons from "../Buttons";
import { Titulo } from "./style";

interface IinfoBlock{
    id: string;
    name: string;
}

export default function InfoBlock({id,name}:IinfoBlock){
    
    return (
        <div>
            <Titulo>Informações</Titulo>
            Percentual de Produtividade:
            <br></br>
            Ganho por equipamento:
            <Buttons ClickFunction={() =>{LastPositions(id,name,"ok");}}>
                Posições Anteriores
                <FaArrowRight />
            </Buttons>
        </div>
    );
}