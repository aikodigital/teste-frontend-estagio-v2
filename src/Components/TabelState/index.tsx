import React from 'react';
import { Container, Table } from 'react-bootstrap';
import {  DataConvert, EquipmentStateHistory } from '../assets/helpers';
import * as S from './style'

const TabelState: React.FC = () => {

  return (
    <S.StyledContainer>    
      <S.StyledH5>Historico de Estado</S.StyledH5>
      <S.StyledTable striped borderless responsive hover variant='light'>
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>Estado</th>
              </tr>
          </thead>
          <tbody>
            {EquipmentStateHistory("491b983b-950c-4a88-942d-487e99b92540").map((item, index)=>(
              <tr key={index}>
                <S.StyledTd color= 'black'>{DataConvert(item.date)}</S.StyledTd>
                <S.StyledTd color={item.name} >{item.name}</S.StyledTd>
              </tr>
            ))}
          </tbody>
      </S.StyledTable>    
    </S.StyledContainer>
  );
}

export default TabelState;