import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Page from "./pages/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:equipmentId/:equipmentPositionDate" element={<Page />} />
        <Route path="/:equipmentId" element={<Page />} />
        <Route path="/" element={<Page />} />
      </Routes>

    </Router>
  )
}

export default App
