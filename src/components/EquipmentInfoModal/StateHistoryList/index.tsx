import { IEquipmentModalData } from '../../../hooks/useEquipmentsInterfaces';
import { Scroll, StateHistoryList, State } from './styles';

interface IStateListProps {
  equipmentModalData: IEquipmentModalData
}

export const StateList = ({ equipmentModalData }: IStateListProps) => {
  return (
    <StateHistoryList>
      <span>Histórico de estados do equipamento</span>
      <Scroll>
        {
          equipmentModalData.stateHistory 
            && equipmentModalData.stateHistory.map((item, indx) => (
              <State key={indx} stateColor={item.state.color}>
                <strong>{item.state.name}</strong>
                <span>{item.date}</span>
              </State>
            ))
        }
      </Scroll>
    </StateHistoryList>
  )
}