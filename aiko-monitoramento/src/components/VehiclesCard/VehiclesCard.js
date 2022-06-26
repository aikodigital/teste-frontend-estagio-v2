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

const VehiclesCard = () => {
  return (
    <Container>
      <InfoContainerBorder>
        <InfoContainer>
          <Name>CA-0001</Name>
          <Status src={Operating} alt="status" title='status' />
        </InfoContainer>
      </InfoContainerBorder>
      <Img src={Cargo} alt="caminhão de carga" />
    </Container>
  )
}

export default VehiclesCard