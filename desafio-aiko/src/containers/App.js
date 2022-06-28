import { Navbar } from "../components/Nav.js";
import { Sidebar } from "../components/Sidebar";
import React from "react";
import { Fleetdata } from "../components/Fleetdata";
import { MapComponent } from "../components/MapComponent";
import { Table } from "../components/Table";
import "./App.css";
import { Footer } from "../components/Footer";

function App() {
  return (
    <div className="justify-center">
      <div className="grid  grid-cols-7 grid-rows-8 gap-0.5 h-full">
        <div className="box row-start-1 row-end-7 col-start-1 col-end-1  ">
          <Sidebar />
        </div>
        <div className="box col-start-1 col-end-8 row-start-1 row-end-1 ">
          <Navbar />
        </div>
        <div
          className="  col-start-2 col-end-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 gap-x-10 p-10"
          style={{ transform: "translate(0px, -18ex)" }}
        >
          <Table />
          <MapComponent />
        </div>
        <div
          className="box row-start-2 row-end-3 col-start-2 col-end-8"
          style={{ transform: "translate(0, -12.5ex)" }}
        >
          <Fleetdata />
        </div>
        <div className="box col-start-1 col-end-8 row-start-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
