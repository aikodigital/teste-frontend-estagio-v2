import React from 'react'

import VehicleContainer from './DashBoardComponents/VehicleContainer/VehicleContainer'
import MappingContainer from './DashBoardComponents/MapContainer/MappingContainer'
import SettingsContainer from './DashBoardComponents/SettingsContainer/SettingsContainer'

import { MainContainer } from "./styled-DashboardPage"

const Dashboard = () => {
  return (
    <MainContainer>

      <VehicleContainer />
      <MappingContainer />
      <SettingsContainer />

    </MainContainer>
  )
}

export default Dashboard