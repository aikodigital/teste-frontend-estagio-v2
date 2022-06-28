import styled from "styled-components"

import {
  MapContainer
} from 'react-leaflet'

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
  height: 70%;
  margin: 1.5%;
`
export const CustomMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`