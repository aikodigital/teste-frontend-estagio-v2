import React, { useState } from "react";
import { Content } from "./style";
import { FaArrowDown, FaArrowUp}  from "react-icons/fa";
import ListaOp from "../ListaOp";

interface IButtoEquipament{
    name: string,
    id: string,
}

export default function ButtonsEquipament({name,id}: IButtoEquipament){
    
    const [flecha, setFlecha] = useState(true);

    return(
        <li>
            <Content onClick={()=>{setFlecha(!flecha);}}>
                {name}
                {flecha ? <FaArrowDown/> : <FaArrowUp/>}
            </Content>

            {!flecha &&(
                <ListaOp/>
            )}
        </li>
    );
}