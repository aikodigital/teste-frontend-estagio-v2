/* @@@@@@@@@@@@@@@@@@@ Importar dados Json @@@@@@@@@@@@@@@@@@@@@@ */

import equipment from "../data/equipment.json" assert { type: "json" };
import modelo from "../data/equipmentModel.json" assert { type: "json" };
import estadoAtual from "../data/equipmentState.json" assert { type: "json" };

/* @@@@@@@@@@@@@@@@@@@ CARRETAS @@@@@@@@@@@@@@@@@@@@@@ */

var map = L.map("map").setView([-19.051801, -46.017759], 10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

var garraTracadora = L.icon({
  iconUrl: "Imagens/T250D.png",

  iconSize: [68, 60], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

var colhetores = L.icon({
  iconUrl: "Imagens/colhetores.png",

  iconSize: [58, 40], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

var carreta = L.icon({
  iconUrl: "Imagens/carreta.png",

  iconSize: [58, 40], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

/* @@@@@@@@@@@@@@@@@@@ Adicionar ao mapa @@@@@@@@@@@@@@@@@@@@@@ */

L.marker([-19.151801, -46.007759], { icon: carreta }).addTo(map).bindPopup(`
<h3>Equipamento: ${equipment[0]["name"]}</h3>
<p>Tipo: ${modelo[0]["name"]}</p>
<p>Estado atual: <SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN></p>
<button onclick="maisInfo01() , penultimoEstado()" class="butmapa but1">Visualizar mais informaçôes</button>
`);

L.marker([-19.195811, -45.825157], { icon: carreta }).addTo(map).bindPopup(`
<h3>Equipamento: ${equipment[1]["name"]}</h3>
<p>Tipo: ${modelo[0]["name"]}</p>
<p>Estado atual: <SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN></p>
<button onclick="maisInfo02(), penultimoEstado()" class="butmapa but2">Visualizar mais informaçôes</button>
`);

L.marker([-19.134644, -46.087206], { icon: carreta }).addTo(map).bindPopup(`
<h3>Equipamento: ${equipment[2]["name"]}</h3>
<p>Tipo: ${modelo[0]["name"]}</p>
<p>Estado atual: <SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN></p>
<button id="button" onclick="maisInfo03(), penultimoEstado()" class="butmapa but3">Visualizar mais informaçôes</button>
`);

L.marker([-18.978732, -45.918204], { icon: carreta }).addTo(map).bindPopup(`
<h3>Equipamento: ${equipment[3]["name"]}</h3>
<p>Tipo: ${modelo[0]["name"]}</p>
<p>Estado atual: <SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN></p>
<button onclick="maisInfo04(), penultimoEstado()" class="butmapa but4">Visualizar mais informaçôes</button>
`);

L.marker([-19.027071, -46.004085], { icon: colhetores }).addTo(map).bindPopup(`
<h3>Equipamento: ${equipment[4]["name"]}</h3>
<p>Tipo: ${modelo[1]["name"]}</p>
<p>Estado atual: <SPAN style="color: ${estadoAtual[2]["color"]};">${estadoAtual[2]["name"]}</SPAN></p>
<button onclick="maisInfo05(), penultimoEstado()" class="butmapa but5">Visualizar mais informaçôes</button>
`);

L.marker([-19.287676, -46.082552], { icon: colhetores }).addTo(map).bindPopup(`
<h3>Equipamento: ${equipment[5]["name"]}</h3>
<p>Tipo: ${modelo[1]["name"]}</p>
<p>Estado atual: <SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN></p>
<button onclick="maisInfo06(), penultimoEstado()" class="butmapa but6">Visualizar mais informaçôes</button>
`);

L.marker([-19.091692, -46.14889], { icon: garraTracadora }).addTo(map)
  .bindPopup(`
<h3>Nome: ${equipment[6]["name"]}</h3>
<p>Tipo: ${modelo[2]["name"]}</p>
<p>Estado atual: <SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN></p>
<button onclick="maisInfo07(), penultimoEstado()" class="butmapa but7">Visualizar mais informaçôes</button>
`);

L.marker([-19.172475, -46.080028], { icon: garraTracadora }).addTo(map)
  .bindPopup(`
<h3>Nome: ${equipment[7]["name"]}</h3>
<p>Tipo: ${modelo[2]["name"]}</p>
<p>Estado atual: <SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN></p>
<button onclick="maisInfo08(), penultimoEstado()" class="butmapa but8">Visualizar mais informaçôes</button>
`);

L.marker([-19.163073, -46.06338], { icon: garraTracadora }).addTo(map)
  .bindPopup(`
<h3>Nome: ${equipment[8]["name"]}</h3>
<p>Tipo: ${modelo[2]["name"]}</p>
<p>Estado atual: <SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN></p>
<button onclick="maisInfo09(), penultimoEstado()" class="butmapa but9">Visualizar mais informaçôes</button>
`);
