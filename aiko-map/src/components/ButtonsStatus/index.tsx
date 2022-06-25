import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp}  from "react-icons/fa";
import ListaOp from "../ListaOp";
import Buttons from "../Buttons";
import { Container } from "./style";
import { useData } from "../../hook/useData";

interface IBTN{
    date: string;
}

export default function ButtonsStatus({date}:IBTN){
    
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
    
    
    console.log(date2.toLocaleDateString());

    return(
        <Container>
            <Buttons  ClickFunction={() => {setFlecha(!flecha);}}>
                <>{date3+"--"+hora()+":"+minutos()}</>   
                {flecha ? <FaArrowDown/> : <FaArrowUp/>}
            </Buttons>

            {!flecha &&(
                <ListaOp/>
            )}
        </Container>
    );
}