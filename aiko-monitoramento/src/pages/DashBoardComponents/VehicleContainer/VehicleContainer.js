import React from 'react'

import Logo from "../../../assets/img/aiko.png"

import {
  Container,
  LogoBox,
  LogoBoxContainer,
  LogoImg,
  LogoParagraph,
  VehiclesBox
} from "./styled-VehicleContainer"

const VehicleCongainer = () => {
  return (
    <Container>
      <LogoBox>
        <LogoBoxContainer>
          <LogoImg src={Logo} alt="" />
          <LogoParagraph>Solução Digital</LogoParagraph>
        </LogoBoxContainer>
      </LogoBox>
      <VehiclesBox>Vehicle Cards</VehiclesBox>
    </Container>
  )
}

export default VehicleCongainer