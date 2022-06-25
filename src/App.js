import React from "react";
import Nav from  "./components/Nav";
import MapView from "./pages/MapView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatesHistory from "./pages/StatesHistory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<MapView/>} />            
          <Route path="/states">
            <Route path=":equipmentId" element={<StatesHistory/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//rotas