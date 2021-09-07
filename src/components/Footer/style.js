import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content:center;
  font-size: 20px;
  font-weight: 600;
`;
