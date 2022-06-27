import { useParams } from 'react-router-dom';
import {
  getEquipmentStateHistoryById,
  getEquipmentStateNameById,
  getEquipmentNameById,
} from '../../lib/getDatas';
import { formatDate } from '../../lib/formatDate';

import classes from './styles.module.css';

export function StatesHistory() {
  const { equipmentId } = useParams();

  const equipmentStateHistory = getEquipmentStateHistoryById(equipmentId);

  return (
    <div className={classes.container}>
      <span>Histórico de estados : {getEquipmentNameById(equipmentId)}</span>
      <div className={classes.content}>
        {equipmentStateHistory[0].states.map((equipment) => (
          <div key={equipment.equipmentStateId}>
            <strong>
              Data: <span>{formatDate(equipment.date)}</span>{' '}
            </strong>
            <strong>
              Estado:{' '}
              <span>
                {getEquipmentStateNameById(equipment.equipmentStateId)}
              </span>
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}
