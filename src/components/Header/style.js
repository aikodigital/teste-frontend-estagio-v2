import styled from "styled-components";

export const Container = styled.header`
  height: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 60px;
  }
  label {
    margin: 15px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0 15px;
    padding: 15px;
  }
  li a {
    font-size: 27px;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  li.select {
    background-color: ${(props) => props.theme.colors.background};
    width: 100%;
    border-radius: 15px;
    border-top-right-radius: 15px;
  }
`;
