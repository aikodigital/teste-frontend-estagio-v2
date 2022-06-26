import './styles.scss'
import { MainContent } from '../../components/MainContent'
import { useEffect, useState } from 'react'
import { MenuItems, Sidebar } from '../../components/Sidebar'

export function App() {
  const [selectedMenu, setSelectedMenu] = useState(MenuItems.menuMap);

  return (
    <div className="app-container">
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
      <MainContent selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
    </div>
  )
}

