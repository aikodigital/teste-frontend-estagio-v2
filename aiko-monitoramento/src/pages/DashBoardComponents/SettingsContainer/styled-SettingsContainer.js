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
  height: 97%;
  margin: 4%;
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
export const Alert = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 50% 20px;
  color: ${primaryColor}
`