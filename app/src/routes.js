import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Main } from './pages/Main';
import { StatesHistory } from './pages/StatesHistory';
import { Equipments } from './pages/Equipments';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/" element={<Navigate replace to="/main" />} />

      <Route path="states">
        <Route path="histories/:equipmentId" element={<StatesHistory />} />
      </Route>
      <Route path="equipments" element={<Equipments />} />
    </Routes>
  );
}
