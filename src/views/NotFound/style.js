import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
  }
  p {
    font-size: 50px;
  }
  a {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    padding: 10px 15px;
    border-radius: 15px;
    font-size: 30px;
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.8;
    transition: opacity ease 0.5s;
    -webkit-transition: opacity ease 0.5s;
  }
  a:hover {
    opacity: 1;
  }
`;
