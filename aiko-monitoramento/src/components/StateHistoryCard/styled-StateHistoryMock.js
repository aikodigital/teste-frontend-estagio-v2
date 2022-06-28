import styled from 'styled-components'

import { neutralColor, primaryColor } from '../../constants/colors'

export const Container = styled.div`
  border: 1px solid black;
  width: 99%;
  height: 30px;
  /* margin: 3px; */
  background-color: ${primaryColor};
  color: white;
  display: flex;
  border: 1px solid black;
  position: sticky;
  top: 0;
`
export const Info = styled.span`
  border-right: 1px solid black;
  width: 50%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 7px;
  font-size: 20px;
  margin-left: 10px;
`
export const InfoStatus = styled.span`
  border-right: 1px solid black;
  width: 30%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 6px;
  font-size: 20px;
`
export const ImgContainer = styled.div`
  /* margin: 3px; */
  display: flex;
  justify-content: center
`