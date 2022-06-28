import { finalEquipments } from './maps.js'
import equipmentStateHistory from '../../data/equipmentStateHistory.json' assert { type: 'json' }
import equipmentState from '../../data/equipmentState.json' assert { type: 'json' }

const titleHTML = document.querySelector('#render-info .title-text')
const stateHTML = document.querySelector('#render-info .state-text')
const stateIconHTML = document.querySelector('#render-info .state i')
const codnameHTML = document.querySelector('#render-info .codname-text')

class CreateEquipmentStates {
  constructor(equipmentId, date, hour, stateId) {
    this.equipmentId = equipmentId
    this.date = date
    this.hour = hour
    this.stateId = stateId
  }
}

export function renderInfoEquipment(element) {
  let equipmentOffsetInfo = element.target._options.textOffset
  let id = element.target._options.textOffset.id
  finalEquipments.forEach((equipment) => {
    if (id == equipment.equipmentId) {
      let title = equipmentOffsetInfo.name
      let state = equipmentOffsetInfo.state
      let codname = equipmentOffsetInfo.codname
      titleHTML.innerHTML = title
      stateHTML.innerHTML = state
      codnameHTML.innerHTML = codname

      if (stateHTML.innerHTML == 'Parado') {
        stateIconHTML.classList.remove('gear-animation')
      } else if (stateHTML.innerHTML == 'Manutenção') {
        stateIconHTML.classList.remove('bi-gear')
        stateIconHTML.classList.add('bi-wrench-adjustable')
        stateIconHTML.classList.add('maintenence')
        stateIconHTML.classList.remove('gear-animation')
      } else if (stateHTML.innerHTML == 'Operando') {
        stateIconHTML.classList.remove('bi-wrench-adjustable')
        stateIconHTML.classList.remove('maintenence')
        stateIconHTML.classList.add('gear-animation')
        stateIconHTML.classList.add('bi-gear')
      } else {
      }
    }
  })

  const equipmentStates = []
  equipmentStateHistory.forEach((equipments) => {
    if (equipments.equipmentId == id) {
      equipments.states.map((state) => {
        const equipmentId = equipments.equipmentId
        const stateId = state.equipmentStateId
        const dateState = state.date
        const parseDate = Date.parse(dateState)
        // Date Format
        const dateFormatedDay = new Date(parseDate).getDate()
        const dateFormatedMonth = new Date(parseDate).getMonth()
        const dateFormatedYear = new Date(parseDate).getFullYear()
        if (dateFormatedDay < 10) {
          var dayOfMonth = `0${dateFormatedDay}`
        } else {
          var dayOfMonth = dateFormatedDay
        }
        if (dateFormatedMonth < 10) {
          var monthOfYear = `0${dateFormatedMonth}`
        } else {
          var monthOfYear = dateFormatedMonth
        }

        // Hour Format
        const getHour = new Date(parseDate).getHours()
        const getMinutes = new Date(parseDate).getMinutes()
        if (getHour < 10) {
          var hourOfDay = `0${getHour}`
        } else {
          var hourOfDay = getHour
        }
        if (getMinutes < 10) {
          var minutesOfHour = `0${getMinutes}`
        } else {
          var minutesOfHour = getMinutes
        }
        const date = `${dayOfMonth}/${monthOfYear}/${dateFormatedYear}`
        const hour = `${hourOfDay}:${minutesOfHour}`

        const model = new CreateEquipmentStates(
          equipmentId,
          date,
          hour,
          stateId
        )
        equipmentStates.push(model)
      })
    }
  })

  const divStateHistory = document.querySelector('#history')
  divStateHistory.innerHTML = ''
  console.log(divStateHistory.clientHeight)
  equipmentStates.reverse()
  console.log(equipmentStates)
  equipmentStates.forEach((state) => {
    const listItem = document.createElement('li')
    const equipmentStateName = document.createElement('p')
    const date = document.createElement('p')
    const hour = document.createElement('p')
    listItem.appendChild(equipmentStateName)
    listItem.appendChild(date)
    listItem.appendChild(hour)
    listItem.classList.add('equipment-state')
    equipmentStateName.classList.add('state')
    date.classList.add('date')
    hour.classList.add('hour')
    divStateHistory.appendChild(listItem)
    equipmentState.forEach((eqState) => {
      if (state.stateId == eqState.id) {
        equipmentStateName.innerText = eqState.name
        date.innerText = state.date
        hour.innerText = state.hour
        listItem.style.backgroundColor = eqState.color
      }
    })
  })
}
