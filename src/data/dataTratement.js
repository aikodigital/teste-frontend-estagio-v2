/* eslint-disable array-callback-return */
const equipments = require('./equipment.json')
const equipmentModel = require('./equipmentModel.json')
const equipmentPositionHistory = require('./equipmentPositionHistory.json')
const equipmentState = require('./equipmentState.json')
const equipmentStateHistory = require('./equipmentStateHistory.json')

class Equipment{
    constructor(id, name, model, positionHistory, stateHistory, earnings){
        this.id = id
        this.name = name
        this.model = model
        this.positionHistory = positionHistory
        this.stateHistory = stateHistory
        this.earnings = earnings
        this.atualPosition = this.positionHistory[positionHistory.length-1]
        this.atualState = this.stateHistory[stateHistory.length-1]
    }
}

const getState = (stateId) => {
    let stateName
    equipmentState.map((state) => {
        if(state["id"] === stateId){
            stateName = [state["name"],state["color"]]
        }
    })
    return stateName
}

const getModelandEarnings = (modelId) =>{
    let modelandEarning = []
    equipmentModel.map((model) =>{
        if(modelId === model["id"]){
            modelandEarning = [model["name"], model["hourlyEarnings"]]
        }
    })
    return modelandEarning
}

const getPositionHistory = (equipId) =>{
    let equipmentPositions = []
    equipmentPositionHistory.map((equipment)=>{
        if (equipId === equipment["equipmentId"]) {
            equipment["positions"].map((position)=>{
                equipmentPositions.push([position["date"],position["lat"], position["lon"]])
            })
        }
    })
    return equipmentPositions;
}

const getStateHistory = (equipId) =>{
    let states = []
    equipmentStateHistory.map((stateHistory)=>{
        if(equipId === stateHistory["equipmentId"]){
            stateHistory.states.map((state)=>{
                let temp = getState(state["equipmentStateId"])
                temp[2] = state["date"]
                states.push(temp)
            })
        }
    })
    return states
}

const generateEquipmentsObj = () =>{
    let equipmentsTemp = []
    equipments.map((equipment)=>{
        let tempModelandEarnings = getModelandEarnings(equipment["equipmentModelId"])
        let id = equipment["id"]
        let name = equipment["name"]
        let model = tempModelandEarnings[0]
        let positionHistory = getPositionHistory(id)
        let stateHistory = getStateHistory(id)
        let earnings = tempModelandEarnings[1]
        let equip = new Equipment(id, name, model, positionHistory, stateHistory, earnings)
        equipmentsTemp.push(equip)
    })
    return equipmentsTemp
}

let equipmentArr = generateEquipmentsObj();

export default equipmentArr;