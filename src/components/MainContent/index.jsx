import { useState } from 'react';
import { DisplayContent } from '../DisplayContent';
import { EquipmentTable } from '../EquipmentTable';
import { MapLeaflet } from '../MapLeaflet';
import { MenuItems } from '../Sidebar';
import './styles.scss'

export function MainContent({ selectedMenu, setSelectedMenu }) {
    const [initialPosition, setInitialPosition] = useState({
        latitude: -19.151801,
        longitude: -46.007759
    });
    const [zoom, setZoom] = useState(11);

    function selectMenu(selectedMenu) {
        switch(selectedMenu) {
            case MenuItems.menuMap: {
                return (
                    <DisplayContent title={'Mapa'} reactComponent={<MapLeaflet initialPosition={initialPosition} zoom={zoom}/>} />
                )
            }
            case MenuItems.menuEquip: {
                return (
                    <DisplayContent title={'Equipamentos'} reactComponent={<EquipmentTable setSelectedMenu={setSelectedMenu} setInitialPosition={setInitialPosition} setZoom={setZoom}/>} />
                )
            }
        }
    }

    return (
        <main className='main-content'>
            { selectMenu(selectedMenu) }
        </main>
    );
}