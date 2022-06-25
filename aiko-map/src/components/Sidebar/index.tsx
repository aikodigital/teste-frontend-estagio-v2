import React, { useContext, useState } from "react";
import { Container, Content, ButaoExpand,Titulo } from "./style";
import {  FaBars }  from "react-icons/fa";
import ButtonsEquipament from "../ButtonsEquipament";

interface IEquipament{
    id: string,
    equipmentModelId: string,
    name: string
  }
interface ISidebar{
    sidebarOp: boolean,
    AlterSide():void,
    equipamento:IEquipament[]
}

export default function Sidebar({
    sidebarOp, 
    AlterSide,
    equipamento 
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

                </button>          
            </ButaoExpand>
            <Content>
            {sidebarOp && (
              <>
                <Titulo>Equipamentos</Titulo>
                <ul>
                    {equipamento.map(equip => 
                        <ButtonsEquipament 
                            key={equip.id} 
                            name={equip.name} 
                            id={equip.id}
                        />
                    )}
                </ul>
              </>
            )}
            </Content>
         
        </Container>
        </>
    );
}


/*
{posicoes.map((posicao) => 
            // eslint-disable-next-line react/jsx-key
            <Marker position={{ 
                lat:  posicao.positions[0].lat,
                lng:  posicao.positions[0].lon
              }} />   
          )}
*/