import React from 'react'

import {
  Container, 
  InfoContainerBorder, 
  InfoContainer,
  InfoNameContainer, 
  Name,
  ModelName,
  Img,
  StatusImg,
  StatusContainer,
  StatusName
} from "./styled-VehiclesCard"

  import setVehicleImg from "../../services/setImg/setVehicleImg"
  import setStatusImg from '../../services/setImg/setStatusImg'
  import {
    findModel,
    findLastState,
    findIdStateDetails
  } from "../../services/requests/findFunctions"

const VehiclesCard = ({ name, modelId, id, getId, popup }) => {
      
  const currentState = findIdStateDetails(findLastState(id))
  const modelName = findModel(modelId)

  return (
    <Container color={currentState.color} onClick={() => getId(id)}>
      <InfoContainerBorder>
        <InfoContainer>
          <InfoNameContainer>
            <Name>{name}</Name>
            <ModelName hidden={popup}>{modelName}</ModelName>
          </InfoNameContainer>
          <StatusContainer>
            <StatusName>{currentState.name}</StatusName>
            <StatusImg src={setStatusImg(currentState.name)} alt={currentState.name} title={currentState.name}/>
          </StatusContainer>
        </InfoContainer>
      </InfoContainerBorder>
      <Img src={setVehicleImg(modelName)} alt={modelName} title={modelName} />
    </Container>
  )
}

export default VehiclesCard