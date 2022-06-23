import React from 'react'

import { MainContainer, VehicleContainer, MapContainer, SettingsContainer } from "./styled-DashboardPage"

const Dashboard = () => {
  return (
    <MainContainer>
      <VehicleContainer>Seleção de Veículos</VehicleContainer>
      <MapContainer>Mapa</MapContainer>
      <SettingsContainer>Filtros e Configurações</SettingsContainer>
    </MainContainer>
  )
}

export default Dashboard