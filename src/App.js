import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Map from './components/Map/Map'
import StateHistory from './components/StateHistory/StateHistory'
import StatesHistoryPage from './components/StatesHistoryPage/StatesHistoryPage'
import PositionsHistory from './components/PositionsHistory/PositionsHistory'
import PositionsHistoryPage from './components/PositionsHistoryPage/PositionsHistoryPage' 

const equipment = require('./data/equipment.json')

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Map />} />
        {
          equipment.map((item, index) => {
            return (
              <Route key={index} path={'/states/' + item.name} element={<StateHistory index={index} />} />
            )
          })
        }
        {
          equipment.map((item, index) => {
            return (
              <Route key={index} path={'/positions/' + item.name} element={<PositionsHistory index={index} />} />
            )
          })
        }
        <Route path='/states-history' element={<StatesHistoryPage />} />
        <Route path='/positions-history' element={<PositionsHistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
