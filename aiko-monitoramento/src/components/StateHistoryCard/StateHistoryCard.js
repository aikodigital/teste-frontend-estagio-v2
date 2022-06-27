import React from 'react'

import {
  Container, 
  Info
} from "./styled-StateHistoryCard"

import setStatusImg from '../../services/setImg/setStatusImg'

const StateHistoryCard = ({details}) => {

  const calendar = {
    dia: details.date.slice(8, 10),
    mes: details.date.slice(5, 7),
    ano: details.date.slice(0, 4),
    hora: details.date.slice(11, 19)
  }
  const {dia, mes, ano, hora} = calendar
  
  const data = `${dia}/${mes}/${ano}`

  return (
    <Container>
      <Info>{data}</Info>
      <Info>{hora}</Info>
      <img src={setStatusImg("")} alt="" />
    </Container>
  )
}

export default StateHistoryCard