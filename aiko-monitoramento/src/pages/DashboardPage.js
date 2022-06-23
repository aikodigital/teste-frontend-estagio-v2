import React from 'react'
import styled from 'styled-components'

import Logo from "../assets/img/aiko.png"

import { neutralColor } from '../constants/colors'

import { MainContainer, VehicleContainer, MapContainer, SettingsContainer } from "./styled-DashboardPage"

const LogoBox = styled.div`
  background-color: ${neutralColor};
  width: 90%;
  height: 80px;
  margin: 4% 4% 0% 4%;
  display: flex;
  justify-content: center;
  align-items: center;

`
const LogoBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
`
const LogoImg = styled.img`
  width: 80%;
  margin: 2%;
`
const LogoParagraph = styled.p`
  width: 80%;
  font-size: 0.8vw;
  color: #2596be;
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
  width: 93%;
  height: 98%;
  margin: 3%;
`

const Dashboard = () => {
  return (
    <MainContainer>
      <VehicleContainer>
        <LogoBox>
          <LogoBoxContainer>
            <LogoImg src={Logo} alt="" />
            <LogoParagraph>Soluções Tecnológicas</LogoParagraph>
          </LogoBoxContainer>
        </LogoBox>
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