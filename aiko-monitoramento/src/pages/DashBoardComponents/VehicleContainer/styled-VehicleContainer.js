import styled from "styled-components"

import { neutralColor, primaryColor } from '../../../constants/colors'

export const Container = styled.div`
  background-color: ${primaryColor};
  flex-grow: 1.6;
  max-width: 15%;
  min-width: 230px;;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LogoBox = styled.div`
  background-color: ${neutralColor};
  width: 90%;
  height: 80px;
  margin: 4% 4% 0% 4%;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const LogoBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53%;
`
export const LogoImg = styled.img`
  width: 80%;
  margin: 4%;
`
export const LogoParagraph = styled.p`
  width: 80%;
  /* font-size: 0.9vw; */
  font-size: 15px;
  color: #2596be;
`
export const VehiclesBox = styled.div`
  background-color: ${neutralColor};
  width: 90%;
  height: 90%;
  margin: 5%;
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
`