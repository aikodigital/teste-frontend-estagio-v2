
/*Recuperando os arquivos JSON para manipualar*/
let recuperando,equipmentModel
fetch('data/equipmentModel.json')
.then( response => response.json() )
.then( modeloEquipamento => {
    if(modeloEquipamento.erro) {
        console.log("Erro ao acessar o JSON")
        return
    }
    console.log(modeloEquipamento)
    equipmentModel = JSON.parse(JSON.stringify(modeloEquipamento))
})

let  equipment
 
  fetch('data/equipment.json')
    .then( response => response.json() )
    .then( equipamento => {
        if(equipamento.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        console.log(equipamento) 
        equipment = JSON.parse(JSON.stringify(equipamento))
    })
    

    let positionHistory

  fetch('data/equipmentPositionHistory.json')
    .then( response => response.json() )
    .then( equipamentoPosicao => {
        if( equipamentoPosicao.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        console.log( equipamentoPosicao)
        positionHistory = JSON.parse(JSON.stringify( equipamentoPosicao))
    })

    let equipmentState
    fetch('data/equipmentState.json')
    .then( response => response.json() )
    .then( equipamentoStatus => {
        if( equipamentoStatus.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        console.log( equipamentoStatus)
        equipmentState = JSON.parse(JSON.stringify( equipamentoStatus))
    })

    let stateHistory
    fetch('data/equipmentStateHistory.json')
    .then( response => response.json() )
    .then( estadoEquipamento => {
        if( estadoEquipamento.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        console.log( estadoEquipamento)
        stateHistory = JSON.parse(JSON.stringify( estadoEquipamento))
    })
   
//criação do mapa
let posicaoMaisAtual
var map = L.map('mapa').setView([-19.5, -45.5], 10.5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '© OpenStreetMap'
}).addTo(map);
/*Definindo icones dos qeuoamentos*/
let caminhao = L.icon({
    iconUrl: 'img/caminhao.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});
let harvester = L.icon({
    iconUrl: 'img/harvester.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});
let forestry = L.icon({
    iconUrl: 'img/forestry.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

/*Função responsavel por desenhar o marcador*/
function criandoMarcador(latidude,longetude,id,idEquipamento){
    if(tipoEquipamento(idEquipamento) == 'Caminhão de carga'){
        let marker
        marker = L.marker([latidude, longetude],{icon: caminhao}).addTo(map);
        marker.bindPopup('<h2 class="estiloPoup">'+informacoesEquipamento(id)+'</h2>'+
        '<h4 class="estiloPoup" style="top: -1vh;">'+tipoEquipamento(idEquipamento)+'</h4>'+
        '<img class="estiloPoup" src="'+ simboloStatus(estadoAtualEquipamento(id))+'"style="top: 0vh;width:50px; height: 50px; position: relative;left: 3vw;"alt="">'
        +'<br>'+'<h4 class="estiloPoup" style="top: 1vh;">'+estadoAtualEquipamento(id)+'</h4>'+ '<br>'+
        '<a class="estiloPoup" id="'+informacoesEquipamento(id)+'"value="'+informacoesEquipamento(id)+'"onclick="historico(this)" href="#historico">Exibir Historico</a>').openPopup();
        return marker
    }
    else if(tipoEquipamento(idEquipamento) == 'Harvester'){
        let marker
        marker = L.marker([latidude, longetude],{icon: harvester}).addTo(map);
        marker.bindPopup('<h2 class="estiloPoup">'+informacoesEquipamento(id)+'</h2>'+
         '<h4 class="estiloPoup" style="top: -1vh;">'+tipoEquipamento(idEquipamento)+'</h4>'+
        '<img src="'+ simboloStatus(estadoAtualEquipamento(id))+'" style="top: 0vh;position: relative;left: 3vw;width:50px; height: 50px; color: #2ecc71"alt="">'
          +'<h4 class="estiloPoup" style="top: 1vh;">'+estadoAtualEquipamento(id)+'</h4>'+
        '<a id="'+informacoesEquipamento(id)+'"value="'+informacoesEquipamento(id)+'"onclick="historico(this)" href="#historico">Exibir Historico</a>').openPopup();
        return marker
    }
    else if(tipoEquipamento(idEquipamento) == 'Garra traçadora'){
        let marker
        marker = L.marker([latidude, longetude],{icon: forestry}).addTo(map);
        marker.bindPopup('<h2 class="estiloPoup">'+informacoesEquipamento(id)+'</h2>'
         +'<h4 class="estiloPoup" style="top: -1vh;">'+tipoEquipamento(idEquipamento)+'</h4>'
         +'<img class="estiloPoup" src="'+ simboloStatus(estadoAtualEquipamento(id))+'" style="top:0vh; position: relative;left: 3vw; width:50px; height: 50px;"alt="">'
         +'<h4 class="estiloPoup" style=" top: -1vh;left: 1em;">'+estadoAtualEquipamento(id) +'</h4>'+
        '<a class="estiloPoup" id="'+informacoesEquipamento(id)+'"value="'+informacoesEquipamento(id)+'"onclick="historico(this)" href="#historico">Exibir Historico</a>').openPopup();
        return marker
    }
}
let b
function simboloStatus(e){
    console.log(e)
        if(e=='Status Operando'){
          return 'img/operador.png'
        }
       else if(e=='Status Parado'){
        return  'img/no-stopping.png'
        }
        else if(e=='Status Manutenção'){
            return 'img/manutencao.png'

        }
}
/*Função responsavel por identificar o equipamento*/
function informacoesEquipamento(idEquipamento){ 
    let identificacao,tipo, idDotipo
    for(let i in equipment){
        if(equipment[i].id == idEquipamento){
            identificacao = equipment[i].name
            idDotipo = equipment[i].equipmentModelId

        }
        for(let i in equipmentModel){
            if(equipmentModel[i].id==idDotipo){
                tipo = equipmentModel[i].name
            }
        }
    }
    return identificacao
}  
function tipoEquipamento(idEquipamento){ 
    let tipo, idDotipo
    for(let i in equipment){
        if(equipment[i].id == idEquipamento){
            idDotipo = equipment[i].equipmentModelId

        }
        for(let i in equipmentModel){
            if(equipmentModel[i].id==idDotipo){
                tipo = equipmentModel[i].name
            }
        }
    }
    return tipo
}  
/*Função responsavel por verificar o status atual do equipamento*/
function estadoAtualEquipamento(e){
    let situacaoAtual,ultimoStatu,idStatusAtual
    for(let i in stateHistory){
        if(stateHistory[i].equipmentId == e){
            stateHistory[i].states.sort()
            ultimoStatu = stateHistory[i].states.length-1
            idStatusAtual = stateHistory[i].states[ultimoStatu].equipmentStateId
        } 
    }
    for(let i in equipmentState){
        if(equipmentState[i].id == idStatusAtual){
            situacaoAtual=equipmentState[i].name
        }
    }

    return 'Status '+situacaoAtual
}


/*Função responsavel por colocar os marcadores no mapa*/
function recuperandoPosicao(){
   let carregarMapa = document.getElementById('carregarMapa')
   carregarMapa.classList.add('exibirMapa')
    console.log('iniciada')
    for(let i in positionHistory){
        posicaoMaisAtual=positionHistory[i].positions.length-1
        if(positionHistory[i].equipmentId==equipment[0].id){
            criandoMarcador(positionHistory[i].positions[posicaoMaisAtual].lat,positionHistory[i].positions[posicaoMaisAtual].lon,equipment[0].id,equipment[0].id)
        }
        else if(positionHistory[i].equipmentId==equipment[1].id){
            criandoMarcador(positionHistory[i].positions[posicaoMaisAtual].lat,positionHistory[i].positions[posicaoMaisAtual].lon,equipment[1].id,equipment[1].id)
        }
        else if(positionHistory[i].equipmentId==equipment[2].id){
            criandoMarcador(positionHistory[i].positions[posicaoMaisAtual].lat,positionHistory[i].positions[posicaoMaisAtual].lon,equipment[2].id,equipment[2].id)
        }
        else if(positionHistory[i].equipmentId==equipment[3].id){
           criandoMarcador(positionHistory[i].positions[posicaoMaisAtual].lat,positionHistory[i].positions[posicaoMaisAtual].lon,equipment[3].id,equipment[3].id)
        }
        else if(positionHistory[i].equipmentId==equipment[4].id){
            criandoMarcador(positionHistory[i].positions[posicaoMaisAtual].lat,positionHistory[i].positions[posicaoMaisAtual].lon,equipment[4].id,equipment[4].id)
         }
        else if(positionHistory[i].equipmentId==equipment[5].id){
            criandoMarcador(positionHistory[i].positions[posicaoMaisAtual].lat,positionHistory[i].positions[posicaoMaisAtual].lon,equipment[5].id,equipment[5].id)
        }
        else if(positionHistory[i].equipmentId==equipment[6].id){
            criandoMarcador(positionHistory[i].positions[posicaoMaisAtual].lat,positionHistory[i].positions[posicaoMaisAtual].lon,equipment[6].id,equipment[6].id)
         }
        else if(positionHistory[i].equipmentId==equipment[7].id){
            criandoMarcador(positionHistory[i].positions[posicaoMaisAtual].lat,positionHistory[i].positions[posicaoMaisAtual].lon,equipment[7].id,equipment[7].id)
        }
        else if(positionHistory[i].equipmentId==equipment[8].id){
            criandoMarcador(positionHistory[i].positions[posicaoMaisAtual].lat,positionHistory[i].positions[posicaoMaisAtual].lon,equipment[8].id,equipment[8].id)
        }
    }
}
let criandoHistorico= document.getElementById('selecionarEquipamento')
let salvandoIdentificadorEqp
function historico(e){
    console.log(e.id)
     let cedula,data,situacao,eq,mostraNome,n
     let listarHistorico = document.getElementById('mostrar')
    /*Recupando o identificador do equipamento*/
    while (listarHistorico.firstChild) {
        listarHistorico.removeChild(listarHistorico.firstChild);
      }
      if(e.id == 'CA-0001' ||e.id == 'CA-0002' || e.id == 'CA-0003' || e.id == 'CA-0004'){
          n='Caminhão de Carga'
      }
     else  if(e.id == 'GT-2001' ||e.id == 'GT-2002' || e.id == 'GT-2003'){
          n='Garra traçadora'
      }
     else if(e.id == 'HV-1001' ||e.id == 'HV-1002'){
          n='Garra traçadora'
      }
    for(let i in equipment){
        if(equipment[i].name == e.id){
            salvandoIdentificadorEqp = equipment[i].id
        }
    } 
    mostraNome = e.id
    for(let i in positionHistory){
        if(positionHistory[i].equipmentId==equipment[i].id){
        criandoMarcador(positionHistory[i].positions[i].lat,positionHistory[i].positions[i].lon,equipment[i].id,equipment[i].id)
        }
    }
    for(let i in stateHistory){
        if(stateHistory[i].equipmentId == salvandoIdentificadorEqp){
            /*Teste para implementação do visulizador de rotas*/
        for(let j in stateHistory[i].states){
                cedula = document.createElement('tr')
                data = document.createElement('td')
                situacao = document.createElement('td')
                eq =  document.createElement('td')
                nome  =  document.createElement('td')
                data.innerHTML = stateHistory[i].states[j].date
                cedula.appendChild(data)
                if(stateHistory[i].states[j].equipmentStateId =='0808344c-454b-4c36-89e8-d7687e692d57'){
                    situacao.innerHTML = 'Operando'
                    situacao.style.color="#2ecc71"
                    eq.innerHTML =mostraNome
                    nome.innerHTML = n
                    cedula.appendChild(situacao)
                    cedula.appendChild(eq)
                    cedula.appendChild(nome)

                }
                else if(stateHistory[i].states[j].equipmentStateId=='baff9783-84e8-4e01-874b-6fd743b875ad'){
                    situacao.innerHTML = 'Parado'
                    situacao.style.color="#f1c40f"
                    eq.innerHTML =mostraNome  
                    nome.innerHTML = n                 
                    cedula.appendChild(situacao)
                    cedula.appendChild(eq)
                    cedula.appendChild(nome)
                }
                else if(stateHistory[i].states[j].equipmentStateId=='03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'){
                    situacao.innerHTML = 'Manutenção'
                    situacao.style.color="#e74c3c"
                    eq.innerHTML =mostraNome
                    nome.innerHTML = n
                    cedula.appendChild(situacao)
                    cedula.appendChild(eq)
                    cedula.appendChild(nome)
        
                }
                listarHistorico.append(cedula)
            }

        }
    }
}
 
 criandoHistorico.addEventListener("click",historico,false);