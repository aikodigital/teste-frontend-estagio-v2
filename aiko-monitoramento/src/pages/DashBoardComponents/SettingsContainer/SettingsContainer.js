import React from 'react'

import {
  Container,
  SettingsBox
} from "./styled-SettingsContainer"

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
        {stateHistory && displayStateHistory()}
      </SettingsBox>
    </Container>
  )
}

export default SettingsContainer