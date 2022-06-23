import { Navbar } from "../components/Nav";
import { Sidebar } from "../components/Sidebar";
import React from "react";
import { Fleetdata } from "../components/Fleetdata";
import { MapComponent } from "../components/MapComponent";
import { Table } from "../components/Table";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="row-span-3 ...">
          <Sidebar />
        </div>
        <div className="col-span-4 ..." style={{ height: "200px" }}>
          <Fleetdata />
        </div>
        <div className="row-span-2 col-span-2  ... ">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MapComponent />
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
