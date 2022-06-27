import React from "react";
import { FaArrowRight } from "react-icons/fa";
import LastPositions from "../../services/LastPositions";
import Buttons from "../Buttons";
import { Texto, Titulo } from "./style";

interface IinfoBlock{
    id: string,
    name: string,
    produto: string,
    ganho: string
}

export default function InfoBlock({id,name, produto,ganho}:IinfoBlock){
    
    return (
        <div>
            <Titulo sub={false}>Informações</Titulo>
            <Titulo sub={true}>Nome:</Titulo>
            <Texto>{name}</Texto>
            <Titulo sub={true}>Percentual de Produtividade:</Titulo>
            <Texto>{produto}%</Texto>
            <Titulo sub={true}>Ganho por equipamento:</Titulo>
            <Texto>{ganho}</Texto>
            {/*
            <Buttons ClickFunction={() =>{LastPositions(id,name,"ok");}}>
                Posições Anteriores
                <FaArrowRight />
            </Buttons>
            */}
            
        </div>
    );
}