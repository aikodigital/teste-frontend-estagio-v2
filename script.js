import equipment from '/data/equipment.json' assert {type: 'json'}
import equipmentModel from '/data/equipmentModel.json' assert {type: 'json'}
import equipmentPositionHistory from '/data/equipmentPositionHistory.json' assert {type: 'json'}
import equipmentState from '/data/equipmentState.json' assert {type: 'json'}
import equipmentStateHistory from '/data/equipmentStateHistory.json' assert {type: 'json'}

var marker = []
var markerEsp = []
var date = []
var map2 = null;
var latLngIni = L.latLng(-19.178247, -46.070824)
var latLngIni2 = L.latLng(-19.178246, -46.070823)
var value = []

var map = L.map('map').setView(latLngIni, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

function iniciaMapa(){
    if(map2 != null){map2.remove()}

    map2 = L.map('map2').setView(latLngIni2, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map2);
}

function identificaID(mark){

    var equipmentID
    var markID = mark._leaflet_id

    for(var i = 0; i < marker.length; i++){
        if(marker[i].mark._leaflet_id == markID){
            equipmentID = marker[i].id
        }
    }
    return equipmentID;
}

function identificaPos(ID){
    var posicao;
    for(var i = 0; i < equipmentPositionHistory.length; i++){
        if(equipmentPositionHistory[i].equipmentId == ID){
            posicao = i;
        }
    }
    return posicao;
}

function criarMarcadorEsp(ID){
    markerEsp = []
    date = []
    var latlng, posicao;
    posicao = identificaPos(ID)
    
    for(var i = 0; i < equipmentPositionHistory[posicao].positions.length; i ++){
        latlng = L.latLng(equipmentPositionHistory[posicao].positions[i].lat, equipmentPositionHistory[posicao].positions[i].lon)
        
        markerEsp[i] = L.marker(latlng).addTo(map2)
    }
}

function gerenciaPopupEsp(ID){  
    var state, posicao, modelo, equip;
    posicao = identificaPos(ID)

    for(var i = 0; i < markerEsp.length; i++){
        state = equipmentStateHistory[posicao].states[i].equipmentStateId
        equip = equipment[posicao].equipmentModelId
        
        if(state == equipmentState[0].id){
            state = equipmentState[0].name
        } else if(state == equipmentState[1].id){
            state = equipmentState[1].name
        } else if(state == equipmentState[2].id){
            state = equipmentState[2].name
        }

        if(equip == equipmentModel[0].id){
            modelo = equipmentModel[0].name
        } else if(equip == equipmentModel[1].id){
            modelo = equipmentModel[1].name
        } else if(equip == equipmentModel[2].id){
            modelo = equipmentModel[2].name
        }



        markerEsp[i].bindPopup("ID: " + equipment[posicao].id + "<br>Nome: " + equipment[posicao].name +"<br>Modelo: " + modelo + "<br>Estado atual: " + state);
        markerEsp[i].on('mouseover', function(){
            this.openPopup();
        });
        markerEsp[i].on('mouseout', function(){
            this.closePopup();
        })
    }
}

function iniciaModal(mark){

    const modal = document.getElementById('modal-inf')
    modal.classList.add('mostrar')

    iniciaMapa()
    criarMarcadorEsp(identificaID(mark))
    gerenciaPopupEsp(identificaID(mark))

    modal.addEventListener('click', (e) => {
        if(e.target.className == 'botao-fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

function criarMarcador(){
    var latlng, ultimo;

    for(var i = 0; i < equipmentPositionHistory.length; i ++){
        ultimo = equipmentPositionHistory[i].positions.length - 1
        latlng = L.latLng(equipmentPositionHistory[i].positions[ultimo].lat, equipmentPositionHistory[i].positions[ultimo].lon)
        marker[i] = {id: equipment[i].id, mark: L.marker(latlng).addTo(map)}
    }
}

function gerenciaPopup(){  
    var ultimo, state, modelo, equip;
    for(var i = 0; i < marker.length; i++){
        ultimo = equipmentStateHistory[i].states.length - 1
        state = equipmentStateHistory[i].states[ultimo].equipmentStateId
        equip = equipment[i].equipmentModelId
   

        if(state == equipmentState[0].id){
            state = equipmentState[0].name
        } else if(state == equipmentState[1].id){
            state = equipmentState[1].name
        } else if(state == equipmentState[2].id){
            state = equipmentState[2].name
        }

        if(equip == equipmentModel[0].id){
            modelo = equipmentModel[0].name
        } else if(equip == equipmentModel[1].id){
            modelo = equipmentModel[1].name
        } else if(equip == equipmentModel[2].id){
            modelo = equipmentModel[2].name
        }

        marker[i].mark.bindPopup("ID: " + equipment[i].id + "<br>Nome: " + equipment[i].name + "<br>Modelo: " + modelo + "<br>Estado atual: " + state);
        marker[i].mark.on('mouseover', function(){
            this.openPopup();
        });
        marker[i].mark.on('mouseout', function(){
            this.closePopup();
        })
        marker[i].mark.on('click', function(){
            iniciaModal(this)
        });
    }
}




criarMarcador()
gerenciaPopup()