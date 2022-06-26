import { useEffect } from 'react';
import './styles.scss'
import logo from '/images/aiko.png'

export const MenuItems = {
    menuMap: 'menuMap',
    menuEquip: 'menuEquip'
};

export function Sidebar({ selectedMenu, setSelectedMenu }) {
    useEffect(() => {
        const elements = document.querySelectorAll('.sidebar-menu-item');
        elements.forEach((e) => {
            if(e.id === selectedMenu) {
                e.classList.add('sidebar-selected-menu-item');
            }
            if(e.classList.contains('sidebar-selected-menu-item') && e.id !== selectedMenu) {
                e.classList.remove('sidebar-selected-menu-item');
                
            }
        });
    }, [selectedMenu]);

    function onClickMenu(e) {
        e.preventDefault();
        setSelectedMenu(e.target.id)
    }

    return (
        <aside className='sidebar'>
            <div className="sidebar-content">
                <div className="logo-content">
                    <a href="#"><img src={logo} alt="Aiko Logo Imagem" /></a>
                </div>
                <div className="navigation-menu">
                    <ul>
                        <li><a id={MenuItems.menuMap} className='sidebar-menu-item' onClick={onClickMenu}><i className="fa-solid fa-location-dot"></i> <span>Mapa</span></a></li>
                        <li><a id={MenuItems.menuEquip} className='sidebar-menu-item' onClick={onClickMenu}><i className="fa-solid fa-truck"></i> <span>Equipamentos</span></a></li>               
                    </ul>
                </div>   
            </div>
        </aside>
    );
}