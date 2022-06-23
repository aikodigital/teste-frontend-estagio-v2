import styled from "styled-components"

import { neutralColor, primaryColor } from '../constants/colors'

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`
export const VehicleContainer = styled.div`
  background-color: ${primaryColor};
  flex-grow: 1.3;
`
export const MapContainer = styled.div`
  background-color: ${neutralColor};
    flex-grow: 9;
`
export const SettingsContainer = styled.div`
  background-color: ${primaryColor};
    flex-grow: 2;

`