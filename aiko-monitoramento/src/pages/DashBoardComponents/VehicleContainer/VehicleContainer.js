import React from 'react'

import Logo from "../../../assets/img/logo/aiko.png"

import VehiclesCard from '../../../components/VehiclesCard/VehiclesCard'

import equipament from "../../../constants/data/equipment.json"

import {
  Container,
  LogoBox,
  LogoBoxContainer,
  LogoImg,
  LogoParagraph,
  VehiclesBox
} from "./styled-VehicleContainer"

const VehicleCongainer = () => {

  console.log(equipament);  

  return (
    <Container>
      <LogoBox>
        <LogoBoxContainer>
          <LogoImg src={Logo} alt="" />
          <LogoParagraph>Solução Digital</LogoParagraph>
        </LogoBoxContainer>
      </LogoBox>
      <VehiclesBox>
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
      </VehiclesBox>
    </Container>
  )
}

export default VehicleCongainer