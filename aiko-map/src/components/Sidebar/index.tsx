import React, { useContext, useState } from "react";
import { Container, Content, ButaoExpand,Titulo } from "./style";
import {  FaBars }  from "react-icons/fa";
import ButtonsEquipament from "../ButtonsEquipament";
import StatusInfoUnifier from "../StatusInfoUnifier";
import { useData } from "../../hook/useData";
interface IEquipament{
    id: string,
    equipmentModelId: string,
    name: string
  }
interface ISidebar{
    sidebarOp: boolean,
    AlterSide():void,
    equipamento:IEquipament[],
    infoEquip,
    CloseInfoEquip(aux:boolean): void
}

export default function Sidebar({
    sidebarOp, 
    AlterSide,
    equipamento,
    infoEquip,
    CloseInfoEquip
}: ISidebar) : JSX.Element{

    const {sideData} = useData();

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

            <Content>
            {sidebarOp && (
              <>
              {!infoEquip ? (
                <>
                    <Titulo>Equipamentos</Titulo>
                    <ul>
                        {sideData?.map(equip => 
                            <ButtonsEquipament 
                                key={equip?.id} 
                                name={equip?.name} 
                                id={equip?.id}
                                lat={equip?.positions.lat}
                                lon={equip?.positions.lon}
                            />
                        )}
                    </ul>
                </>
                ) : (
                    <>
                        <StatusInfoUnifier CloseInfoEquip={CloseInfoEquip}/>
                    </>
                )}
                
              </>
            )}
            </Content>
         
        </Container>
        </>
    );
}


