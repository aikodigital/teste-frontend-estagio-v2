import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid black;
  width: 97%;
  height: 30px;
  margin: 3px;
  background-color: white;
  display: flex;
  border: 1px solid black;
`
export const Info = styled.span`
  border-right: 1px solid black;
  width: 75%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 3px 7px;
`
export const InfoStatus = styled.span`
  border-right: 1px solid black;
  width: 30%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 3px 6px;
  font-size: 10px;
`
export const StatusImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px;
  border: 1px solid black;
`
export const ImgContainer = styled.div`
  /* margin: 3px; */
  display: flex;
  align-items: center;
  background-color: ${props => props.color}
`