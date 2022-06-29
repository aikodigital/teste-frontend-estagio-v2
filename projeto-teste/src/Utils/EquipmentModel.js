import React from 'react'
import Equipments from '../Assets/data/equipment.json'
import EquipmentModels from '../Assets/data/equipmentModel.json'

const EquipmentModel = (props) => {
  let equipmentId = '';
  let equipmentModel = '';
  Equipments.map(e => {
    if(e.id === props) equipmentId = e.equipmentModelId;
  });
  EquipmentModels.map(e => {
    if(equipmentId === e.id) equipmentModel = e.name;
  });
  return equipmentModel
}

export default EquipmentModel