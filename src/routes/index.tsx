import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EquipmentPage } from '../pages/Equipment';
import { EquipmentsPage } from '../pages/Equipments';
import { HomePage } from '../pages/Home';

export const RoutesCustom = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="equipments" element={<EquipmentsPage />} />
        <Route path="equipments/:equipmentId" element={<EquipmentPage />} />
      </Routes>
    </BrowserRouter>
  );
};
