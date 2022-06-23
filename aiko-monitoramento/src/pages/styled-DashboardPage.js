import styled from "styled-components"

import { neutralColor, primaryColor } from '../constants/colors'

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`
export const VehicleContainer = styled.div`
  background-color: ${primaryColor};
  flex-grow: 1.6;
  max-width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MapContainer = styled.div`
  background-color: ${neutralColor};
    flex-grow: 9;
    display: flex;
`
export const SettingsContainer = styled.div`
  background-color: ${primaryColor};
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`