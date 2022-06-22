import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import MapView from "../pages/MapView";
import StatesHistory from "../pages/HistoryEquip";

function AppRouter(){
    return(
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<MapView/>} />
                    <Route path="/states">
                        <Route path=":equipmentId" element={<StatesHistory/>} />
                    </Route>    
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;