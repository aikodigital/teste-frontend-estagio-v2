import { Route, Routes } from "react-router-dom";

import App from "./App";
import History from "./Components/History";

function Router() {
  return(
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/event" element={<History/>}/>
      <Route path="/event/equipamento/:id" element={<History/>}/>
    </Routes>
  )
}

export default Router