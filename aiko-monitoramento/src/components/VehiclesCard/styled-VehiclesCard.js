import styled from 'styled-components'
import { neutralColor, primaryColor } from '../../constants/colors'

export const Container = styled.div`
  border: 1px solid black;
  margin: 8px 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  min-width: 190px;
  min-height: 130px;
  background-color: ${props => props.color};
  cursor: pointer;
  :hover {
  color: ${primaryColor};
  border: ${primaryColor} solid 1px;
  background:#fff;
};
  :active{
    opacity: 0.9;
  }
`
export const Img = styled.img`
  width: 190px;
  height: 130px;
  align-self: center;
  padding: 2px;
`
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  margin: 4px 20px;
`
export const InfoNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ModelName = styled.span`
  font-size: 11px;
`
export const Name = styled.p`
  font-size: 20px;
  font-weight: bolder;
  margin: 0;
`
export const InfoContainerBorder = styled.div`
    border-bottom: 1px solid black;
    background-color: ${neutralColor};
`
export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`
export const StatusName = styled.p`
  font-size: 13px;
    margin: 3px;
`
export const StatusImg = styled.img`
  width: 23px;
  height: 23px;
`