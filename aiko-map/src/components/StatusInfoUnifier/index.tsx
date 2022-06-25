import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Buttons from "../Buttons";
import ButtonsStatus from "../ButtonsStatus";

interface IStatus{
    CloseInfoEquip(aux: boolean): void
}

export default function StatusInfoUnifier({CloseInfoEquip}:IStatus){

    return (
        <>

            <ButtonsStatus />
            <Buttons ClickFunction={() => {CloseInfoEquip(false);}}>
                <FaArrowLeft/>
                Voltar
            </Buttons>
        </>
    );
}