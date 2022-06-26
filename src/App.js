import { Nav } from '../src/components/Nav/index'
import { Map } from '../src/components/Map/index'
import { StatesHistory } from './components/StatesHistory'
import { Footer } from '../src/components/Footer/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/states">
          <Route path=":equipmentId" element={<StatesHistory />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
