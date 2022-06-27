export function sortByName(data, elementsAsc) {
    let sortArr = []

    if (elementsAsc["name"]) {
        // asc
        sortArr = data.equipments.sort((itemA, itemB) => itemA["name"].localeCompare(itemB["name"]))
    } else {
        // desc
        sortArr = data.equipments.sort((itemA, itemB) => itemB["name"].localeCompare(itemA["name"]))
    }

    return sortArr
}

export function sortByModel(data, elementsAsc) {
    let sortArr = []

    if (elementsAsc["model"]) {
        sortArr = data.equipments.sort((itemA, itemB) =>
            ((data.models.find(model => model.id === itemA["equipmentModelId"])).name)
                .localeCompare(((data.models.find(model => model.id === itemB["equipmentModelId"])).name))
        )
    } else {
        sortArr = data.equipments.sort((itemA, itemB) =>
            ((data.models.find(model => model.id === itemB["equipmentModelId"])).name)
                .localeCompare(((data.models.find(model => model.id === itemA["equipmentModelId"])).name))
        )
    }
    return sortArr
}

export function sortByState(data, elementsAsc) {
    let sortArr = []
    
    if (elementsAsc["state"]) {
        sortArr = data.equipments.sort((itemA, itemB) =>
            ((data.stateHistory.find(stateHistory => stateHistory.equipmentId === itemA["id"])).states.at(-1).equipmentStateId)
                .localeCompare(((data.stateHistory.find(stateHistory => stateHistory.equipmentId === itemB["id"])).states.at(-1).equipmentStateId))
        )
    } else {
        sortArr = data.equipments.sort((itemA, itemB) =>
            ((data.stateHistory.find(stateHistory => stateHistory.equipmentId === itemB["id"])).states.at(-1).equipmentStateId)
                .localeCompare(((data.stateHistory.find(stateHistory => stateHistory.equipmentId === itemA["id"])).states.at(-1).equipmentStateId))
        )
    }
    return sortArr
}