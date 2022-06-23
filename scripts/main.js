"use strict";
// Colocando Dentro de uma variável os dados do JSON;
const equipamento  = JSON.parse(pegarDados("./data/equipment.json")); // id, name e modelID;
const equipamentoModel = JSON.parse(pegarDados("./data/equipmentModel.json")); // modelName, id, valorHora
const equipamentoPosition = JSON.parse(pegarDados("./data/equipmentPositionHistory.json")); // Histórico de posição;
const equipamentoState = JSON.parse(pegarDados("./data/equipmentState.json")); // Estado: operando, parado, manutenção;
const equipamentoStateHistory = JSON.parse(pegarDados("./data/equipmentStateHistory.json")); // histórico dos estados de cada equipamento

// Consumindo os dados do JSON;

function pegarDados(local){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", local, false);
    xhr.send();
    return xhr.response;
}

function Model(indexEquip){
    let Mode = equipamento[indexEquip].equipmentModelId;
    for(let i in equipamentoModel){
        if(Mode == equipamentoModel[i].id){
            return equipamentoModel[i].name;
        }
    }
}
// Pegando a LATITUDE e a LONGETUDE;

function lat_lon(index,pos){
    if(equipamento[index].id == equipamentoPosition[index].equipmentId){
        equipamento[index].posicao = equipamentoPosition[index].positions;
        return equipamento[index].posicao[pos];
    }    
}

// Verificando o estado Atual;

function EstadoAtual(historicoState, indexEquipment){
    let localEqui = equipamentoStateHistory[indexEquipment].states[historicoState];
    for(let i in equipamentoState){
        if(localEqui.equipmentStateId == equipamentoState[i].id){
            return {
                data: localEqui.date,
                estado: equipamentoState[i].name
            };
        }
    }
}
// MAPA

function AtivarMap(){
    var map = L.map('map').setView([lat_lon(1, 10).lat, lat_lon(1, 10).lon], 10);
    for(let i = 0; i < 9; i++){
        let h = 64;
        let marker = L.marker([lat_lon(i, h).lat, lat_lon(i, h).lon] ).addTo(map);
        marker.on('mouseover', ()=> {
        
            marker.bindPopup(`${Model(i)}<br>
            ${EstadoAtual(h, i).estado}
            `).openPopup();
            marker.on("click", ()=>{
                marker.bindPopup(`${equipamento[i].name}<br>
                ${equipamentoStateHistory[i].states[10].date}`).openPopup();
    
            })
        })
        marker.on("mouseout",()=>{
            marker.closePopup();
        })
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); 
}
window.onload = AtivarMap();
