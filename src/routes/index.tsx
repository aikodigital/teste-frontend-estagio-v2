import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Map from "../components/Map";
import StateHistory from "../components/StateHistory";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/equipment/:id" element={<StateHistory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
