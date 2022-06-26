import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import MapUnifier from "../../components/MapUnifier";
import Equipamento from "../../data/equipment.json";
import { useData } from "../../hook/useData";

interface IEquipament{
  id: string,
  equipmentModelId: string,
  name: string
}


export default function App() {
  const {MapaInicial,MudaSideStateData} = useData();

  const [dataStart, setDataStart] = useState(true);
  const [defaultData, setDefaultData] = useState<IEquipament[]>();
  
  const [infoEquip, setInfoEquip] = useState(false);
  
  const [sidebarOp, setSidebarOp] = useState(true);
  const equipamento: IEquipament[] = Equipamento; 

 
  
  return (
    <>
      <Sidebar 
        sidebarOp={sidebarOp} 
        AlterSide={() => {setSidebarOp(!sidebarOp);}} 
        equipamento={defaultData}
        infoEquip={infoEquip}
        CloseInfoEquip={setInfoEquip}
      />
     <MapUnifier 
          sidebarOp={sidebarOp} 
          AlterSide={(id:string,name:string) => {
              MudaSideStateData(id,name);
              setSidebarOp(true);
              setInfoEquip(true);
              //MudaSideStateData(id);
              }
            }
          
          defaultData={defaultData}
          
          />
      
        
    </>
  );
}


