import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Buttons from "../Buttons";
import { Titulo } from "./style";


export default function InfoBlock(){
    return (
        <div>
            <Titulo>Informações</Titulo>
            Percentual de Produtividade:
            <br></br>
            Ganho por equipamento:
            <Buttons ClickFunction={() =>{console.log("OLA");}}>
                Posições Anteriores
                <FaArrowRight />
            </Buttons>
        </div>
    );
}