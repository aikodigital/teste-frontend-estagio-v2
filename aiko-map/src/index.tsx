import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./hook/useData";
import "./index.css";
import App from "./pages/App";
import { GlobalStyle } from "./styles/global";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <React.StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </React.StrictMode>
    <GlobalStyle />
  </>
);


