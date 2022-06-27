const myMap = L.map("mapId");

// read local JSON file in javascript
const getEquipment = async () => {
  const result = await fetch("./data/equipment.json");
  return result.json();
};

const getEquipmentModel = async () => {
  const result = await fetch("./data/equipmentModel.json");
  return result.json();
};

const getEquipmentPositionHistory = async () => {
  const result = await fetch("./data/equipmentPositionHistory.json");
  return result.json();
};

const getEquipmentState = async () => {
  const result = await fetch("./data/equipmentState.json");
  return result.json();
};

const getEquipmentStateHistory = async () => {
  const result = await fetch("./data/equipmentStateHistory.json");
  return result.json();
};

const buildEquipmentData = async () => {
  const equipmentList = await getEquipment();
  const equipmentModelList = await getEquipmentModel();
  const equipmentPositionHistory = await getEquipmentPositionHistory();
  const equipmentState = await getEquipmentState();
  const equipmentStateHistory = await getEquipmentStateHistory();

  const equipmentData = equipmentList.map((equipment) => {
    //finds the model based on the equipmentModelId
    equipment.model = equipmentModelList.find(
      (model) => model.id === equipment.equipmentModelId
    );
    //finds the postionHistory using the equipment Id
    const positionHistory = equipmentPositionHistory.find(
      (ph) => ph.equipmentId === equipment.id
    );

    //gets the latests position, assuming the positions list is ordered
    const lastPosition = positionHistory.positions.pop();
    equipment.lat = lastPosition.lat;
    equipment.lon = lastPosition.lon;

    //finds the stateHistory using the equipment Id
    const stateHistory = equipmentStateHistory.find(
      (sh) => sh.equipmentId === equipment.id
    );
    //finds the state using the state equipmentStateId
    equipment.state = equipmentState.find(
      (state) => state.id === stateHistory.states.pop().equipmentStateId
    );

    //adds the state info to the equipment
    equipment.description = `
        <div class="popupBox" style=background-color:${equipment.state.color}>
            <h4>${equipment.model.name}</h4> 
            <h4>${equipment.name}</h4> 
            <h4>Status: ${equipment.state.name}</h4> 
        </div>`;

    return equipment;
  });
  return equipmentData;
};

//display equipment history
const displayEquipmentHistory = async (equipment) => {
  const stateHistoryList = await getEquipmentStateHistory();
  const states = await getEquipmentState();
  //find state history
  const equipmentStateHistory = stateHistoryList.find(
    (item) => item.equipmentId === equipment.id
  );

  //display individual equipment
  const historyContainer = document.querySelector(".historyContainer");
  historyContainer.style.display = "block";
  const historyList = document.querySelector(".historyList");
  const equipmentName = document.querySelector(".equipmentName");
  historyList.innerHTML = "";

  equipmentStateHistory.states.forEach((stateHistory) => {
    const state = states.find(
      (item) => item.id == stateHistory.equipmentStateId
    );
    equipmentName.innerHTML = `
      Equipment state history: ${equipment.model.name} ${equipment.name} 
      <button class="closeBtn">close</button> 
    `;
    const li = document.createElement("li");
    const date = new Date(stateHistory.date).toLocaleString();
    li.innerText = `${state.name} - ${date}`;
    historyList.appendChild(li);
  });

  const closeHistory = document.querySelector(".closeBtn");
  closeHistory.addEventListener("click", () => {
    historyContainer.style.display = "none";
  });
};

const displayMap = async () => {
  myMap.setView([-19.15, -46.0], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(myMap);

  const equipmentData = await buildEquipmentData();

  equipmentData.forEach((equipment) => {
    let iconImg;
    switch (equipment.model.name) {
      case "Caminhão de carga":
        iconImg = "img/truck.png";
        break;
      case "Harvester":
        iconImg = "img/harvester.png";
        break;
      case "Garra traçadora":
        iconImg = "img/garra.png";
    }
    const icon = L.icon({
      iconUrl: iconImg,
      iconSize: [35, 35],
    });

    L.marker([equipment.lat, equipment.lon], { icon: icon })
      .on("click", () => displayEquipmentHistory(equipment))
      .addTo(myMap)
      .bindTooltip(equipment.description, { direction: "top" });
  });
};

displayMap();
