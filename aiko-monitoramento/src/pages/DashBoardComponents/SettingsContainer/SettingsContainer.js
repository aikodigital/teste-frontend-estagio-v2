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
        <p key={index}>{state.date}</p>
      )
    })
    return states
  }

  return (
    <Container>
      <SettingsBox>
        <StatesContainer>
          {/* {stateHistory && displayStateHistory()} */}
          <StateHistoryCard />
          <StateHistoryCard />
          <StateHistoryCard />
          <StateHistoryCard />
          <StateHistoryCard />
          <StateHistoryCard />
          <StateHistoryCard />
        </StatesContainer>
      </SettingsBox>
    </Container>
  )
}

export default SettingsContainer