import React, { useState } from 'react'

import VehicleContainer from './DashBoardComponents/VehicleContainer/VehicleContainer'
import MappingContainer from './DashBoardComponents/MapContainer/MappingContainer'
import SettingsContainer from './DashBoardComponents/SettingsContainer/SettingsContainer'

import { MainContainer } from "./styled-DashboardPage"

const Dashboard = () => {

  const [selected, setSelected] = useState("")

  const getSelectedVehicle = (id) => 
  {
    setSelected(id)
  }

  const clearSelectedVehicle = () => {
    setSelected("")
  }

  return (
    <MainContainer>
      <VehicleContainer 
        getId={getSelectedVehicle}
      />
      
      <MappingContainer 
        selected={selected}
        clear={clearSelectedVehicle}
        getId={getSelectedVehicle}
      />

      <SettingsContainer
        selected={selected}
      />
    </MainContainer>
  )
}

export default Dashboard