import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Mapteste } from './pages/mapteste';
import { View } from './pages/View/View';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/map' element={<Mapteste />} />
      </Routes>
    </div>
  );
}

export default App;
