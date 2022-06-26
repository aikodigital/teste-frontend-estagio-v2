import * as React from 'react';

function useGetPosition(equipmentPositionHistory:any) {

  const timeArrayInNumber = equipmentPositionHistory.map((e: any) =>
    Math.max(...e.positions.map((e: any) => new Date(e.date).getTime()))
  );
  const timeArrayInISOString = timeArrayInNumber.map((e: any) =>
    new Date(e).toISOString()
  );
  const getPositions = equipmentPositionHistory.map((e: any) => {
    return { id: e.equipmentId, positions: e.positions };
  });
  const getPostionInCurrentTime = getPositions.map((e: any) => {
    const array = e.positions.filter((e: any) =>
      timeArrayInISOString.includes(e.date)
    );
    return { id: e.id, position: array };
  });
  const currentPositionsAndCoords = getPostionInCurrentTime.map((e: any) => {
    const array = e.position[e.position.length - 1];
    return { id: e.id, position: array };
  });

  return currentPositionsAndCoords;
}

export default useGetPosition;
