import * as React from "react";
import useGetPosition from "./getPosition";

function useGetPositionById(id: any, equipmentPositionHistory: any) {
  const position = useGetPosition(equipmentPositionHistory)
    .filter((e: any) => e.id === id)
    .map((e: any) => { return {date: e.position.date, position: {lat: e.position.lat, lon: e.position.lon}} });

  return position;
}

export default useGetPositionById;
