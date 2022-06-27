import styled from "styled-components"

import { neutralColor } from "../../../constants/colors"

export const Container = styled.div`
  background-color: ${neutralColor};
    flex-grow: 9;
    display: flex;
`
export const MapBox = styled.div`
  background-color: white;
  width: 100%;
  /* width: 300px; */
  height: 700px;
  margin: 1.5%;
`