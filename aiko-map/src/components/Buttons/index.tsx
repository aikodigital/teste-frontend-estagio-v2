import React from "react";
import {Content} from "./style";

interface IButton{
    ClickFunction(): void ,
    children: React.ReactNode,
}


export default function Buttons({ClickFunction, children}: IButton){
    return (
        <Content onClick={ClickFunction}> 
            {children}
        </Content>
    );
}