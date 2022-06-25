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
    //const [data,setData] = useState(sideStateData);
    
    

    return(
        <Container>
            <Buttons  ClickFunction={() => {setFlecha(!flecha);}}>
                {date}   
                {flecha ? <FaArrowDown/> : <FaArrowUp/>}
            </Buttons>

            {!flecha &&(
                <ListaOp/>
            )}
        </Container>
    );
}