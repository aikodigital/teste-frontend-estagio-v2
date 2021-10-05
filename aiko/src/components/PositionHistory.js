import React, { useState } from 'react'
import equipmentID from '../data/equipment.json';
import positionsHistory from '../data/equipmentPositionHistory.json'

function PositionHistory () {
  const [filter, setFilter] = useState(false)
  const [equipment, setEquipment] = useState('')

  function applyFilter({target: { value }}) {
    findEquipment(value)
    setFilter(true)
  }

  function findEquipment(name) {
    return setEquipment(equipmentID.find((item) => item.name === name).id)
  }

  function historyEquipment(id) {
    return positionsHistory
            .filter((equipment) => equipment.equipmentId === id)
            .map((item) => item.positions.map((position, index) => (
              <div key={index}>
                <p>Data: {position.date}</p>
                <p>Latitude: {position.lat}</p>
                <p>Longitude: {position.lon}</p>
              </div>
            )))
  }

  return (
    <div>
      <label>Selecione o equipamento para ver o histórico
        <br />
        <select onClick={ applyFilter }>
          <option value="CA-0001">CA-0001</option>
          <option value="CA-0002">CA-0002</option>
          <option value="CA-0003">CA-0003</option>
          <option value="CA-0004">CA-0004</option>
          <option value="HV-1001">HV-1001</option>
          <option value="HV-1002">HV-1002</option>
          <option value="GT-2001">GT-2001</option>
          <option value="GT-2002">GT-2002</option>
          <option value="GT-2003">GT-2003</option>
        </select>
      </label>
      {filter && historyEquipment(equipment)}
    </div>
  )
}

export default PositionHistory;