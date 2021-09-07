import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  width: auto;
  text-align: center;

  h2 {
    font-size: 20px;
    padding: 10px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 105%;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  margin: 2px 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.primary};
  h3 {
    font-size: 17px;
  }
  div {
    display: flex;
    margin: 0 15px;
    align-items: center;
  }
  .marker {
    width: 35px;
    margin: 0px 7px;
    background-color: #fff;
    border-radius: 100%;
    padding: 5px;
  }
  div div {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin: 0 7px;
  }
`;
export const Models = styled.div``;
export const States = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  width: 35%;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.primary};

  div {
    display: flex;
    margin: 0 15px;
  }
`;
