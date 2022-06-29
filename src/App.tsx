import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapLeaflet from "./components/MapLeaflet";
import StatesHistory from "./components/StatesHistory";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapLeaflet />} />
          <Route path="/:equipmentId" element={<StatesHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
