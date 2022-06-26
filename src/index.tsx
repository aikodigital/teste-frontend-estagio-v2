import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import Rotas from "./rotas"
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
	<React.StrictMode>
		<Rotas />
	</React.StrictMode>
)

reportWebVitals()
