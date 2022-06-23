import React, { useContext, useState } from "react";
import { Container, Content, ButaoExpand, ButaoSair, UserInfo } from "./style";
import { FaUser, FaBookOpen, FaBars, FaConnectdevelop, FaHome, FaPlus, FaBook, FaCog, FaSignInAlt}  from "react-icons/fa";
import ButtonsEquipament from "../ButtonsEquipament";

interface ISidebar{
    sidebarOp: boolean,
    AlterSide():void
}

export default function Sidebar({
    sidebarOp, 
    AlterSide 
}: ISidebar) : JSX.Element{
    
   

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
                    {!sidebarOp && (<span className="tooltip" >Menu</span>)}
                </button>          
            </ButaoExpand>
            <Content>
              <ul>
                <ButtonsEquipament name={"OI"} id={"1"}/>
                <ButtonsEquipament name={"OI"} id={"1"}/>
                <ButtonsEquipament name={"OI"} id={"1"}/>
                <ButtonsEquipament name={"OI"} id={"1"}/>
              </ul>
            </Content>
         
        </Container>
        </>
    );
}