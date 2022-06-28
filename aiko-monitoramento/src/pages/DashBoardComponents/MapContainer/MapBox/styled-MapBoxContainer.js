import styled from "styled-components"

import {
  MapContainer,
  Popup
} from 'react-leaflet'

export const MapBox = styled.div`
  background-color: white;
  width: 97%;
  /* width: 300px; */
  height: 70%;
  margin: 1.5%;
`
export const CustomMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`
export const CustomPopup = styled(Popup)`
  height: 280px;
  width: 300px;
`