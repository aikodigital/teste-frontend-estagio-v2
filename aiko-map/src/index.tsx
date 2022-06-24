import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import { GlobalStyle } from "./styles/global";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <GlobalStyle />
  </>
);


