import React, { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import MapUnifier from "../../components/MapUnifier";
import Equipamento from "../../data/equipment.json";

/*
"id": "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
        "equipmentModelId": "a3540227-2f0e-4362-9517-92f41dabbfdf",
        "name": "CA-0001"
*/
interface IEquipament{
  id: string,
  equipmentModelId: string,
  name: string
}


export default function App() {

  const [sidebarOp, setSidebarOp] = useState(false);
  const equipamento: IEquipament[] = Equipamento; 

  return (
    <>
      <Sidebar 
        sidebarOp={sidebarOp} 
        AlterSide={() => {setSidebarOp(!sidebarOp);}} 
        equipamento={equipamento}
      />
      <MapUnifier sidebarOp={sidebarOp}/>
    </>
  );
}


