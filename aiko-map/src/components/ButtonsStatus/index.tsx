import React, { useState } from "react";
import { FaArrowDown, FaArrowUp}  from "react-icons/fa";
import ListaOp from "../ListaOp";
import Buttons from "../Buttons";



export default function ButtonsStatus(){
    
    const [flecha, setFlecha] = useState(true);

    return(
        <li>
            <Buttons ClickFunction={()=>{setFlecha(!flecha);}}>
                
                {flecha ? <FaArrowDown/> : <FaArrowUp/>}
            </Buttons>

            {!flecha &&(
                <ListaOp/>
            )}
        </li>
    );
}