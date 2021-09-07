import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Maven Pro', sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

`;

export const Template = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 50px;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
  overflow-x: hidden;

  header {
    grid-area: Header;
    background-color: ${(props) => props.theme.colors.primary};
  }

  main {
    grid-area: Main;
  }

  footer {
    grid-area: Footer;
  }
`;
