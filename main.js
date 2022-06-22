// read local JSON file in javascript
fetch("./data/equipment.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("./data/equipmentModel.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("./data/equipmentPositionHistory.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("./data/equipmentState.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("./data/equipmentStateHistory.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

var map = L.map("mapId").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
