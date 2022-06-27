import React from 'react'

import {
  Container,
  SettingsBox,
  StatesContainer
} from "./styled-SettingsContainer"

import StateHistoryCard from '../../../components/StateHistoryCard/StateHistoryCard'

import { getStateHistory } from "../../../services/requests/getFunctions"

const SettingsContainer = ({selected}) => {

  const stateHistory = getStateHistory(selected)
  
  const displayStateHistory = () => 
  {
    const states = stateHistory && stateHistory.map((state, index) => {
      return (
        <StateHistoryCard 
          key={index}
          details={state}
        />
      )
    })
    return states
  }

  return (
    <Container>
      <SettingsBox>
        <StatesContainer>
          {stateHistory && displayStateHistory()}
        </StatesContainer>
      </SettingsBox>
    </Container>
  )
}

export default SettingsContainer