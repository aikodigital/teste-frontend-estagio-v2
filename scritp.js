import equipaments from './data/equipment.json' assert {type: "json"}
import equipamentsPositionHistory from './data/equipmentPositionHistory.json' assert {type: "json"}
import equipamentStateHistory from './data/equipmentStateHistory.json' assert {type: "json"}

let positionMapLat = 51.505
let positionMapLon = -0.09

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Selecione uma máquina e descubra onde ela esta :)')
    .openPopup();

document.getElementById('maquina').innerHTML = "Selecione uma máquina"
document.getElementById('modelo').innerHTML = "Selecione uma máquina"
document.getElementById('estado').innerHTML = "Selecione uma máquina"

document.getElementById('historicoData').innerHTML = "Selecione uma máquina"
document.getElementById('historicoId').innerHTML = "Selecione uma máquina"

document.getElementById('historicoData1').innerHTML = "Selecione uma máquina"
document.getElementById('historicoId1').innerHTML = "Selecione uma máquina"

document.getElementById('historicoData2').innerHTML = "Selecione uma máquina"
document.getElementById('historicoId2').innerHTML = "Selecione uma máquina"

document.getElementById('historicoData3').innerHTML = "Selecione uma máquina"
document.getElementById('historicoId3').innerHTML = "Selecione uma máquina"

var select = document.getElementById('selectMaquinas')

var procurar = document.getElementById('procurar')

procurar.onclick = function() {
    map.remove();
    var selectData = document.getElementById('selectData')
    let valorSelecionado = select.value
    let maquina = equipaments.filter( equipaments => equipaments.name == valorSelecionado)

    let state = equipamentStateHistory.filter (equipamentStateHistory => equipamentStateHistory.equipmentId == maquina[0].id )
    let filterState = state[0].states

    let getFilterState = filterState.filter(function(getFilterState){
        return getFilterState.date.substring(0,10) === selectData.value
       })

    let stateValue = [getFilterState[getFilterState.length -1].equipmentStateId]
    
    if(stateValue == "0808344c-454b-4c36-89e8-d7687e692d57"){
        stateValue = "Operando"
    }

   if(stateValue == "baff9783-84e8-4e01-874b-6fd743b875ad"){
    stateValue = "Parado"
   }

   if(stateValue == "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f"){
       stateValue = "Manutenção"
   }
    document.getElementById('maquina').innerHTML = maquina[0].name
    document.getElementById('modelo').innerHTML = maquina[0].id
    document.getElementById('estado').innerHTML = stateValue

    let filterMaquina = equipaments.filter( equipaments => equipaments.name == valorSelecionado)

    let filterMaquinaId = filterMaquina[0].id

    let getMachine = equipamentStateHistory.filter(equipamentStateHistory => equipamentStateHistory.equipmentId == filterMaquinaId)

    let getState = getMachine[0].states

    let filterMachine = getState.filter(function(filterMachine){
        return filterMachine.date.substring(0,10) === selectData.value
    })

   let getPositionHistory = equipamentsPositionHistory.filter(equipamentsPositionHistory => equipamentsPositionHistory.equipmentId == filterMaquinaId)

   let getPosition = getPositionHistory[0].positions

   let filterGetPosition = getPosition.filter(function(filterGetPosition){
    return filterGetPosition.date.substring(0,10) === selectData.value
   })

   map = L.map('map').setView([filterGetPosition[filterGetPosition.length -1].lat, filterGetPosition[filterGetPosition.length -1].lon], 13)

   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   L.marker([filterGetPosition[filterGetPosition.length -1].lat, filterGetPosition[filterGetPosition.length -1].lon]).addTo(map)
   .bindPopup('Última posição da maquina no dia selecionado!')
   .openPopup();

    if(filterMachine[0].equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'){
        filterMachine[0].equipmentStateId = 'Operando'
    }

    if(filterMachine[0].equipmentStateId == 'baff9783-84e8-4e01-874b-6fd743b875ad'){
        filterMachine[0].equipmentStateId = 'Parado'
    }

    if(filterMachine[0].equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'){
        filterMachine[0].equipmentStateId = 'Manutenção'
    }

    if(filterMachine[1].equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'){
        filterMachine[1].equipmentStateId = 'Operando'
    }

    if(filterMachine[1].equipmentStateId == 'baff9783-84e8-4e01-874b-6fd743b875ad'){
        filterMachine[1].equipmentStateId = 'Parado'
    }

    if(filterMachine[1].equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'){
        filterMachine[1].equipmentStateId = 'Manutenção'
    }

    if(filterMachine[2].equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'){
        filterMachine[2].equipmentStateId = 'Operando'
    }

    if(filterMachine[2].equipmentStateId == 'baff9783-84e8-4e01-874b-6fd743b875ad'){
        filterMachine[2].equipmentStateId = 'Parado'
    }

    if(filterMachine[2].equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'){
        filterMachine[2].equipmentStateId = 'Manutenção'
    }

    if(filterMachine[3].equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'){
        filterMachine[3].equipmentStateId = 'Operando'
    }

    if(filterMachine[3].equipmentStateId == 'baff9783-84e8-4e01-874b-6fd743b875ad'){
        filterMachine[3].equipmentStateId = 'Parado'
    }

    if(filterMachine[3].equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'){
        filterMachine[3].equipmentStateId = 'Manutenção'
    }

    document.getElementById('historicoData').innerHTML = filterMachine[0].date.substring(0,19).replace('T', " ")
    document.getElementById('historicoId').innerHTML = filterMachine[0].equipmentStateId

    document.getElementById('historicoData1').innerHTML = filterMachine[1].date.substring(0,19).replace('T', " ")
    document.getElementById('historicoId1').innerHTML = filterMachine[1].equipmentStateId

    document.getElementById('historicoData2').innerHTML = filterMachine[2].date.substring(0,19).replace('T', " ")
    document.getElementById('historicoId2').innerHTML = filterMachine[2].equipmentStateId

    document.getElementById('historicoData3').innerHTML = filterMachine[3].date.substring(0,19).replace('T', " ")
    document.getElementById('historicoId3').innerHTML = filterMachine[3].equipmentStateId

}

  