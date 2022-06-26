import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid black;
  margin: 8px 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  min-width: 190px;
  min-height: 130px;
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
  margin: 0 20px;
`
export const Name = styled.p`
  font-size: 20px;
  font-weight: bolder;
`
export const InfoContainerBorder = styled.div`
    border-bottom: 1px solid black;
`
export const Status = styled.img`
  width: 23px;
  height: 23px;
`