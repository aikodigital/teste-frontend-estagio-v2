import { filterState, takeModelEquipment } from "../assets/helpers"
import * as S from './style'

const InformationEquipment = () => {    
    {filterState("491b983b-950c-4a88-942d-487e99b92540",'Parado')}
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
                <td>{filterState("491b983b-950c-4a88-942d-487e99b92540",'Parado')}</td>
                <td>{filterState("491b983b-950c-4a88-942d-487e99b92540",'Manutenção')}</td>
                <td>{filterState("491b983b-950c-4a88-942d-487e99b92540",'Operando')}</td>
                <td>{takeModelEquipment("491b983b-950c-4a88-942d-487e99b92540").hourlyEarnings[0].value}</td>
            </tr>
          </tbody>
      </S.StyledTable>    
    </>

  )
}

export default InformationEquipment;