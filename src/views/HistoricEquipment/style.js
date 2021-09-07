import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  padding: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivMap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: 20px auto;
  .title {
    text-align: center;
    font-weight: 200; 
  }
  @media (max-width: 1000px) {
    .header {
      width: 150%;
    }
  }
`;