import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {  DataConvert, EquipmentStateHistory } from '../assets/helpers';
import { RootState } from '../store';
import * as S from './style'

const TabelState: React.FC = () => {

  const idEquipment = useSelector((state: RootState)=>state.IdSlice.id)

  return (
    <S.StyledContainer>    
      <S.StyledH5>Historico de Estado</S.StyledH5>
      <S.StyledTable striped borderless responsive hover variant='light'>
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>ESTADO</th>
              </tr>
          </thead>
          <tbody>
            {EquipmentStateHistory(idEquipment).map((item, index)=>(
              <tr key={index}>
                <S.StyledTd color= 'black'>{DataConvert(item.date)}</S.StyledTd>
                <S.StyledTd color={item.color} >{item.name}</S.StyledTd>
              </tr>
            ))}
          </tbody>
      </S.StyledTable>    
    </S.StyledContainer>
  );
}

export default TabelState;