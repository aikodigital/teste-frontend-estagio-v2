import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp}  from "react-icons/fa";
import Buttons from "../Buttons";
import { Container, ListBtn } from "./style";
import ListStatus from "../ListStatus";
import statusSerach from "../../services/ServiceEquipmentState";

interface IBTN{
    date: string;
    equipmentStateId: string
}

export default function ButtonsStatus({date,equipmentStateId}:IBTN){

    const statusPronto = statusSerach(equipmentStateId);
    const [flecha, setFlecha] = useState(true);
    const date2 = new Date(date);
    const date3 = date2.toLocaleDateString().toString(); 
    const hora = () => {
        if(date2.getHours() >= 10){
            return date2.getHours().toString();
        }else{
            return "0"+date2.getHours().toString();
        }
    };

    const minutos = () => {
        if(date2.getMinutes()  < 10){
            return "0"+date2.getMinutes().toString();
        }else{
            return date2.getMinutes().toString();
        }
    };
    

    return(
        <Container>
            <Buttons  ClickFunction={() => {setFlecha(!flecha);}}>
                <>{date3+"--"+hora()+":"+minutos()}</>   
                {flecha ? <FaArrowDown/> : <FaArrowUp/>}
            </Buttons>
            {!flecha && (
                <ListBtn>
                    <li style={{color:`${statusPronto.color}`}}>
                        <p>{statusPronto.name}</p>
                    </li>
                </ListBtn>
            )}
        </Container>
    );
}