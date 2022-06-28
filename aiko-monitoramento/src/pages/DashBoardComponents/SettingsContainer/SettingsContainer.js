import React from 'react'

import {
  Container,
  SettingsBox,
  StatesContainer,
  Alert
} from "./styled-SettingsContainer"

import StateHistoryCard from '../../../components/StateHistoryCard/StateHistoryCard'
import StateHistoryCardMock from "../../../components/StateHistoryCard/StateHistoryCardMock"

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
          <StateHistoryCardMock />
        <StatesContainer>
          {stateHistory ? displayStateHistory() : 
            <Alert>Selecione um veículo no painel direito para visualizar seu histórico.</Alert>
          }
        </StatesContainer>
      </SettingsBox>
    </Container>
  )
}

export default SettingsContainer