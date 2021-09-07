import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  div{
    display: flex;
    flex-direction: column;
    margin: 15px;
    
    h1{
      font-size: 25px;
      font-weight: 300;
    }
  }
`;
