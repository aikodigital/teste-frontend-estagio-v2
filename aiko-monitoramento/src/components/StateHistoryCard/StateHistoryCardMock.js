import React from 'react'

import {
  Container,
  Info,
  InfoStatus,
  ImgContainer
} from "./styled-StateHistoryMock"

const StateHistoryCard = () => {

  return (
    <Container>
      <Info>Data | Hora</Info>
      <InfoStatus>Status</InfoStatus>
      <ImgContainer>
        {/* <StatusImg src={setStatusImg(name)} alt={name} title={name} /> */}
      </ImgContainer>
    </Container>
  )
}

export default StateHistoryCard