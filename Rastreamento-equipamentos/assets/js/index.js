class Map {
    constructor() {
        this.map();
    }

    map() {

        var map = L.map('map').setView([-19.163073, -46.06338], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        let equipamentos = JSON.parse(localStorage.getItem("infosEquip"));
        if (equipamentos === null || equipamentos.length > equipment.length) {
            localStorage.setItem("infosEquip", "[]");
            equipamentos = [];
        }

        let infosEquip = {};

        for (let i = 0; i < equipment.length; i++) {
            infosEquip = {
                id: equipment[i].id,
                idModel: equipment[i].equipmentModelId,
                idName: equipment[i].name
            }
            if (equipamentos.length !== equipment.length) {
                equipamentos.push(infosEquip);
                localStorage.setItem("infosEquip", JSON.stringify(equipamentos))
            }
            infosEquip = {
                id: "",
                idModel: "",
                idName: ""
            }
        }

        for (let iEq = 0; iEq < equipamentos.length; iEq++) {
            for (let iEM = 0; iEM < equipmentModel.length; iEM++) {
                if (equipamentos[iEq].idModel === equipmentModel[iEM].id) {
                    equipamentos[iEq].model = equipmentModel[iEM].name
                    localStorage.setItem("infosEquip", JSON.stringify(equipamentos));
                }
            }
        }

        for (let iEq = 0; iEq < equipamentos.length; iEq++) {
            for (let iESH = 0; iESH < equipmentStateHistory.length; iESH++) {
                if (equipmentStateHistory[iESH].equipmentId === equipamentos[iEq].id) {
                    for (let iESHs = 0; iESHs < equipmentStateHistory[iESH].states.length; iESHs++) {
                        equipamentos[iEq].lastState = 0;
                        if (Date.parse(equipmentStateHistory[iESH].states[iESHs].date) > equipamentos[iEq].lastState) {
                            equipamentos[iEq].lastState = equipmentStateHistory[iESH].states[iESHs].date;
                            equipamentos[iEq].idState = equipmentStateHistory[iESH].states[iESHs].equipmentStateId;
                            localStorage.setItem("infosEquip", JSON.stringify(equipamentos));

                        }

                    }
                }
            }
        }
        for (let iEq = 0; iEq < equipamentos.length; iEq++) {
            for (let iS = 0; iS < equipmentState.length; iS++) {
                if (equipamentos[iEq].idState === equipmentState[iS].id) {
                    equipamentos[iEq].state = equipmentState[iS].name;
                    equipamentos[iEq].colorState = equipmentState[iS].color;
                    localStorage.setItem("infosEquip", JSON.stringify(equipamentos));
                }
            }
        }

        for (let iEq = 0; iEq < equipamentos.length; iEq++) {
            for (let iPH = 0; iPH < equipmentPositionHistory.length; iPH++) {
                if (equipamentos[iEq].id === equipmentPositionHistory[iPH].equipmentId) {
                    for (let iPHp = 0; iPHp < equipmentPositionHistory[iPH].positions.length; iPHp++) {
                        equipamentos[iEq].lastPosition = "";
                        if (Date.parse(equipmentPositionHistory[iPH].positions[iPHp].date) > equipamentos[iEq].lastPosition) {
                            equipamentos[iEq].lastPosition = equipmentPositionHistory[iPH].positions[iPHp].date;
                            equipamentos[iEq].latitude = equipmentPositionHistory[iPH].positions[iPHp].lat;
                            equipamentos[iEq].longitude = equipmentPositionHistory[iPH].positions[iPHp].lon;
                            localStorage.setItem("infosEquip", JSON.stringify(equipamentos));
                        }
                    }
                }
            }
        }


        var caminhaoIcon = L.icon({
            iconUrl: './assets/img/caminhao-carga-h.png',
            iconSize: [60, 75], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        var harvesterIcon = L.icon({
            iconUrl: './assets/img/havester.png',

            iconSize: [120, 100], // size of the icon
            iconAnchor: [60, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        var garraIcon = L.icon({
            iconUrl: './assets/img/garra.png',

            iconSize: [128, 100], // size of the icon
            iconAnchor: [98, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        for (let iEq = 0; iEq < equipamentos.length; iEq++) {
            if (equipamentos[iEq].model === "Caminhão de carga") {
                L.marker([equipamentos[iEq].latitude, equipamentos[iEq].longitude], { icon: caminhaoIcon }).addTo(map)
                    .bindPopup(`${equipamentos[iEq].idName}: ${equipamentos[iEq].state}`)
                    .openPopup();
            }
            if (equipamentos[iEq].model === "Harvester") {
                L.marker([equipamentos[iEq].latitude, equipamentos[iEq].longitude], { icon: harvesterIcon }).addTo(map)
                    .bindPopup(`${equipamentos[iEq].idName}: ${equipamentos[iEq].state}`)
                    .openPopup();
            }
            if (equipamentos[iEq].model === "Garra traçadora") {
                L.marker([equipamentos[iEq].latitude, equipamentos[iEq].longitude], { icon: garraIcon }).addTo(map)
                    .bindPopup(`${equipamentos[iEq].idName}: ${equipamentos[iEq].state}`)
                    .openPopup();
            }

        }

        for (let iEq = 0; iEq < equipamentos.length; iEq++) {
            const btnEquip = document.createElement('button');
            btnEquip.classList.add(`${equipamentos[iEq].idName}`);
            btnEquip.innerText = equipamentos[iEq].idName;
            const states = document.querySelector('.status');
            states.appendChild(btnEquip);
        }
        this.history(equipamentos);
    }


    async history(equipamentos) {
        fetch(window.location.pathname)
            .then(response => {
                if (response.status !== 200) throw new Error(`Erro ${response.status}`);
                return response.text();
            })
            .then(history => {
                document.addEventListener('click', e => {
                    const el = e.target
                    const name = el.innerText;
                    console.log(el.innerText)
                    for (let iEq = 0; iEq < equipamentos.length; iEq++) {
                        console.log("-----------")
                        if (name === equipamentos[iEq].idName) {
                            let history = document.querySelector(".history");
                            history.innerHTML = "";
                            console.log("-----------chegou aqui")

                            for (let iESH = 0; iESH < equipmentStateHistory.length; iESH++) {
                                if (equipamentos[iEq].id === equipmentStateHistory[iESH].equipmentId) {
                                    for (let iESHs = 0; iESHs < equipmentStateHistory[iESH].states.length; iESHs++) {
                                        const table = document.createElement("table");
                                        table.classList.add("historyStates");
                                        const tr = document.createElement("tr");
                                        const th = document.createElement("th");
                                        th.innerText = "Data (Status)";
                                        tr.appendChild(th);
                                        const tr1 = document.createElement("tr1");
                                        const td = document.createElement("td");
                                        td.innerText = equipmentStateHistory[iESH].states[iESHs].date;
                                        tr1.appendChild(td)
                                        const tr2 = document.createElement("tr2");
                                        const td2 = document.createElement("td");
                                        for (let iS = 0; iS < equipmentState.length; iS++) {
                                            if (equipmentStateHistory[iESH].states[iESHs].equipmentStateId === equipmentState[iS].id) {
                                                td2.innerText = equipmentState[iS].name;
                                                if(td2.innerText === "Operando") td2.style.color = equipmentState[iS].color;
                                                if(td2.innerText === "Parado") td2.style.color = equipmentState[iS].color;
                                                if(td2.innerText === "Manutenção") td2.style.color = equipmentState[iS].color;
                                                tr2.appendChild(td2);
                                            }

                                        }

                                        table.appendChild(tr);
                                        table.appendChild(tr1);
                                        table.appendChild(tr2);

                                        history.appendChild(table);



                                    }
                                }
                            }
                        }
                    }
                })
            }).catch(e => console.log(e))
    }


}


const map = new Map();