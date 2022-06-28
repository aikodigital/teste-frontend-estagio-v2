const equipment = require('./data/equipment.json')
// import equipmentModel from './data/equipmentModel.json'
const equipmentState = require('./data/equipmentState.json')
const equipmentStateHistory = require('./data/equipmentStateHistory.json')
// import equipmentPositionHistory from './data/equipmentPositionHistory.json'

// // const states = equipmentStateHistory.map(history => {
// //   const cas = equipmentState.filter(state => state.id === history.states.slice(-1)[0].equipmentStateId ? state.name && state.color : "")
// //   return cas.name
// // })

// // console.log(states)


// const states = equipmentStateHistory.map((history, index) => {
//   const [state] = equipmentState.filter(state =>  state.id === history.states[history.states.length - 1].equipmentStateId)
//   return equipment.id === history.id ? state : ""
// })

// // var obj = { 0: 'a', 1: 'b', 2: 'c' };
// // console.log(Object.keys(obj)); // console: ['0', '1', '2']
// console.log(Object.keys(states[0]))

const states = equipmentStateHistory.map(states => states.equipmentId === equipment.id)
console.log(states)