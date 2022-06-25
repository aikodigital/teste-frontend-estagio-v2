import { useSelector } from "react-redux"
import { earnedEquipment, filterState } from "../assets/helpers"
import { RootState } from "../store"
import * as S from './style'

const InformationEquipment = () => {    
  const idEquipment = useSelector((state: RootState)=>state.IdSlice.id)
  let operation = filterState(idEquipment,'Operando')
  let support = filterState(idEquipment,'Manutenção')
  return (
    <>
      <S.StyledTable striped borderless responsive hover variant='light'>
          <thead>
              <tr>
                  <th>Dias Parados</th>
                  <th>Dias Manutenção</th>
                  <th>Dias Operando</th>
                  <th>Ganho por equipamento</th>
              </tr>
          </thead>
          <tbody>
            <tr>
                <td>{filterState(idEquipment,'Parado')}</td>
                <td>{support}</td>
                <td>{operation}</td>
                <td>R$ {earnedEquipment(idEquipment,operation,support)}</td>
            </tr>
          </tbody>
      </S.StyledTable>    
    </>

  )
}

export default InformationEquipment;