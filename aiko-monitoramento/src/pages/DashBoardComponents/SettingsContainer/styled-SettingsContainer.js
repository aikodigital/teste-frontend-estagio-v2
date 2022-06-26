import styled from 'styled-components'

import { primaryColor, neutralColor } from '../../../constants/colors'

export const Container = styled.div`
  background-color: ${primaryColor};
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SettingsBox = styled.div`
  background-color: ${neutralColor};
  width: 93%;
  height: 98%;
  margin: 3%;
`