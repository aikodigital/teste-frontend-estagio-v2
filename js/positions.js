var map = L.map('map').setView([-19.027071, -46.004085], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// -----------------------------
var harvester = L.icon({
    iconUrl: "assets/icons8-harvester-63.png",
  
    iconSize: [35, 35], 
    iconAnchor: [22, 94], 
    popupAnchor: [12, -90],
  });

var caminhão = L.icon({
    iconUrl: "assets/icons8-articulated-lorry-48.png",
  
    iconSize: [35, 35], 
    iconAnchor: [22, 94], 
    popupAnchor: [12, -90],
  });

var garra = L.icon({
    iconUrl: "assets/tracer claw.png",
  
    iconSize: [35, 35], 
    iconAnchor: [22, 94], 
    popupAnchor: [12, -90],
  });
//   --------------------------------

L.marker([-19.151801, -46.007759], { icon: caminhão }).addTo(map)
.bindPopup('Caminhão de carga CA-0001 em manutenção.')
.openPopup();

L.marker([-19.195811, -45.825157], { icon: caminhão }).addTo(map)
.bindPopup('Caminhão de carga, CA-0002 em manutenção.')
.openPopup();

L.marker([-19.134644, -46.087206], { icon: caminhão }).addTo(map)
.bindPopup('Caminhão de carga, CA-0003 operando.')
.openPopup();

L.marker([-18.978732, -45.918204], { icon: caminhão }).addTo(map)
.bindPopup('Caminhão de carga CA-0004 operando')
.openPopup();

L.marker([-19.027071, -46.004085], { icon: harvester }).addTo(map)
    .bindPopup('Harvester HV-1001 em manutenção.')
    .openPopup();

L.marker([-19.287676, -46.082552], { icon: harvester }).addTo(map)
    .bindPopup('Harvester HV-1002 em manutenção.')
    .openPopup();

L.marker([-19.091692, -46.14889], { icon: garra }).addTo(map)
    .bindPopup('Garra traçadora GT-2002 em manutenção.')
    .openPopup();

L.marker([-19.172475, -46.080028], { icon: garra }).addTo(map)
    .bindPopup('Garra traçadora GT-2002 operando.')
    .openPopup();

L.marker([-19.163073, -46.06338], { icon: garra }).addTo(map)
    .bindPopup('Garra traçadora GT-2003 parado.')
    .openPopup();
