var map;
var allMarkers = [];
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(-19.126536, -45.947756),
    mapTypeId: 'roadmap'
  });

  var infowindow = new google.maps.InfoWindow({
    nome: "",
  });
  
  var features=[];

  google.maps.event.addListener( map, 'click', function() { 
    infowindow.close(); 
} );

  let equipment = JSON.parse(localStorage.getItem("equipment")|| []);
  let equipmentPositionHistory = JSON.parse(localStorage.getItem("equipmentPositionHistory")|| []);
  let equipmentState = JSON.parse(localStorage.getItem("equipmentState")|| []);
  let equipmentStateHistory = JSON.parse(localStorage.getItem("equipmentStateHistory")|| []);
  let equipmentModel = JSON.parse(localStorage.getItem("equipmentModel")|| []);
  
  for (const indEqp in equipment) { 
      
    for (const indEqpPH in equipmentPositionHistory) { 
        
      let posicoes = equipmentPositionHistory[indEqpPH].positions
      let ultimaPosicao = Object.keys(posicoes).length;
      ultimaPosicao = ultimaPosicao-1;

      if(equipment[indEqp].id == equipmentPositionHistory[indEqpPH].equipmentId) { 
          
        for (const indEqpSH in equipmentStateHistory) { 

          if(equipment[indEqp].id == equipmentStateHistory[indEqpSH].equipmentId){
              
            let estEqpSH= equipmentStateHistory[indEqpSH].states;
            let ultEst = Object.keys(estEqpSH).length;
            ultEst = ultEst -1;

            for (const indiEqpEst in equipmentState) {

              if(estEqpSH[ultEst].equipmentStateId == equipmentState[indiEqpEst].id){

                for (const indEqpMdl in equipmentModel) {

                  if(equipment[indEqp].equipmentModelId == equipmentModel[indEqpMdl].id){

                    let equipmentObject = {
                      
                      nome: equipment[indEqp].name,
                      id:   equipment[indEqp].id,
                      lat:  equipmentPositionHistory[indEqpPH].positions[ultimaPosicao].lat,
                      lon:  equipmentPositionHistory[indEqpPH].positions[ultimaPosicao].lon,
                      estado: equipmentState[indiEqpEst].name,
                      cor: equipmentState[indiEqpEst].color,
                      tipo: equipmentModel[indEqpMdl].name                 
                    };
      
                    features.push(equipmentObject);
                  }
                }
              }
            }
          }
        };
      }
    }
  }
  criaMarker(features, infowindow)
}

function criaMarker(features, infowindow){

  
  for (const objeto in features) {

    if(features[objeto].tipo == 'Caminhão de carga'){

      var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        map: map,
        position: new google.maps.LatLng(features[objeto].lat,features[objeto].lon),
        id:  features[objeto].id,
        nome: features[objeto].nome,
        tipo: features[objeto].tipo,
        estado: features[objeto].estado

      });
      allMarkers.push(marker)
      
      marker.addListener('click', function() {
        infowindow.setContent('<div class="pin" style="background-color:'+ features[objeto].cor +' ;"></div><div><strong>' + features[objeto].nome + '</strong></div><div><div><strong>' + features[objeto].tipo + '</strong></div><div><small>' + features[objeto].estado + '</small></div>');
        infowindow.open(map, this);
        let section = document.querySelector("section"); 
        let intro = document.querySelector("h1")
        intro.innerHTML= " "
        section.innerHTML= " "
        mostraInfos(features[objeto].id, features[objeto].nome, features[objeto].tipo, features[objeto].lat, features[objeto].lon)
      });

    }
    else if(features[objeto].tipo == 'Harvester'){
      var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
        map: map,
        position: new google.maps.LatLng(features[objeto].lat,features[objeto].lon),
        id:  features[objeto].id,
        nome: features[objeto].nome,
        tipo: features[objeto].tipo,
        estado: features[objeto].estado
      });
      allMarkers.push(marker)
      
      marker.addListener('click', function() {
        infowindow.setContent('<div class="pin" style="background-color:'+ features[objeto].cor +' ;"></div><div><strong>' + features[objeto].nome + '</strong></div><div><div><strong>' + features[objeto].tipo + '</strong></div><div><small>' + features[objeto].estado + '</small></div>');
        infowindow.open(map, this);
        let section = document.querySelector("section"); 
        let intro = document.querySelector("h1")
        intro.innerHTML= " "
        section.innerHTML= " "
        mostraInfos(features[objeto].id, features[objeto].nome, features[objeto].tipo, features[objeto].lat, features[objeto].lon)
      });
    }
    else{
      var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
        map: map,
        position: new google.maps.LatLng(features[objeto].lat,features[objeto].lon),
        id:  features[objeto].id,
        nome: features[objeto].nome,
        tipo: features[objeto].tipo,
        estado: features[objeto].estado
      });
      allMarkers.push(marker)
      
      marker.addListener('click', function() {
        infowindow.setContent('<div class="pin" style="background-color:'+ features[objeto].cor +' ;"></div><div><strong>' + features[objeto].nome + '</strong></div><div><div><strong>' + features[objeto].tipo + '</strong></div><div><small>' + features[objeto].estado + '</small></div>');
        infowindow.open(map, this);
        let section = document.querySelector("section"); 
        let intro = document.querySelector("h1")
        intro.innerHTML= " "
        section.innerHTML= " "
        mostraInfos(features[objeto].id, features[objeto].nome, features[objeto].tipo, features[objeto].lat, features[objeto].lon)
      });

    }
  }
}

function mostraInfos(id, nome, tipo, lat, lon){
  let equipmentStateHistory = JSON.parse(localStorage.getItem("equipmentStateHistory")|| []);
  let equipmentState = JSON.parse(localStorage.getItem("equipmentState")|| []);
  let section = document.querySelector("section"); 
  let intro = document.querySelector("h1")
  intro.setAttribute("class", "intro");
  intro.innerHTML=`${nome} | ${tipo}`
  for (const indEqpSH in equipmentStateHistory) { 

    if(id == equipmentStateHistory[indEqpSH].equipmentId){
        
      let estEqpSH= equipmentStateHistory[indEqpSH].states;
      let texto = ""

      for ( const indEqpEst in equipmentState ) {


        let equipmentPositionHistory = JSON.parse(localStorage.getItem("equipmentPositionHistory")|| []);

        for ( const key in estEqpSH ) {

          let datatotalSH = new Date(estEqpSH[key].date)
          let data = datatotalSH.toLocaleString()

        let div = document.createElement("div")
        div.setAttribute("class", "info");
        div.setAttribute("id", `${nome}`);
        if(estEqpSH[key].equipmentStateId == "0808344c-454b-4c36-89e8-d7687e692d57"){
         texto = `<p><strong>Data:</strong> ${data} <br><strong>Estado:</strong> Operando `
        }else if(estEqpSH[key].equipmentStateId == "baff9783-84e8-4e01-874b-6fd743b875ad"){
          texto = `<p><strong>Data:</strong> ${data} <br><strong>Estado:</strong> Parado`
        }else{
          texto = `<p><strong>Data:</strong> ${data} <br><strong>Estado:</strong> Manutenção`
        }

        div.innerHTML=`${texto}`

        section.appendChild(div)
      }
      }
    }
  }
  console.log(section)
}

