import React from 'react'
import Equipments from '../Assets/data/equipment.json'

const EquipmentName = (props) => {
  let equipmentName = '';
  Equipments.map(e => {
    if(e.id === props) equipmentName = e.name;
  });
  return equipmentName
}

export default EquipmentName