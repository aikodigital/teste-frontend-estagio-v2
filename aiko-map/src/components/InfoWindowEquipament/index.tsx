import React from "react";

interface IinfoWindowEquipament{
    conteudo: string
}

export default function  InfoWindowEquipament({conteudo}:IinfoWindowEquipament) {
    return (
        <div>
            {conteudo}
        </div>
    );
}