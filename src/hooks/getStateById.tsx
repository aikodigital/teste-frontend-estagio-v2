import * as React from 'react';
import useGetState from "./getState";

function useGetStateById(id: any, equipmentStateHistory: any, equipmentState: any) {
  let stateDate = ''
  const stateId = useGetState(equipmentStateHistory)
    .filter((e: any) => e.id === id)
    .map((e: any) => {
      stateDate = e.states.date
      return e.states.equipmentStateId
    })
    .join('')
  const state = equipmentState.filter((e: any) => e.id === stateId);
  return [{date: stateDate, state: state}];
}

export default useGetStateById;
