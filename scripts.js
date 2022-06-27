//Importing JSON
import equipment         from './data/equipment.json' assert {type : 'json'};
import equipmentModel    from './data/equipmentModel.json' assert {type : 'json'};
import equipmentPosHis   from './data/equipmentPositionHistory.json' assert {type : 'json'};
import equipmentState    from './data/equipmentState.json' assert {type : 'json'};
import equipmentStateHis from './data/equipmentStateHistory.json' assert {type : 'json'};

//Global variables
let model, 
    name,
    lat = 0,
    lon = 0,
    state,
    markerId,
    equipStateStatus = [],
    icon;

//Showing equipments and their respective names
for(var i = 0; i < equipment.length; i++){
  
  //Assigning atributes
  for(var j = 0; j < equipmentModel.length; j++){
    if(equipment[i].equipmentModelId == equipmentModel[j].id){
      //Displaying name & model
      model = equipmentModel[j].name;
      name = equipment[i].name;
      newIcon(model);
    }
  }

  //Setting states
  for(var j = 0; j < equipmentStateHis.length; j++){

    if(equipment[i].id == equipmentStateHis[j].equipmentId){
      equipStateStatus[i] = equipmentStateHis[j];
    }

    if(equipment[i].id == equipmentStateHis[j].equipmentId){
      var maxPosition = equipmentStateHis[j].states.length - 1;

      //Changing the equipment state id to name
      for(var k = 0; k < equipmentState.length; k++){
        if(equipmentState[k].id == equipmentStateHis[j].states[maxPosition].equipmentStateId){
          state = equipmentState[k].name;
        }
      }
    }
  }

  //Lat and lon & defining markers
  for(var j = 0; j < equipmentPosHis.length; j++){
    
    if(equipment[i].id == equipmentPosHis[j].equipmentId){
      var maxPosition = equipmentPosHis[j].positions.length - 1;
      lat = equipmentPosHis[i].positions[maxPosition].lat;
      lon = equipmentPosHis[i].positions[maxPosition].lon;

      //Creating marker
      let marker = L.marker([lat, lon], {alt : equipment[i].id, riseOnHover : true, icon : icon});
      marker.addTo(map);
      marker._leaflet_id = model;

      //Creating popups
      //On mouse over
      marker.on("mouseover", (hover) => {
        elementInfo(hover);
        hover.target.bindPopup(`${hover.target._leaflet_id} : ${name} <br> Status : ${state}`).openPopup();
      })
      //On mouse out
      marker.on("mouseout", (hover) => {
        hover.target.bindPopup(`${hover.target._leaflet_id} : ${name} <br> Status : ${state}`).closePopup();
      })

      //Checking input
      marker.on("click", (clicked) => {
        //Moving the map on click
        map.setView(clicked.target._latlng, 12);
        //Marker id
        markerId = clicked.target.options.alt;
        document.getElementById("listOfContent").innerHTML = "";   
        
        elementInfo(clicked)
        var headerInfo = document.getElementById("posHisHeaderTxt");
        headerInfo.innerHTML = `${name} | Status: ${state}`;

        //Creating list elements
        equipStateStatus.forEach(element => {
          if(markerId == element.equipmentId){
            var teste = element.states;
            teste.forEach(state => {
              var date = new Date(state.date);
              var i = 0;
              while(i < equipmentState.length){
                if(state.equipmentStateId == equipmentState[i].id){
                  var li = document.createElement("li");
                  var color = equipmentState[i].color;
                  document.getElementById("listOfContent").appendChild(li);
                  li.innerHTML = `${dateFormating(date)} Status : ${equipmentState[i].name}`;
                  li.style.backgroundColor = color;
                  document.getElementById("posHisHeader").style.backgroundColor = color;

                }
                i++;
              }
            })
          }
        }); 
      });
    }
  }
  
}

//Reseting the research
document.addEventListener("keypress", (key) => {
  if(key.code == "Space"){
    document.getElementById("posHisHeader").style.backgroundColor = "#55a1dd";
    document.getElementById("posHisHeaderTxt").innerHTML = "Escolha um equipamento";
    document.getElementById("listOfContent").innerHTML = ""; 
    map.setView([-19.151801, -46.007759], 10);
  }
})

//Functions
function dateFormating(date){
  let day = date.getDate();
  let month = (date.getMonth() + 1);
  let year = date.getFullYear();
  let hour = date.getUTCHours();
  let minutes = date.getUTCMinutes();

  day = formatingZero(day);
  month = formatingZero(month);
  hour = formatingZero(hour);
  minutes = formatingZero(minutes);

  function formatingZero(dateElement){
    if(dateElement < 10){
      return dateElement = `0${dateElement}`;
    }else{
      return dateElement;
    }
  }

  return `${day}/${month}/${year} - ${hour}:${minutes}`
}

function elementInfo(element){
  for(var i = 0; i < equipment.length; i++){
    if(equipment[i].id == element.target.options.alt){
      name = equipment[i].name;
      equipmentStateHis.forEach(equipment => {
        if(element.target.options.alt == equipment.equipmentId){
          var lastIndex = equipment.states.length-1;
          equipmentState.forEach(element => {
            if(element.id == equipment.states[lastIndex].equipmentStateId){
              state = element.name;
            }
          })
        }
      })
    }
  }
}

function newIcon(model){
  var iconType, iconSize;
  switch(model){
    case "Caminhão de carga":
      iconType = "./icons/caminhao-de-carga.png"
      iconSize = [232/3, 90/3];
      break;
    case "Harvester":
      iconType = "./icons/harvester.png"
      iconSize = [258/3, 105/3];
      break;
    case "Garra traçadora":
      iconType = "./icons/garra-tracadora.png"
      iconSize = [284/4, 173/4];
      break;
  }
  return icon = L.icon({iconUrl : iconType, iconSize : iconSize});
}