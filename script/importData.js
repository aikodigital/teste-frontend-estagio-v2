
// Coloca todos dados dos JSON dentro das respectivas constantes
const equipment = JSON.parse(pegarDados("../data/equipment.json"));
const equipModel = JSON.parse(pegarDados("../data/equipmentModel.json")); // 
const equipPositionHistory = JSON.parse(pegarDados("../data/equipmentPositionHistory.json")); //
const equipState = JSON.parse(pegarDados("../data/equipmentState.json")); // 
const equipStateHistory = JSON.parse(pegarDados("../data/equipmentStateHistory.json")); //
let infosList = []
let idEquipHtml;
const btnShowHistory = document.querySelector('#showAllHistory'); // botao de mostrar historico
getInfos();
limparTabela(); 
// Criar objeto com as informações desejadas para trabalhar no front-end, já fazendo o tratamento dos dados e comparação de status
function getInfos() {
    let infos = {
        name: '',
        id: '',
        model: '',
        status: '',
        position: {
            lat: 0,
            lon: 0,
            date: ''
        }
    }
    for (let equip in equipment) {
        infos.name = equipment[equip].name;
        infos.model = getModel(equipment[equip].equipmentModelId);
        infos.status = getStatus(equipment[equip].id)
        infos.position = getPosition(equipment[equip].id)
        infos.id = equipment[equip].id;
        adicionaEquipmento(infos);
        infosList.push(infos)
        infos = {}
    }
}
// Pega o modelo do equipamento
function getModel(modelId) {
    for (let i = 0; i <= equipModel.length; i++) {
        if (modelId === equipModel[i].id) {
            return equipModel[i].name
        }
    }
}
// Pega o status do equipamento
function getStatus(equipId) {
    for (let i = 0; i < equipStateHistory.length; i++) {
        if (equipId === equipStateHistory[i].equipmentId) {

            let stateId = equipStateHistory[i].states.slice(-1)[0].equipmentStateId
            for (let state in equipState) {
                if (equipState[state].id === stateId) {
                    return equipState[state].name
                }
            }
        }

    }
}
// Pega a posição do equipamento
function getPosition(equipId) {
    for (let i = 0; i < equipPositionHistory.length; i++) {
        if (equipId === equipPositionHistory[i].equipmentId) {
            let positionId = equipPositionHistory[i].positions.slice(-1)[0]
            return {
                lat: positionId.lat,
                lon: positionId.lon,
                date: positionId.date
            }
        }
    }
}
// Função para simplificar a requisição dos JSON
function pegarDados(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    return xhr.response;
}
// Funções para montar a tabela de equipamentos dinamicamente
function montaTr(name, model, status, id) {
    const equipmentTr = document.createElement('tr');
    equipmentTr.classList.add('equipment')

    //adicionando os filhos

    equipmentTr.appendChild(montaTd('info-name', name))
    equipmentTr.appendChild(montaTd('info-model', model))
    equipmentTr.appendChild(montaTd('info-status', status))
    equipmentTr.appendChild(montaTd('info-id', id))
    return equipmentTr;
}
function montaTd(classe, dado) {
    const td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}
function adicionaEquipmento(equip) {
    const equipmentTr = montaTr(equip.name, equip.model, equip.status, equip.id, equip.position);
    const tabela = document.querySelector('#table-equipment')
    tabela.appendChild(equipmentTr)
}
// Cria o mapa e chama a função e passa o ID para criação da tabela do histórico
const loadMap = () => {
    const map = L.map('map').setView([0, 0], 1);
    const marker = L.marker([0, 0]).addTo(map);
    const table = document.querySelector('#table-equipment');
    table.addEventListener('click', function (event) {
        const equipTables = document.querySelectorAll('.equipment');
        const idEquipHtml = event.target.parentNode.querySelector(".info-id").textContent;
        const idModelHtml = event.target.parentNode.querySelector(".info-model").textContent;
        const idNameHtml = event.target.parentNode.querySelector(".info-name").textContent;
        const lineEquipHtml = event.target.parentNode;
        btnShowHistory.classList.remove('hidden');
        ;
        montarHistorico(idEquipHtml);
        btnShowHistory.innerHTML = "Mostrar mais de " + idModelHtml + " " + idNameHtml; '';
        for (let i = 0; i < equipTables.length; i++) {
            equipTables[i].classList.remove('active')
        }
        lineEquipHtml.classList.add('active');
        for (let info of infosList) {
            if (info.id === idEquipHtml) {
                marker.setLatLng([info.position.lat, info.position.lon]);
                marker.on('mouseover', () => {
                    marker.bindPopup(`Equipament: ${info.name} <br> Status: ${info.status} `).openPopup();
                })
                marker.on("mouseout", () => {
                    marker.closePopup();
                })
            }
        }
    });
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(map)
    L.tileLayer(attribution, tiles)
}
window.onload = loadMap;
// Botão para mostrar o histórico
btnShowHistory.addEventListener('click', function () {
    let tabelaHistory = document.querySelector('#table-second')
    tabelaHistory.classList.remove('hidden')
})
// Funções para criação dinamica da tabela do histórico
function montarHistorico(equipId) {
    limparTabela()
    for (let stateHistoryEquip of equipStateHistory) {
        // console.log(stateHistoryEquip);
        // ENTRADA DO STATES
        for (let stateForEachEquip of stateHistoryEquip.states) {
            // console.log(stateForEachEquip);
            if (equipId === stateHistoryEquip.equipmentId) {
                for (let state of equipState) {
                    // console.log(state);
                    if (stateForEachEquip.equipmentStateId === state.id) {
                        // console.log(state.name);
                        montarTableHistory(stateForEachEquip.date, state.name);
                    }
                }
            }
        }
    }
}
function montarTableHistory(date, state) {
    const historyTr = montarTrHistorico(date, state);
    const tabela = document.querySelector('#table-history')
    tabela.appendChild(historyTr)
}
function montarTrHistorico(date, state) {
    const historyTr = document.createElement('tr');
    historyTr.classList.add('history-equip')

    historyTr.appendChild(montaTd('states-date', date))
    historyTr.appendChild(montaTd('states-id', state))
    return historyTr;
}
// Função para limpar a tabela
function limparTabela() {
    let tabela = document.querySelector('#table-history')
    let tabelaHistory = document.querySelector('#table-second')
    tabelaHistory.classList.add('hidden')
    tabela.innerHTML = '';
}