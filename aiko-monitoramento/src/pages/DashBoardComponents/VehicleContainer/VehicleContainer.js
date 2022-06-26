import React from 'react'

import Logo from "../../../assets/img/logo/aiko.png"

import VehiclesCard from '../../../components/VehiclesCard/VehiclesCard'

import equipament from "../../../constants/data/equipment.json"
// import equipamentState from "../../../constants/data/equipmentState.json"
// import equipamentModel from "../../../constants/data/equipmentModel.json"

import {
  Container,
  LogoBox,
  LogoBoxContainer,
  LogoImg,
  LogoParagraph,
  VehiclesBox
} from "./styled-VehicleContainer"

const VehicleCongainer = () => {

  const displayVehicleList = () => 
  {
    const vehicles = equipament.map((vehicle) => 
    {
      return (
        <VehiclesCard 
          key={vehicle.id}
          name={vehicle.name}
          modelId={vehicle.equipmentModelId}
          id={vehicle.id}
        />
      )
    })
    return vehicles
  }

  return (
    <Container>
      <LogoBox>
        <LogoBoxContainer>
          <LogoImg src={Logo} alt="" />
          <LogoParagraph>Solução Digital</LogoParagraph>
        </LogoBoxContainer>
      </LogoBox>
      <VehiclesBox>
        {displayVehicleList()}
      </VehiclesBox>
    </Container>
  )
}

export default VehicleCongainer