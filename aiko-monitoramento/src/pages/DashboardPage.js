import React from 'react'

import VehicleCongainer from './DashBoardComponents/VehicleContainer/VehicleContainer'
import MapContainer from './DashBoardComponents/MapContainer/MapContainer'
import SettingsContainer from './DashBoardComponents/SettingsContainer/SettingsContainer'

import { MainContainer } from "./styled-DashboardPage"

const Dashboard = () => {
  return (
    <MainContainer>

      <VehicleCongainer />
      <MapContainer />
      <SettingsContainer />

    </MainContainer>
  )
}

export default Dashboard