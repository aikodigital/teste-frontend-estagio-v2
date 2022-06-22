import React, { useContext, useState } from "react";
import { Container, Content, ButaoExpand, ButaoSair, UserInfo } from "./style";
import { FaUser, FaBookOpen, FaBars, FaConnectdevelop, FaHome, FaPlus, FaBook, FaCog, FaSignInAlt}  from "react-icons/fa";

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
                   <li>
                      
                           <FaHome/>
                           {sidebarOp && (<span className="aberto"> Home</span>)}
                       
                       {!sidebarOp && (<span className="tooltip" >Home</span>)}
                       
                   </li>
                   <li>
                      
                           <FaPlus/>
                           {sidebarOp && (<span className="aberto">Nova Entrada</span>)}
                      
                       {!sidebarOp && (<span className="tooltip" >Nova Entrada</span>)}
                   </li>
                   <li>
                      
                           <FaBookOpen/>
                           {sidebarOp && (<span className="aberto">Entradas Salvas</span>)}
                      
                       {!sidebarOp && (<span className="tooltip" >Entradas Salvas</span>)}
                   </li>
                   <li>
                      
                           <FaConnectdevelop/>
                           {sidebarOp && (<span className="aberto" >Nova Operação</span>)}
                      
                       {!sidebarOp && (<span className="tooltip" >Nova Operação</span>)}
                   </li>
                   <li>
                       
                           <FaBook/>
                           {sidebarOp && (<span className="aberto">Histórico</span>)}
                      
                       {!sidebarOp && (<span className="tooltip" >Histórico</span>)}
                   </li>
                   <li>
                     
                           <FaCog/>
                           {sidebarOp && (<span className="aberto" >Configurações</span>)}
                      
                       {!sidebarOp && (<span className="tooltip" >Configurações</span>)}
                   </li>
                
               </ul>
           </Content>
         
        </Container>
        </>
    );
}