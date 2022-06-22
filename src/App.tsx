import { Fragment } from 'react'
import Map from './Components/Map'
import NavMenu from './Components/NavMenu'
import PositionEquipment from './Components/PositionEquipment'
import TabelState from './Components/TabelState'


function App() {

  return (
    <Fragment>
      <NavMenu/>
      <Map>
        <PositionEquipment/>
      </Map>
      <TabelState/>
    </Fragment>

  )
}

export default App
