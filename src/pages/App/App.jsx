import { Routes, Route } from 'react-router-dom'
import Navbar from "../../components/Navbar/Navbar"
import HomePage from '../HomePage/HomePage'
import EquipmentsPage from '../EquipmentsPage/EquipmentsPage'
import EquipmentDetailsPage from '../EquipmentDetailsPage/EquipmentDetailsPage'

function App() {
  return (
    <div className="App">
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/equipments" element={<EquipmentsPage />} />
            <Route path="/equipments/:id" element={<EquipmentDetailsPage />} />
          </Routes>
        </main>
    </div>
  )
}

export default App
