import React from 'react'

import VehicleContainer from './DashBoardComponents/VehicleContainer/VehicleContainer'
import MapContainer from './DashBoardComponents/MapContainer/MapContainer'
import SettingsContainer from './DashBoardComponents/SettingsContainer/SettingsContainer'

import { MainContainer } from "./styled-DashboardPage"

const Dashboard = () => {
  return (
    <MainContainer>

      <VehicleContainer />
      <MapContainer />
      <SettingsContainer />

    </MainContainer>
  )
}

export default Dashboard