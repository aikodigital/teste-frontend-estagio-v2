import styled from 'styled-components'

import { primaryColor, neutralColor } from '../../../constants/colors'

export const Container = styled.div`
  background-color: ${primaryColor};
    flex-grow: 2;
    max-width: 330px;
    min-width: 320px;;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${neutralColor};
  width: 94%;
  height: 98%;
  margin: 5%;
  padding: 1%;
  overflow: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
`
export const StatesContainer = styled.div`
  margin: 4px;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`