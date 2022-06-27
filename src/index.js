import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
import 'leaflet/dist/leaflet.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<App />}>
            </Route>
        </Routes>
    </BrowserRouter >
)