import equipment from '../../data/equipment.json' assert { type: 'json' }
import equipmentModel from '../../data/equipmentModel.json' assert { type: 'json' }
import equipmentPositionHistory from '../../data/equipmentPositionHistory.json' assert { type: 'json' }
import equipmentState from '../../data/equipmentState.json' assert { type: 'json' }
import equipmentStateHistory from '../../data/equipmentStateHistory.json' assert { type: 'json' }
import { renderInfoEquipment } from './info.js'

class CreateEquipmentWithCoordenates {
  constructor(equipmentId, lat, lon) {
    this.equipmentId = equipmentId
    this.lat = lat
    this.lon = lon
  }
}

const equipments = [] // Os Ids de cada Máquina
equipment.forEach((equipment) => {
  equipments.push(equipment.id)
})
const equipmentHistoryLatAndLong = [] // Os obj de posição de cada máquina
equipmentPositionHistory.forEach((equipment) => {
  equipmentHistoryLatAndLong.push(equipment)
})
const equipamentsWithLatAndLon = []
equipments.forEach((equipmentID) => {
  equipmentHistoryLatAndLong.map((equipment) => {
    if (equipmentID == equipment.equipmentId) {
      let lat = equipment.positions[equipment.positions.length - 1].lat
      let lon = equipment.positions[equipment.positions.length - 1].lon
      const newEquipmentModel = new CreateEquipmentWithCoordenates(
        equipmentID,
        lat,
        lon
      )
      equipamentsWithLatAndLon.push(newEquipmentModel)
    }
  })
})
class CreateIdAndNameModel {
  constructor(idModel, nameModel) {
    this.idModel = idModel
    this.nameModel = nameModel
  }
}
const nameOfModels = []
equipmentModel.forEach((equipment) => {
  let id = equipment.id
  let modelName = equipment.name
  const model = new CreateIdAndNameModel(id, modelName)
  nameOfModels.push(model)
})

class CreateFinalModel {
  constructor(id, modelId, name, codname) {
    this.id = id
    this.modelId = modelId
    this.name = name
    this.codname = codname
  }
}
const finalModelEquipments = []
equipment.forEach((equipment) => {
  nameOfModels.map((model) => {
    let equipmentID = equipment.id
    if (equipment.equipmentModelId == model.idModel) {
      let modelId = model.idModel
      let name = model.nameModel
      let codname = equipment.name
      const mod = new CreateFinalModel(equipmentID, modelId, name, codname)
      finalModelEquipments.push(mod)
    }
  })
})
class CreateFinalObj {
  constructor(equipmentId, modelId, name, codname, lat, lon) {
    this.equipmentId = equipmentId
    this.modelId = modelId
    this.name = name
    this.codname = codname
    this.lat = lat
    this.lon = lon
  }
}

const finalOBJModels = []
finalModelEquipments.forEach((equipment) => {
  equipamentsWithLatAndLon.map((equipmentLatLon) => {
    if (equipment.id == equipmentLatLon.equipmentId) {
      let equipamentId = equipment.id
      let modelId = equipment.modelId
      let name = equipment.name
      let codname = equipment.codname
      let lat = equipmentLatLon.lat
      let lon = equipmentLatLon.lon
      const model = new CreateFinalObj(
        equipamentId,
        modelId,
        name,
        codname,
        lat,
        lon
      )
      finalOBJModels.push(model)
    }
  })
})

class CreateEquipWithLastState {
  constructor(equipmentId, lastDate, lastState) {
    this.equipmentId = equipmentId
    this.lastDate = lastDate
    this.lastState = lastState
  }
}
const equipWithLastState = []
equipment.forEach((equipment) => {
  equipmentStateHistory.map((equipmentSH) => {
    if (equipment.id == equipmentSH.equipmentId) {
      let leng = equipmentSH.states.length
      let id = equipmentSH.equipmentId
      let lastStateDate = equipmentSH.states[leng - 1].date
      let stateId = equipmentSH.states[leng - 1].equipmentStateId
      const lastState = new CreateEquipWithLastState(id, lastStateDate, stateId)
      equipWithLastState.push(lastState)
    }
  })
})

class CreateLastStates {
  constructor(equipmentId, equipmentStateId) {
    this.equipmentId = equipmentId
    this.equipmentStateId = equipmentStateId
  }
}

const lastStates = []
finalOBJModels.forEach((equipment) => {
  equipWithLastState.forEach((equipState) => {
    if (equipment.equipmentId == equipState.equipmentId) {
      let eqId = equipState.equipmentId
      let eqSId = equipState.lastState
      const model = new CreateLastStates(eqId, eqSId)
      lastStates.push(model)
    }
  })
})

class CreateEquipamentStateColor {
  constructor(equipmentId, state, stateColor) {
    this.equipmentId = equipmentId
    this.state = state
    this.stateColor = stateColor
  }
}
const equipmentStateColor = []
lastStates.forEach((equipment) => {
  equipmentState.forEach((equipmentSt) => {
    if (equipment.equipmentStateId == equipmentSt.id) {
      let id = equipment.equipmentId
      let state = equipmentSt.name
      let color = equipmentSt.color
      const model = new CreateEquipamentStateColor(id, state, color)
      equipmentStateColor.push(model)
    }
  })
})

class CreateFinalEquipment {
  constructor(
    equipmentId,
    modelId,
    name,
    codname,
    lastState,
    colorState,
    lat,
    lon
  ) {
    this.equipmentId = equipmentId
    this.modelId = modelId
    this.name = name
    this.codname = codname
    this.lastState = lastState
    this.colorState = colorState
    this.lat = lat
    this.lon = lon
  }
}
export const finalEquipments = []
finalOBJModels.forEach((equipment) => {
  equipmentStateColor.map((eqState) => {
    if (equipment.equipmentId == eqState.equipmentId) {
      let eqId = equipment.equipmentId
      let modelId = equipment.modelId
      let name = equipment.name
      let codname = equipment.codname
      let lastState = eqState.state
      let colorState = eqState.stateColor
      let lat = equipment.lat
      let lon = equipment.lon
      const model = new CreateFinalEquipment(
        eqId,
        modelId,
        name,
        codname,
        lastState,
        colorState,
        lat,
        lon
      )
      finalEquipments.push(model)
    }
  })
})

export function GetMap() {
  let map = new Microsoft.Maps.Map('#myMap', {
    credentials: 'Machine Map Location',
    center: new Microsoft.Maps.Location(-19.126536, -45.947756),
    zoom: 10,
  })
  finalEquipments.forEach((equipment) => {
    let pin = new Microsoft.Maps.Pushpin(
      new Microsoft.Maps.Location(equipment.lat, equipment.lon),
      {
        title: equipment.name,
        subTitle: equipment.codname,
        color: equipment.colorState,
        textOffset: {
          id: equipment.equipmentId,
          name: equipment.name,
          codname: equipment.codname,
          state: equipment.lastState,
        },
      }
    )
    map.entities.push(pin)
    Microsoft.Maps.Events.addHandler(pin, 'click', renderInfoEquipment)
  })
}
