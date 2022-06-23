import React from 'react'
import styled from 'styled-components'
import { neutralColor } from '../constants/colors'

import { MainContainer, VehicleContainer, MapContainer, SettingsContainer } from "./styled-DashboardPage"

const LogoBox = styled.div`
  background-color: ${neutralColor};
  width: 90%;
  height: 80px;
  margin: 4% 4% 0% 4%;
`
const VehiclesBox = styled.div`
  background-color: ${neutralColor};
  width: 90%;
  height: 90%;
  margin: 5%;
`
const MapBox = styled.div`
  background-color: white;
  width: 100%;
  height: 80%;
  margin: 1.5%;
`
const SettingsBox = styled.div`
  background-color: ${neutralColor};
  width: 90%;
  height: 96%;
  margin: 5%;
`

const Dashboard = () => {
  return (
    <MainContainer>
      <VehicleContainer>
        <LogoBox>Logo</LogoBox>
        <VehiclesBox>Vehicle Cards</VehiclesBox>
      </VehicleContainer>


      <MapContainer>
        <MapBox>Mapa</MapBox>
      </MapContainer>


      <SettingsContainer>
        <SettingsBox>Settings</SettingsBox>
      </SettingsContainer>
    </MainContainer>
  )
}

export default Dashboard