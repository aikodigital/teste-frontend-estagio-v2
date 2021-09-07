import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: -1000px;
  left: 0px;
  z-index: 1000;
  transition: all ease 0.4s;
  opacity: 0;
  border-radius: 100%;
  transform: scale(0);
  &.show {
    border-radius: 0;
    transform: scale(1);
    opacity: 1;
    top: 0;
    left: 0;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.colors.text};
  
  #close{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;

    img{
      width: 30px;
    }
  }
`;
