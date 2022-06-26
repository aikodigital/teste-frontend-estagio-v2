import * as React from 'react';
import useGetStateById from './getStateById';

function useGetStatusClassById(id:any, equipmentStateHistory:any, equipmentState:any) {
    const stateName = useGetStateById(id, equipmentStateHistory, equipmentState).map((e: any) => e.state.map((e:any) => e.name)).join('')
    if(stateName === "Operando") {
      return "color-dot-operating"
    } else if (stateName === "Parado") {
      return "color-dot-stopped"
    } else if (stateName === "Manutenção") {
      return "color-dot-maintenance"
    } else return
}

export default useGetStatusClassById