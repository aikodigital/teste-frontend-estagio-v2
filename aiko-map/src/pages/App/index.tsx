import React, { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import MapUnifier from "../../components/MapUnifier";


export default function App() {

  const [sidebarOp, setSidebarOp] = useState(false);
  
  return (
    <>
      <Sidebar sidebarOp={sidebarOp} AlterSide={() => {setSidebarOp(!sidebarOp);}}/>
      <MapUnifier sidebarOp={sidebarOp}/>
    </>
  );
}


