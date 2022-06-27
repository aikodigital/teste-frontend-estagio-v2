import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import allEquipmentPositionHistory from '../../data/equipmentPositionHistory.json'

function EquipmentPositionTimeline() {
  const { equipmentId, equipmentPositionDate } = useParams();
  const dates = allEquipmentPositionHistory.filter(eq => eq.equipmentId == equipmentId)[0].positions.map(obj => obj.date)
  const [ positionTimeline, setPositionTimeline ] = useState(equipmentPositionDate ? dates.indexOf(equipmentPositionDate) : dates.length - 1);
  const navigate = useNavigate();
  
  const positionTimelineDate = function() {
    if(!dates[positionTimeline]) {
      setPositionTimeline(dates.length - 1);
      return format(new Date(dates[dates.length - 1]), "dd'/'MM'/'yyyy HH':'mm")
    }
    return format(new Date(dates[positionTimeline]), "dd'/'MM'/'yyyy HH':'mm")
  }

    useEffect(() => {
      if(equipmentPositionDate) {
        setPositionTimeline(dates.indexOf(equipmentPositionDate));
        return;
      }
      
      setPositionTimeline(dates.length - 1);
    }, [equipmentId, equipmentPositionDate])

    useEffect(() => {
      navigate(`/${equipmentId}/${dates[positionTimeline]}`, { replace: true });
    }, [positionTimeline])

    return (
      <div className="flex flex-col h-20 px-4 border-t border-gray-500">
        <div className="flex items-center justify-between">
          <span className="block mt-2 mb-1 text-xl font-bold">Linha do tempo</span>
          <div className="flex items-center gap-1">
            <span className="font-bold">Data atual:</span>
            {positionTimelineDate()}
          </div>
        </div>

        <input
          className="flex-1 mb-3"
          type="range"
          min="0"
          max={dates.length - 1}
          value={positionTimeline}
          onChange={(i) => {setPositionTimeline(Number(i.target.value))}}
        />
      </div>
    )
  }
  
export default EquipmentPositionTimeline
