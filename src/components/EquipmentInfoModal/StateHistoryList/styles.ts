import styled from 'styled-components';

import PerfectScrollBar from 'react-perfect-scrollbar'

export const StateHistoryList = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 200px);

  margin-top: 1rem;
`;

export const Scroll = styled(PerfectScrollBar)`
  margin-top: 20px;
  padding-right: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 290px) {
    grid-template-columns: repeat(1, 1fr);
  }

  grid-gap: 15px;
`;

interface IState {
  stateColor: string
}

export const State = styled.div<IState>`
  display: flex;
  flex-direction: column;

  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  border-bottom: solid 1px ${props => props.stateColor};

  span {
    margin-top: 1rem;
    color: #969cB3;
    font-size: 0.8rem;
  }

  strong {
    color: #363f5f;
  }

`;