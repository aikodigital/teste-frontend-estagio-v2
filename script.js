/* Função que renderiza os mapas */
var map;
var marker;

function ShowLocation(lat, lon, current_state) {
    if (map === undefined) {
        map = L.map('map').setView([lat, lon], 13);
    }
    else {
        map.remove();
        map = L.map('map').setView([lat, lon], 13);
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, }).addTo(map);
    L.marker([lat, lon]).addTo(map)
        .bindPopup(current_state)
        .openPopup()
}

/* Função que renderiza a página */
function render(id) {
    document.querySelector("#home").style.display = "none"
    document.querySelector(id).style.display = "flex"
}

var arr_equipment = [];
var lastelement = "";
var lastelement_id = "";
var states_of_equipments = "";

/* Renderização da página do Caminhão de Carga */
document.querySelector(".caminhao-de-carga-button").addEventListener("click", () => {
    equipment.map((e) => {
        if (e.equipmentModelId == "a3540227-2f0e-4362-9517-92f41dabbfdf") {
            adcElemento(e.name, e.id);
            arr_equipment.push(e);
        }
    })
})

/* Renderização da página do Harverster */
document.querySelector(".harverster-button").addEventListener("click", () => {
    equipment.map((e) => {
        if (e.equipmentModelId == "a4b0c114-acd8-4151-9449-7d12ab9bf40f") {
            adcElemento(e.name, e.id);
            arr_equipment.push(e);
        }
    })
})

/* Renderização da página da Garra Traçadora */
document.querySelector(".garra-traçadora-button").addEventListener("click", () => {
    equipment.map((e) => {
        if (e.equipmentModelId == "9c3d009e-0d42-4a6e-9036-193e9bca3199") {
            adcElemento(e.name, e.id);
            arr_equipment.push(e);
        }
    })
})

/* Adiciona a listagem dos equipamentos */
function adcElemento(itemname, itemid) {
    let divPai = document.querySelector(".item");
    let conteudoNovo = document.createElement("p");
    conteudoNovo.setAttribute("class", itemname + ' item hoveritem');
    conteudoNovo.setAttribute("onclick", `removeMap(); adcInfos('${itemname}'); adcOptions('${itemid}')`);
    conteudoNovo.innerHTML = itemname;
    divPai.appendChild(conteudoNovo);
}

/* Atualiza a div das informações */
function adcInfos(e) {
    arr_equipment.map((equipment) => {
        if (equipment.name == e) {
            document.querySelector("#equipment-id").innerHTML = `ID: ${equipment.id}`;
            let modelcode = (equipment.name).slice(0,2);
            let modelname = verificaModelo(modelcode); 
            document.querySelector("#equipment-model").innerHTML = `Modelo: ${modelname}`;
            equipmentsStatesHistory.map((id_of_equipment, index) => {
                if (id_of_equipment.equipmentId == equipment.id) {
                    lastelement_id = equipmentsStatesHistory[index].states[equipmentsStatesHistory[index].states.length - 1].equipmentStateId;
                    lastelement = equipmentsStatesHistory[index].states[equipmentsStatesHistory[index].states.length - 1];
                }
                equipmentsStates.map((states) => {
                    if (lastelement_id == states.id) {
                        states_of_equipments = states.name
                    }
                })
            })
            document.querySelector("#actual-status").innerHTML = `Status: ${states_of_equipments}`;
            document.querySelector("#last-analysis").innerHTML = `Ultima atualização: ${(lastelement.date).slice(0, -8).replace("T", " | ")}`;
        }
    })
}

/* Verifica o modelo do equipamento */
function verificaModelo(modelname) {
    if(modelname == "CA") {
        let modelo = "Caminhão de Carga"
        return modelo
    }
    if(modelname == "HV") {
        let modelo = "Harvester"
        return modelo
    }
    if(modelname == "GT") {
        let modelo = "Garra Traçadora"
        return modelo
    }
}

/* Remove a listagem dos equipamentos */
function removeElemento() {
    let targets = document.querySelectorAll(".hoveritem");

    for (target of targets) {
        target.remove();
    }
}

/* Remove a listagem dos options */
function removeOptions() {
    let targets = document.querySelectorAll("#equipment-dates option");

    for (target of targets) {
        if (target.value !== "none") {
            target.remove();
        }
    }
}

/* Remove as informações da tela do equipamento */
function removeInfos() {
    document.querySelector("#equipment-id").innerHTML = "ID: ---";
    document.querySelector("#equipment-model").innerHTML = "Modelo: ---";
    document.querySelector("#actual-status").innerHTML = "Status: ---";
    document.querySelector("#last-analysis").innerHTML = "Ultima atualização: ---";
}

/* Remove o mapa */
function removeMap() {
    document.getElementById("map").style.display = "none"
}

/* Evento que executa o mapa ao clicar nos options */
document.getElementById('equipment-dates').addEventListener('change', (e) => {
    if (e.target.value !== "none") {
        document.getElementById("map").style.display = "block"
        let cords = e.target.value
        let array_cords = cords.split(",")
        ShowLocation(array_cords[0], array_cords[1], array_cords[2])
    }
    if (e.target.value == "none") {
        document.getElementById("map").style.display = "none"
    }
})

/* Criar os options com as datas/horários */
function adcOptions(id) {
    let divPai = document.querySelector("#equipment-dates");
    let conteudoNovo;
    removeOptions();
    equipmentsPositions.map((item) => {
        if (item.equipmentId == id) {
            (item.positions).map((position) => {
                equipmentsStatesHistory.map((history) => {
                    (history.states).map((statesitems) => {
                        if (statesitems.date == position.date) {
                            let actualstatecode = statesitems.equipmentStateId;
                            let actualstate = verificaEstado(actualstatecode);
                            conteudoNovo = document.createElement("option");
                            conteudoNovo.setAttribute("value", `${position.lat},${position.lon}, ${actualstate}, ${position.date}`);
                            conteudoNovo.innerHTML = ((position.date).slice(0, -8).replace("T", " | "));
                            divPai.appendChild(conteudoNovo);
                        }
                    })
                })
            })
        }
    });
    // Há options repetidos, então preciso manipulá-los de modo a remover os indesejados 
      var options = [...document.querySelectorAll('option')];
      var novoOptions = options.map((e)=>e.value);
      removeOptions();
      var novaArr = novoOptions.filter((este, i) => novoOptions.indexOf(este) == i);
      var array = [];
      for(i in novaArr) {
        array.push([novaArr[i]])
      }
      array.shift();
      let arr = [];
      for(i in array) {
        array[i].map((insideitem) => {
            let insidearray = insideitem.split(",")
            let object = new Object();
            object.lat = insidearray[0];
            object.lon = insidearray[1];
            object.state = insidearray[2];
            object.date = insidearray[3];
            arr[i] = object;
        })
      }
      let arrunico = new Map();
      arr.forEach((item) => {
        if(!arrunico.has(item.date)) {
            arrunico.set(item.date , item)
        }
      })
      let uniquearray = [...arrunico.values()]
      uniquearray.map((item) => {
        conteudoNovo = document.createElement("option");
        conteudoNovo.setAttribute("value", `${item.lat},${item.lon}, ${item.state}, ${item.date}`);
        conteudoNovo.innerHTML = (item.date).slice(0, -8).replace("T", " | ");
        divPai.appendChild(conteudoNovo);
      })
}

/* Verifica o estado do item */
function verificaEstado(statecode) {
    if(statecode == "0808344c-454b-4c36-89e8-d7687e692d57") {
        let state = "Operando";
        return state;
    };
    if(statecode == "baff9783-84e8-4e01-874b-6fd743b875ad") {
        let state = "Parado";
        return state;
    };
    if(statecode == "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f") {
        let state = "Em manutenção";
        return state;
    };

}

/* Botão de voltar */
let button = document.querySelector(".voltar-button");
button.addEventListener("click", () => {
    document.querySelector(".equipment-page").style.display = "none";
    document.querySelector("#home").style.display = "flex";
    removeMap();
    removeInfos();
    removeElemento();
    removeOptions();
})

