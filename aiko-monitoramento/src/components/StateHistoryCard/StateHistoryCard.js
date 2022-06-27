import React from 'react'

import {
  Container, 
  Info
} from "./styled-StateHistoryCard"

import setStatusImg from '../../services/setImg/setStatusImg'

const StateHistoryCard = () => {
  return (
    <Container>
      <Info>Data</Info>
      <Info>Hora</Info>
      <img src={setStatusImg("")} alt="" />
    </Container>
  )
}

export default StateHistoryCard