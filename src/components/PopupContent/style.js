import styled from "styled-components";

export const Container = styled.div`
  font-weight: bold;

  h2 {
    font-size: 23px;
  }
  h3,
  p {
    font-size: 18px;
  }
  a {
    font-size: 21px;
  }
`;

export const Status = styled.div`
  display: flex;

  span {
    font-size: 16px;
  }
  div {
    background-color: ${(props) => props.color};
    border-radius: 100%;
    width: 25px;
    height: 25px;
    margin: 0 10px;
  }
`;
