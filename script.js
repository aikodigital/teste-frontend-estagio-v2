$(document).ready(function() {
    dadosJson();
});

// Cria o mapa
var map = L.map(document.getElementById('mapDIV'), {
    center: [-19.126536, -45.947756],
    zoom: 15
    });
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        });
        basemap.addTo(map);
    
    
    let allmarkers = ([])
    // Remove todos os marcadores do array allmarkers
    function removeAllMarkersInMap() {
        allmarkers.forEach(function(item){
            item.remove()
            // map.removeLayer(item)
        }); 
        allmarkers = ([])
    }

    // gerar mapa
    function mapa(id) {
        console.log(id)
        fetch('data/equipmentPositionHistory.json')
        .then(response => response.json())
        .then(function(data) {
        removeAllMarkersInMap()
        data.map((me,index) => {
            me.positions.map((mi) => {  
                if (me.equipmentId === id) {
                var earthquakeMarker = L.marker([mi.lat, mi.lon], {icon:greenIcon},
                    {title: mi.date })
                earthquakeMarker.bindPopup( mi.date + ' - Ano / Mês / Dia / Horas');
                earthquakeMarker.addTo(map);
                allmarkers.push(earthquakeMarker);
                }
            })
    }) 
    });
    }

// adiciona cordenadas no mapa baseada no cursor
var coordDIV = document.createElement('div');
coordDIV.id = 'mapCoordDIV';
coordDIV.style.position = 'absolute';
coordDIV.style.bottom = '0';
coordDIV.style.left = '0';
coordDIV.style.zIndex = '900';

document.getElementById('mapDIV').appendChild(coordDIV);

map.on('mousemove', function(e){
    var lat = e.latlng.lat.toFixed(3);
    var lon = e.latlng.lng.toFixed(3);
    document.getElementById('mapCoordDIV').innerHTML = lat + ' , ' + lon;
     });

coordDIV.style.bottom = '10px';
coordDIV.style.left = '10px';
coordDIV.style.color = '#404040';
coordDIV.style.fontFamily = 'Georgia';
coordDIV.style.fontSize = '10pt';
coordDIV.style.backgroundColor = '#fff';
coordDIV.style.border = '1px solid #000';
coordDIV.style.borderRadius = '5px';
coordDIV.style.padding = '5px';

// Muda o icone de localização do mapa
var greenIcon = L.icon({
    iconUrl: 'imagens/aikoo.png',
    shadowUrl: 'imagens/aikoo.png',

    iconSize:     [38, 44], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function status(id) {
    fetch('data/equipmentStateHistory.json')
    .then(response => response.json())
    .then(function(data) {
    
});
}

    /* Pega os dados do equipment.json e exibe nos cards do Bootstrap */
    function dadosJson() {
        $.getJSON('data/equipment.json', function(json) {
            $.each(json, function() {

                let div = ''
                div += '<div class="card ml-auto mr-auto mb-5" style="width: 18rem; onmouseover= ">'
                    div += '<img class="card-img-top" src="' + this['foto'] + '" height=160.87></img>'
                    div += '<div class="card-body">'
                        div += '<h5 class="hmodal" " >Identificação: ' + this['id'] +'</h5>'
                        div += '<p class="pmodal" >Modelo da máquina: ' + this['equipmentModelId'] + '</p>'
                        div += '<p class="pmodal" >Versão: ' + this['name'] + '</p>'
                        div += '<div class"row" >'
                        div += '<button class="buttom-modal" " data-toggle="modal" type="button" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="mapa(\'' + this.id + '\')">Localizações</button>'
                        div += '<button type="button" class="buttom-modal2" data-toggle="modal" data-target=".bd-example-modal-xl" onclick="dadosJson2(\'' + this.id + '\')" >Status</button>'
                        div += '</div>'
                    div += '</div>'
                div += '</div>'
                $('#boxTeste').append(div);
            });
        });
    }

    /* Pega os dados do equipmentStateHistory.json e coloca numa tabela model(Bootstrap), e usa o each para percorrer o Array e colocar as informações do Histórico de dados na tabela */
    function dadosJson2(EquipamentId) {
        $.getJSON('data/equipmentStateHistory.json', function(json) {
            $.each(json, function() {
                if (EquipamentId == this['equipmentId']) {
                    var st = this['states'][this['states'].length - 1]
                    let div2 = '<div class="responsivo-center"><h2 class="text-center texto-responsivo pt-5 pb-5">' + this['equipmentId'] + '</h2>';
                    div2 += '<div class="card ml-auto mr-auto mb-5 card-tabela" onmouseover= ">'
                    div2 += '<div class="card-body">'
                    $.each(statusequipamento, function(){
                        if (st['equipmentStateId'] == this['id']) {
                            div2 += '<p class="text-center pt-5 pb-3"> Status atual : ' + this['name'] + '</p>';
                        }
                    })
                        div2 += '<table id="example" class="display container-fluid ml-auto mr-auto tabela-formatacao">'
                        div2 +=     '<thead>'
                        div2 +=         '<tr>'
                        div2 +=             '<th>Status</th>'
                        div2 +=             '<th>Data</th>'
                        div2 +=             '<th>Cor</th>'
                        div2 +=         '</tr>'
                        div2 +=     '</thead>'
                        div2 += '<tbody>'
                    this['states'].forEach(function(item){
                        div2 += '<tr>'
                        div2 +=     '<td>' + item['equipmentStateId'] + '</td>'
                        // trata a data e coloca na function new Date para printar já formatada na tabela
                        let data = new Date(item['date'])
                        div2 +=     '<td>' + data.toLocaleString()  + '</td>'
                        div2 +=     '<td><span style="color:' + findStatusEquipamentoById(item['equipmentStateId'])[0]['color'] +  ';"><i class="fa-solid fa-square-check"></i></span></td>'
                        div2 += '</tr>'
                    })
                        div2 += '</tbody>'
                        div2 +=     '<tfoot>'
                        div2 +=         '<tr>'
                        div2 +=             '<th>Status</th>'
                        div2 +=             '<th>Data</th>'
                        div2 +=             '<th>Cor</th>'
                        div2 +=         '</tr>'
                        div2 +=     '</tfoot>'
                        div2 += '</table>'
                        div2 += '</div>'
                        div2 += '</div>'
                    $('#test').html(div2);
                    $('#example').DataTable( {
                        "language": {
                            "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/pt-BR.json"
                        }
                    } );
                }
                
            });
        });
    }

    // .replace("T"," HR: ").substring(0, item['date'].length - 1)
    let statusequipamento ;

    /* Colocando as informações do Array dentro da variável statusequipamento */
    $.getJSON('data/equipmentState.json', function(json) {
        statusequipamento = json;
    }
    )

    /* Retorna um Array com o objeto referente ao status */
    function findStatusEquipamentoById(StatusIdEquipamento){
        return $.grep(statusequipamento, function(status, i){
          return status.id == StatusIdEquipamento;
        });
    };

   
    
    