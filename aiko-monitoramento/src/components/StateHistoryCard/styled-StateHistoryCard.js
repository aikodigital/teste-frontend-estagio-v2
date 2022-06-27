import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid black;
  width: 97%;
  height: 30px;
  margin: 3px;
  background-color: white;
  display: flex;
  background-color: ${props => props.color}
`
export const Info = styled.span`
  border-right: 1px solid black;
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 3px 7px;
`
export const StatusImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px;
`
export const ImgContainer = styled.div`
  /* margin: 3px; */
  display: flex;
  align-items: center;
`