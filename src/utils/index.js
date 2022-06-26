import moment from 'moment'

// retorna o nome do equipamento passando o id dele como parâmetro
function equipmentName(equipmentId){
for(let i in equipment){
    let equip = equipment[i]

    if(equip.id === equipmentId){
    return equip.name
    }
}
}

// guarda o ultimo State registrado de cada equipment 
function getCurrentEquipmentState(equipmentId){
for(let i in equipmentStateHistory){
    let equip = equipmentStateHistory[i]

    if(equip.equipmentId === equipmentId){
    let obj = equip.states[equip.states.length - 1]
    obj.equipmentId = equip.equipmentId
    equipmentCurrentState.push(obj)
    // return equip.states.length - 1
    // console.log(obj)
    }
}
}

// retorna nome e status color de cada equipment baseado no último State
function getCurrentState(equipmentId){
for(let i in equipmentCurrentState){
    for(let c in equipmentState){
    let equip = equipmentCurrentState[i]
    let equipState = equipmentState[c]

    if(equip.equipmentId === equipmentId){
        if(equip.equipmentStateId === equipState.id ){
        // console.log(equipState.name)
        return {name: equipState.name, color: equipState.color}
        
        // return equipState.name
        }
    }
    }
}
}

function formatDate(date){
    return moment.utc(date).format('DD/MM/YYYY   h:mm a')
}

function getEquipmentStateById(equipmentId){
    return equipmentState.find((state) => state.id === equipmentId)
}

function getEquipmentStateHystoryById(equipmentId){
let equip = equipmentStateHistory.find((item) => item.equipmentId === equipmentId)
let date = ''
let equipmentState = ''
let info = []

    if(equip){
    equip.states.map((item) => {
        date = formatDate(item.date) 
        equipmentState = getEquipmentStateById(item.equipmentStateId) 
        info.push({date,equipmentState})
        // console.log(date)

    })

    }
    return info
}

export {equipmentName,getCurrentEquipmentState,getCurrentState,formatDate,getEquipmentStateById,getEquipmentStateHystoryById}


