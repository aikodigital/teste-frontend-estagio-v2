import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  width: 80vw;
  margin: 30px auto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    i{
      margin-top: 40px;
      border-radius: 100%;
      background-color: #fff;
      padding: 5px;
      cursor: pointer;
      opacity: 0.8;
      transition: all ease 0.5s;
      
      &:hover{
        opacity: 1;
        transform: rotate(720deg) scale(1.2);
      }
    }
    #settings{
      width: 25px;
      height: 23px;
    }
  }
`;
