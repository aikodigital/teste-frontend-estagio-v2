import { useSelector } from "react-redux"
import { filterState, takeModelEquipment } from "../assets/helpers"
import { RootState } from "../store"
import * as S from './style'

const InformationEquipment = () => {    
  const idEquipment = useSelector((state: RootState)=>state.IdSlice.id)
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
                <td>{filterState(idEquipment,'Manutenção')}</td>
                <td>{filterState(idEquipment,'Operando')}</td>
                <td>{takeModelEquipment(idEquipment).hourlyEarnings[0].value}</td>
            </tr>
          </tbody>
      </S.StyledTable>    
    </>

  )
}

export default InformationEquipment;