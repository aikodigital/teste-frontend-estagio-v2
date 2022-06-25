import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import MapUnifier from "../../components/MapUnifier";
import Equipamento from "../../data/equipment.json";


interface IEquipament{
  id: string,
  equipmentModelId: string,
  name: string
}


export default function App() {
  const [dataStart, setDataStart] = useState(true);
  const [defaultData, setDefaultData] = useState<IEquipament[]>();
  const [sidebarOp, setSidebarOp] = useState(true);
  const equipamento: IEquipament[] = Equipamento; 



  useEffect(() =>{
    if(dataStart){
      setDefaultData(Equipamento);
    }
  },[dataStart]);
  
  return (
    <>
      <Sidebar 
        sidebarOp={sidebarOp} 
        AlterSide={() => {setSidebarOp(!sidebarOp);}} 
        equipamento={defaultData}
      />
      <MapUnifier 
          sidebarOp={sidebarOp} 
          AlterSide={() => {
              setSidebarOp(!sidebarOp);
              }
            }
            defaultData={defaultData}
          />
        
    </>
  );
}


