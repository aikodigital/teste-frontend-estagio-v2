var map = L.map('map').setView([-19.151801, -46.007759], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-19.151801, -46.007759]).addTo(map)
.bindPopup('Caminhão de carga CA-0001 em manutenção.')
.openPopup();

L.marker([-19.195811, -45.825157]).addTo(map)
.bindPopup('Caminhão de carga, CA-0002 em manutenção.')
.openPopup();

L.marker([-19.134644, -46.087206]).addTo(map)
.bindPopup('Caminhão de carga, CA-0003 operando.')
.openPopup();

L.marker([-18.978732, -45.918204]).addTo(map)
.bindPopup('Caminhão de carga CA-0004 operando')
.openPopup();

L.marker([-19.027071, -46.004085]).addTo(map)
    .bindPopup('Harvester HV-1001 em manutenção.')
    .openPopup();

L.marker([-19.287676, -46.082552]).addTo(map)
    .bindPopup('Harvester HV-1002 em manutenção.')
    .openPopup();

L.marker([-19.091692, -46.14889]).addTo(map)
    .bindPopup('Garra traçadora GT-2002 em manutenção.')
    .openPopup();

L.marker([-19.172475, -46.080028]).addTo(map)
    .bindPopup('Garra traçadora GT-2002 operando.')
    .openPopup();

L.marker([-19.163073, -46.06338]).addTo(map)
    .bindPopup('Garra traçadora GT-2003 parado.')
    .openPopup();
