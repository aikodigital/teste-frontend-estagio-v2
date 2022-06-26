import * as React from "react";
import useGetModel from "./getModel";
import formatPatternDate from "../utils/formatPatternDate";

function useGetEarningCalculatorById(
  id: any,
  equipmentModel: any,
  equipmentStateHistory: any,
  equipment: any
) {
  
  const filterEquipment = equipmentStateHistory.filter(
    (e: any) => e.equipmentId === id
  );
  const equipmentHistory = filterEquipment.map((e: any) => e);
  const currentDay = filterEquipment.map((e: any) =>
    Math.max(...e.states.map((e: any) => new Date(e.date).getTime()))
  );
  const currentDayToString = currentDay
    .map((e: any) => formatPatternDate(e))
    .join("");

  const filterEquipmentHistory = equipmentHistory
    .filter((e: any) => e.states)
    .map((e: any) =>
      e.states.filter(
        (e: any) => e.date.substring(0, 10) === currentDayToString
      )
    );

  const hourlyEarnings = useGetModel(id, equipment, equipmentModel).map(
    (e: any) => e.hourlyEarnings
  );
  const stateOperating = hourlyEarnings
    .map((e: any) => e[0])
    .map((e: any) => e);
  const stateStopped = hourlyEarnings.map((e: any) => e[1]).map((e: any) => e);
  const stateMaintenance = hourlyEarnings
    .map((e: any) => e[2])
    .map((e: any) => e);
  const filterStateOperating = {
    value: Number(stateOperating.map((e: any) => e.value).join("")),
    qtyStates: Number(
      filterEquipmentHistory
        .map(
          (e: any) =>
            e.filter(
              (e: any) =>
                e.equipmentStateId ===
                stateOperating.map((e: any) => e.equipmentStateId).join("")
            ).length
        )
        .join("")
    ),
  };
  const filterStateStopped = {
    value: Number(stateStopped.map((e: any) => e.value).join("")),
    qtyStates: Number(
      filterEquipmentHistory
        .map(
          (e: any) =>
            e.filter(
              (e: any) =>
                e.equipmentStateId ===
                stateStopped.map((e: any) => e.equipmentStateId).join("")
            ).length
        )
        .join("")
    ),
  };
  const filterStateMaintenance = {
    value: Number(stateMaintenance.map((e: any) => e.value).join("")),
    qtyStates: Number(
      filterEquipmentHistory
        .map(
          (e: any) =>
            e.filter(
              (e: any) =>
                e.equipmentStateId ===
                stateMaintenance.map((e: any) => e.equipmentStateId).join("")
            ).length
        )
        .join("")
    ),
  };
  const earnings =
    filterStateOperating.qtyStates * filterStateOperating.value +
    filterStateStopped.qtyStates * filterStateStopped.value +
    filterStateMaintenance.qtyStates * filterStateMaintenance.value;

  return earnings;
}

export default useGetEarningCalculatorById;
