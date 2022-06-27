import { Link } from 'react-router-dom';
import { Marker, Popup } from 'react-leaflet';
import { parseISO } from 'date-fns';
import equipmentPositionHistory from '../../data/equipmentPositionHistory.json';
import {
  getEquipmentNameById,
  getEquipmentModelNameById,
  getEquipmentCurrentStateById,
} from '../../lib/getDatas';

import classes from './styles.module.css';

export function Markers() {
  const orderedEquipmentPostionHistoryByDate = equipmentPositionHistory.map(
    (equipPositionhistory) => {
      return {
        ...equipPositionhistory,
        positions: equipPositionhistory.positions.sort(function (a, b) {
          return parseISO(b.date) - parseISO(a.date);
        }),
      };
    }
  );
  return (
    <>
      {orderedEquipmentPostionHistoryByDate.map((equipPosition) => (
        <Marker
          key={equipPosition.equipmentId}
          position={[
            equipPosition.positions[0].lat,
            equipPosition.positions[0].lon,
          ]}
        >
          <Popup>
            <div className={classes.popup}>
              <strong>
                Nome:{' '}
                <span>{getEquipmentNameById(equipPosition.equipmentId)}</span>
              </strong>{' '}
              <br />
              <strong>
                Modelo:
                <span>
                  {getEquipmentModelNameById(equipPosition.equipmentId)}
                </span>
              </strong>
              <br />
              <strong>
                Estado:
                <span>
                  {getEquipmentCurrentStateById(equipPosition.equipmentId)}
                </span>
              </strong>
              <br />
              <Link to={`/states/histories/${equipPosition.equipmentId}`}>
                Ver histórico de estados
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
