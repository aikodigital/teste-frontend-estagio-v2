import React from 'react'

import {
  Container, 
  Info, 
  InfoStatus,
  ImgContainer,
  StatusImg
} from "./styled-StateHistoryCard"

import setStatusImg from '../../services/setImg/setStatusImg'
import { findIdStateDetails } from '../../services/requests/findFunctions'

const StateHistoryCard = ({details}) => {

  const calendar = {
    dia: details.date.slice(8, 10),
    mes: details.date.slice(5, 7),
    ano: details.date.slice(0, 4),
    hora: details.date.slice(11, 19)
  }
  const {dia, mes, ano, hora} = calendar
  
  const data = `${dia}/${mes}/${ano}`

  const {id, name, color} = findIdStateDetails(details.equipmentStateId)


  return (
    <Container color={color}>
      <Info>{data} | {hora}</Info>
      <InfoStatus>{name}</InfoStatus>
      <ImgContainer color={color}>
        <StatusImg src={setStatusImg(name)} alt={name} title={name} />
      </ImgContainer>
    </Container>
  )
}

export default StateHistoryCard