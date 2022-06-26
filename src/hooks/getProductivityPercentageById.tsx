import * as React from "react";
import useGetModel from "./getModel";
import formatPatternDate from "../utils/formatPatternDate";

function useGetProductivityPercentageById(
  id: any,
  equipment: any,
  equipmentModel: any,
  equipmentStateHistory: any
) {
  
  let totalOperating = 0;

  const filterEquipment = equipmentStateHistory.filter(
    (e: any) => e.equipmentId === id
  );
  const currentDay = filterEquipment.map((e: any) =>
    Math.max(...e.states.map((e: any) => new Date(e.date).getTime()))
  );
  const currentDayToString = currentDay
    .map((e: any) => formatPatternDate(e))
    .join("");

  const equipmentHistory = filterEquipment.map((e: any) => e);
  const hourlyEarnings = useGetModel(id, equipment, equipmentModel).map(
    (e: any) => e.hourlyEarnings
  );
  const stateOperating = hourlyEarnings
    .map((e: any) => e[0])
    .map((e: any) => e);

  const equipmentStateId = stateOperating
    .map((e: any) => e.equipmentStateId)
    .join("");

  const filterStateOperating = {
    value: Number(stateOperating.map((e: any) => e.value).join("")),
    qtyStates: Number(
      equipmentHistory
        .map(
          (e: any) =>
            e.states.filter(
              (e: any) =>
                e.equipmentStateId ===
                stateOperating.map((e: any) => e.equipmentStateId).join("")
            ).length
        )
        .join("")
    ),
  };
  const listAllOperating = equipmentHistory
    .map((e: any) =>
      e.states.filter(
        (e: any) => e.date.substring(0, 10) === currentDayToString
      )
    )
    .map((e: any) =>
      e.map((e: any) =>
        e.equipmentStateId === equipmentStateId ? totalOperating++ : {}
      )
    );

  const productivityPercentage = String(
    parseFloat(((totalOperating / 24) * 100).toFixed(2))
  );

  return productivityPercentage;
}

export default useGetProductivityPercentageById;
