import * as React from 'react';

function useGetState(equipmentStateHistory:any) {

  const timeArrayInNumber = equipmentStateHistory.map((e: any) =>
    Math.max(...e.states.map((e: any) => new Date(e.date).getTime()))
  );
  const timeArrayInISOString = timeArrayInNumber.map((e: any) =>
    new Date(e).toISOString()
  );
  const getStates = equipmentStateHistory.map((e: any) => {
    return { id: e.equipmentId, states: e.states };
  });
  const getStateInCurrentTime = getStates.map((e: any) => {
    const array = e.states.filter((e: any) =>
      timeArrayInISOString.includes(e.date)
    );
    return { id: e.id, states: array };
  });
  const currentStates = getStateInCurrentTime.map((e: any) => {
    const array = e.states[e.states.length - 1];
    return { id: e.id, states: array };
  });

  return currentStates;
}

export default useGetState;