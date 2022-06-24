const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector('#modal')

closeModal.addEventListener('click', function() {
    modal.close()
});

const icons = {
    'Caminhão de carga':  L.icon({
        iconUrl: './img/icones/iconCaminhao.svg',
        iconSize: [40, 40]
    }),
    'Harvester': L.icon({
        iconUrl: './img/icones/iconHarvester.svg',
        iconSize: [40, 40]
    }),
    'Garra traçadora': L.icon({
        iconUrl: './img/icones/iconGarraTracadora.svg',
        iconSize: [40, 40]
    })
}

var map = L.map('map').setView([-19.126536, -45.947756], 10);

var map2 = L.map('mapaHistorico').setView([-19.126536, -45.947756], 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map2);

const equipamentos = await fetch('./data/equipment.json').then(data => data.json())

const status = await fetch('./data/equipmentState.json').then(data => data.json())

const statusDosEquipamentos = await fetch('./data/equipmentStateHistory.json').then(data => data.json())

const equipamentoModel = await fetch('./data/equipmentModel.json').then(data => data.json())

const posicoesDosEquipamentos = await fetch('./data/equipmentPositionHistory.json').then(data => data.json())

equipamentos.forEach(element => {
    

    const ultimaPosicao = posicoesDosEquipamentos.find(v => v.equipmentId === element.id).positions[0]
    const statusId = statusDosEquipamentos.find(v => v.equipmentId === element.id).states[0].equipmentStateId
    const statusAtual = status.find(v => v.id === statusId)
    const container = document.createElement('div');
    const header = document.createElement('div');
    const footer = document.createElement('div');
    const strong = document.createElement('strong');
    strong.textContent = statusAtual.name
    strong.style.color = statusAtual.color
    const p = document.createElement('span');
    const nomeDoEquipamento = equipamentoModel.find(v => v.id === element.equipmentModelId).name
    p.textContent = nomeDoEquipamento
    const button = document.createElement('button')
    button.classList.add('modal-button')
    footer.classList.add('card-footer')
    const img = document.createElement('img')
    // button.textContent = `Ver Historico do Equipamento`
    button.onclick = () => abriHistoricoDoEquipamento(element.id)
    const valorDaHoraDoEquipamento = equipamentoModel.find(v => v.id === element.equipmentModelId).hourlyEarnings
    const valorAtual = valorDaHoraDoEquipamento.find(v => v.equipmentStateId === statusAtual.id).value
    const valor = document.createElement('p')
    valor.textContent = `R$ ${valorAtual.toFixed(2)}`

    
    container.appendChild(header)
    header.innerHTML += `Status Atual: `
    header.appendChild(strong)
    header.appendChild(valor)

    container.appendChild(footer)
    footer.appendChild(p)
    footer.appendChild(button)
    button.appendChild(img)
    img.src = './img/icones/iconBotaoPopUp.svg'
    container.classList.add('popup')
    L.marker(ultimaPosicao, {icon: icons[nomeDoEquipamento]}).addTo(map).bindPopup(container)
});

function abriHistoricoDoEquipamento(equipmentId) {
    modal.showModal()

    map2.invalidateSize()
    
    const historicoDoEquipamento = posicoesDosEquipamentos.find(equipamento => equipamento.equipmentId === equipmentId)

    historicoDoEquipamento.positions.forEach((pos, index) => {
        const posicao = [pos.lat, pos.lon]

        const statusDoEquipamento = document.createElement('p')
        const div = document.createElement('div')
        const historicoDosStatus = statusDosEquipamentos.find(equipamento => equipamento.equipmentId === equipmentId).states
        const statusEquipamento = status.find(v => v.id === historicoDosStatus[index].equipmentStateId)
        const modelId =  equipamentos.find(v => v.id === equipmentId).equipmentModelId
        const valorDaHoraDoEquipamento = equipamentoModel.find(v => v.id === modelId).hourlyEarnings
        const valorAtual = valorDaHoraDoEquipamento.find(v => v.equipmentStateId === statusEquipamento.id).value
        const valor = document.createElement('p')
        const nomeDoEquipamento = equipamentoModel.find(v => v.id === modelId).name
        valor.textContent = `R$ ${valorAtual.toFixed(2)}`
        statusDoEquipamento.style.color = statusEquipamento.color
        statusDoEquipamento.textContent = statusEquipamento.name
        div.appendChild(statusDoEquipamento)
        div.appendChild(valor)

        const data = new Date(pos.date)

    L.marker(posicao, {icon: icons[nomeDoEquipamento]}).addTo(map2).bindPopup(div)
    })
}