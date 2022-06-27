import React, { useContext, useState } from "react";
import { Container, Content, Content2, ButaoExpand,Titulo } from "./style";
import {  FaArrowLeft, FaBars }  from "react-icons/fa";
import ButtonsEquipament from "../ButtonsEquipament";
import { useData } from "../../hook/useData";
import Buttons from "../Buttons";
import ButtonsStatus from "../ButtonsStatus";
import SideStates from "../SideStates";
interface IEquipament{
    id: string,
    equipmentModelId: string,
    name: string
  }
interface ISidebar{
    sidebarOp: boolean,
    AlterSide():void,
    equipamento:IEquipament[],
    infoEquip: boolean,
    CloseInfoEquip(aux:boolean): void
}

export default function Sidebar({
    sidebarOp, 
    AlterSide,
    equipamento,
    infoEquip,
    CloseInfoEquip
}: ISidebar) : JSX.Element{

    const {sideData, sideStateData} = useData();
    

    return(
        <>
         <Container 
            className={sidebarOp 
                        ? "aberto" 
                        : "fechado"}>
            
            <ButaoExpand onClick={() => AlterSide()}>
               <button>
                    <FaBars/>
                    {sidebarOp && (<span className="aberto"> Menu</span>)}

                </button>          
            </ButaoExpand>

            
            {sidebarOp && (
              <>
              {!infoEquip ? (
                <Content>
                    <Titulo>Equipamentos</Titulo>
                    <ul>
                        {sideData?.map(equip => 
                            <ButtonsEquipament 
                                key={equip?.id} 
                                name={equip?.name} 
                                id={equip?.id}
                                lat={equip?.positions.lat}
                                lon={equip?.positions.lon}
                                CloseInfoEquip={CloseInfoEquip}
                            />
                        )}
                    </ul>
                </Content>
                ) : (
                    <Content2>
                        <SideStates CloseInfoEquip={CloseInfoEquip}/>
                    </Content2>   
                )}
                
              </>
            )}
            
         
        </Container>
        </>
    );
}


