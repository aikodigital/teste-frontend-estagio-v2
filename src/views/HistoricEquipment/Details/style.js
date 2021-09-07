import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  title {
    display: flex;
    font-size: 34px;

    p {
      font-weight: bold;
    }
  }
`;

export const Content = styled.div`
  margin: 10px 25px;
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 100%;
  `;

export const Earnings = styled.div`
    margin: 10px 0;
    padding: 15px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    border-radius: 15px;
  div{
    margin: 15px 0;
    font-size: 20px;
  }
  img{
    width: 20px;
    margin: 0 15px;
  }
`;
