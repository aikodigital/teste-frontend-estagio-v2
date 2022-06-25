import React, { useState } from "react";
import { FaArrowDown, FaArrowUp}  from "react-icons/fa";
import ListaOp from "../ListaOp";
import Buttons from "../Buttons";
import { useData } from "../../hook/useData";

interface IButtoEquipament{
    name: string,
    id: string,
    lat:number,
    lon:number
}

export default function ButtonsEquipament({name,id,lat,lon}: IButtoEquipament){
    const {setCenter, setZoom} = useData();
    const [flecha, setFlecha] = useState(true);

    return(
        <li>
            <Buttons ClickFunction={()=>{
                setFlecha(!flecha); 
                setCenter({lat: lat, lng: lon});
                setZoom(13);
            }}>
                {name}
                {flecha ? <FaArrowDown/> : <FaArrowUp/>}
            </Buttons>

            {!flecha &&(
                <ListaOp/>
            )}
        </li>
    );
}