import React from 'react'

import {
  Container, 
  InfoContainerBorder, 
  InfoContainer, 
  Name,
  Status, 
  Img
} from "./styled-VehiclesCard"

  import Cargo from "../../assets/img/vehicles/cargo.png"
  import Craw from "../../assets/img/vehicles/craw.png"
  import Harvester from "../../assets/img/vehicles/harvtester.png"

  import Operating from "../../assets/img/status/operating.png"
  import Maintenance from "../../assets/img/status/maintenance.png"
  import Paused from "../../assets/img/status/paused.png"

  import equipamentModel from "../../constants/data/equipmentModel.json"

const VehiclesCard = ({ name, modelId }) => {

  const findModel = (modelNumber) => 
    {
      const modelResult = equipamentModel.find((model) => {
        return modelNumber === model.id
      })      
      return modelResult.name
    }

  const modelImg = (name) => 
    {
      switch (name) {
        case "Caminhão de carga":
          return Cargo
        case "Garra traçadora":
          return Craw
        case "Harvester":
          return Harvester
      }
    }

  const modelName = findModel(modelId)

  return (
    <Container>
      <InfoContainerBorder>
        <InfoContainer>
          <Name>{name}</Name>
          <Status src={Operating} alt="status" title='status' />
        </InfoContainer>
      </InfoContainerBorder>
      <Img src={modelImg(modelName)} alt={modelName} title={modelName}/>
    </Container>
  )
}

export default VehiclesCard