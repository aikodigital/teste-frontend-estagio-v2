import React from 'react';
import equipmentStateHistory from '../data/equipmentStateHistory.json';
import equipmentState from '../data/equipmentState.json';

console.log(equipmentState)
console.log(equipmentStateHistory)

function HourProgress() {
  function getDay(array) {
    const dayCreate = array.map((item) => item.states.map((item) => {
      return {
        date: new Date(item.date),
        equipmentStateId: item.equipmentStateId,
      }
    }))
    const lasDay = dayCreate.map((item) => item.filter((day) => day.date.getDate() === dayCreate[0][0].date.getDate()))
    return lasDay
  }

  function objectGenerate(array) {
    const createNewObject = array.map((item) => item.map((equipment) => {
      return {
        hour: equipment.date.getHours(),
        status: equipmentState.find((status) => status.id === equipment.equipmentStateId).name
      }
    }))
    return createNewObject
  }

  function calcValues(array) {
    console.log(array)
  }
  calcValues(objectGenerate(getDay(equipmentStateHistory)))
  
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default HourProgress