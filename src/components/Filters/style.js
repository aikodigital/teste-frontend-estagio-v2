import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  /* flex-direction: ${(props) => props.direction}; */
  width: 85%;
  justify-content: ${(props) => props.justify};
  align-items: center;
  h1 {
    font-size: 30px;
  }
`;

export const Filters = styled.div`
  label {
    font-size: 20px;
    font-weight: bold;
  }
  select {
    margin-left: 15px;
    width: 180px;
    height: 30px;
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    outline: none;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
  }
`;
