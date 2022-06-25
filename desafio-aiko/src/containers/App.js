import { Navbar } from "../components/Nav";
import { Sidebar } from "../components/Sidebar";
import React from "react";
import { Fleetdata } from "../components/Fleetdata";
import { MapComponent } from "../components/MapComponent";
import { Table } from "../components/Table";
// import "./App.css";
import { Footer } from "../components/Footer";

function App() {
  return (
    <>
      <div className="grid overflow-hidden grid-cols-5 grid-rows-8 gap-0.5 h-full">
        <div className="box row-start-1 row-end-7 col-start-1 ">
          <Sidebar />
        </div>
        <div className="box col-start-2 col-end-6">
          <header className="bg-blue-400 h-48">
            <h2 className="p-2 text-2xl uppercase text-white">Fleet manager</h2>
          </header>
        </div>
        <div className="box col-start-2 col-end-6">
          <MapComponent />
        </div>
        <div className="box row-start-2 row-end-3 col-start-2 col-end-6">
          <Fleetdata />
        </div>
        <div className="box col-start-2 col-end-6">
          <Table />
        </div>
        <div className="box col-start-1 col-end-6">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
