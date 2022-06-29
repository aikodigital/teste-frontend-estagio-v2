import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Header from './Components/Header/Header'
import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <main className="App">
      <Header />
      <h1 className='titulo'>Dados dos Equipamentos</h1>
      <Map />
      <Footer />
    </main>
  )
}

export default App