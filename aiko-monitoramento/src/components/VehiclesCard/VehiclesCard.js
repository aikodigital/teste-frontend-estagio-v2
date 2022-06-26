import React from 'react'

import styled from 'styled-components'


import {
  Container, 
  InfoContainerBorder, 
  InfoContainer, 
  Name,
  Img,
  StatusImg,
  StatusContainer,
  StatusName
} from "./styled-VehiclesCard"

  import Cargo from "../../assets/img/vehicles/cargo.png"
  import Craw from "../../assets/img/vehicles/craw.png"
  import Harvester from "../../assets/img/vehicles/harvtester.png"

  import Operating from "../../assets/img/status/operating.png"
  import Maintenance from "../../assets/img/status/maintenance.png"
  import Paused from "../../assets/img/status/paused.png"

  import equipamentModel from "../../constants/data/equipmentModel.json"
  import equipamentStateHistory from "../../constants/data/equipmentStateHistory.json"
  import equipamentState from "../../constants/data/equipmentState.json"

const VehiclesCard = ({ name, modelId, id }) => {

    //Função encontrar o nome do modelo:
    const findModel = (modelNumber) => 
      {
        const modelResult = equipamentModel.find((model) => {
          return modelNumber === model.id
        })      
        return modelResult.name
      }
      
    //Função selecionar imagem:
    const modelImg = (name) => 
      {
        switch (name) {
          case "Caminhão de carga":
            return Cargo
          case "Garra traçadora":
            return Craw
          case "Harvester":
            return Harvester
          default:
            return ""
        }
      }

      //Função encontrar último registro no histórico:
      const findLastState = (id) => 
      {       
        const lastState = equipamentStateHistory.find((vehicle) => {
          return id === vehicle.equipmentId
        })
        return lastState.states[lastState.states.length - 1].equipmentStateId
      }
      
      //Função encontrar informações sobre o histórico:
      const findIdStateDetails = (idState) => 
      {
        const details = equipamentState.find((state) => {
          return idState === state.id
        })
        return details
      }

      const statusImg = (currentState) => 
      {
        switch (currentState){
          case "Operando":
            return Operating
          case "Parado":
            return Paused
          case "Manutenção":
            return Maintenance
          default:
            return ""
        }
      }
      
  const currentState = findIdStateDetails(findLastState(id))
  const modelName = findModel(modelId)

  return (
    <Container color={currentState.color}>
      <InfoContainerBorder>
        <InfoContainer>
          <Name>{name}</Name>
          <StatusContainer>
            <StatusName>{currentState.name}</StatusName>
            <StatusImg src={statusImg(currentState.name)} alt={currentState.name} title={currentState.name} />
          </StatusContainer>
        </InfoContainer>
      </InfoContainerBorder>
      <Img src={modelImg(modelName)} alt={modelName} title={modelName}/>
    </Container>
  )
}

export default VehiclesCard