const baseStatus = [
  {
    id: "0808344c-454b-4c36-89e8-d7687e692d57",
    name: "Operando",
    color: "#2ecc71"
  },
  {
    id: "baff9783-84e8-4e01-874b-6fd743b875ad",
    name: "Parado",
    color: "#f1c40f"
  },
  {
    id: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
    name: "Manutenção",
    color: "#e74c3c"
  }
]

var baseMarcadores = {
  "ca0001": {
  name: "CA-0001",
  id: "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
  equipmentModelId: "a3540227-2f0e-4362-9517-92f41dabbfdf",
  position: [
    (ps = {
      date: "2021-02-28",
      hour: "17:00:00.000",
      lat: -19.151801,
      lon: -46.007759,
    }),
  ]},
  "ca0002" : {
    name: "CA-0002",
    id: "1c7e9615-cc1c-4d72-8496-190fe5791c8b",
    equipmentModelId: "a3540227-2f0e-4362-9517-92f41dabbfdf",
    position: [
    (ps = {
      date: "2021-02-28",
      hour: "16:00:00.000",
      lat: -19.195811,
      lon: -45.825157,
    }),
  ]},
  "ca0003" : {
    id: "2b5796cb-21c1-480e-8886-4498ea593a65",
    equipmentModelId: "a3540227-2f0e-4362-9517-92f41dabbfdf",
    name: "CA-0003",
    position: [
      (ps = {
        date: "2021-03-01",
        hour: "00:00:00.000",
        lat: -19.134644,
        lon: -46.087206,
      }),
    ]},
  "ca0004" : {
  id: "1d222cdc-01dd-4caa-8934-5351d3995cfb",
  equipmentModelId: "a3540227-2f0e-4362-9517-92f41dabbfdf",
  name: "CA-0004",
  position: [
    (ps = {
      date: "2021-03-01",
      hour: "00:00:00.000",
      lat: -18.978732,
      lon: -45.918204,
    }),
  ]},
  "hv1001" : {
  id: "491b983b-950c-4a88-942d-487e99b92540",
  equipmentModelId: "a4b0c114-acd8-4151-9449-7d12ab9bf40f",
  name: "HV-1001",
  position: [
    (ps = {
      date: "2021-02-28",
      hour: "21:00:00.000",
      lat: -19.027071,
      lon: -46.004085,
    }),
  ]},
  "hv1002" : {
    id: "39317fcb-79e7-4e7e-83dc-723a9b63633c",
    equipmentModelId: "a4b0c114-acd8-4151-9449-7d12ab9bf40f",
    name: "HV-1002",
    position: [
      (ps = {
        date: "2021-02-28",
        hour: "21:00:00.000Z",
        lat: -19.287676,
        lon: -46.082552,
      }),
    ]},
  gt2001 : 
    {
      id: "c79ef1de-92f3-4edd-bd55-553056640449",
      equipmentModelId: "9c3d009e-0d42-4a6e-9036-193e9bca3199",
      name: "GT-2001",
      position: [
        (ps = {
          date: "2021-02-28",
          hour: "15:00:00.000",
          lat: -19.091692,
          lon: -46.14889,
        }),
      ]},
      gt2002 : {
        id: "b7aaba00-13f7-44a0-8bf1-bc163afcf9d8",
        equipmentModelId: "9c3d009e-0d42-4a6e-9036-193e9bca3199",
        name: "GT-2002",
        position: [
          (ps = {
            date: "2021-02-28",
            hour: "15:00:00.000",
            lat: -19.164433,
            lon: -46.032432,
          }),
        ]},
        gt2003 : {
          id: "fe2a2e11-bfa6-46b6-990b-fd8175946b7e",
          equipmentModelId: "9c3d009e-0d42-4a6e-9036-193e9bca3199",
          name: "GT-2003",
          position: [
            (ps = {
              date: "2021-03-01T01",
              hour: "00:00.000",
              lat: -19.163073,
              lon: -46.06338,
            }),
          ]}
}

function mostraEquipouModelos() {
  let pesquisa = document.getElementById("selecao");
  if (pesquisa.value == "eqp") {
    document.getElementById("equipaments").style.display = "block";
  } else {
    document.getElementById("equipaments").style.display = "none";
  }
  if (pesquisa.value == "mdl") {
    document.getElementById("models").style.display = "block";
  } else {
    document.getElementById("models").style.display = "none";
  }
}

function mostraEquipamentos() {
    document.getElementById('equipamentos');
    if(document.getElementById('equipamentos').value == "ca0001"){
        document.getElementById('ca0001').style.display = "block";
    }
    else{
        document.getElementById('ca0001').style.display = "none";
    }
    if(document.getElementById('equipamentos').value == "ca0002"){
        document.getElementById('ca0002').style.display = "block";
    }
    else{
        document.getElementById('ca0002').style.display = "none";
    }
    if(document.getElementById('equipamentos').value == "ca0003"){
        document.getElementById('ca0003').style.display = "block";
        }
    else{
        document.getElementById('ca0003').style.display = "none";
    }
    if(document.getElementById('equipamentos').value == "ca0004"){
        document.getElementById('ca0004').style.display = "block";
    }
    else{
        document.getElementById('ca0004').style.display = "none";
    }
    if(document.getElementById('equipamentos').value == "hv1001"){
        document.getElementById('hv1001').style.display = "block";
    }
    else{
        document.getElementById('hv1001').style.display = "none";
    }
    if(document.getElementById('equipamentos').value == "hv1002"){
        document.getElementById('hv1002').style.display = "block";
    }
    else{
        document.getElementById('hv1002').style.display = "none";
    }
    if(document.getElementById('equipamentos').value == "gt2001"){
        document.getElementById('gt2001').style.display = "block";
    }
    else{
        document.getElementById('gt2001').style.display = "none";
    }
    if(document.getElementById('equipamentos').value == "gt2002"){
        document.getElementById('gt2002').style.display = "block";
    }
    else{
        document.getElementById('gt2002').style.display = "none";
    }
    if(document.getElementById('equipamentos').value == "gt2003"){
        document.getElementById('gt2003').style.display = "block";
    }
    else{
        document.getElementById('gt2003').style.display = "none";
    }
}
function mostraModelos(){
    let pesquisa = document.getElementById('modelos');
    if (pesquisa.value == "cdc"){
        document.getElementById('ca0001').style.display = "block";
        document.getElementById('ca0002').style.display = "block";
        document.getElementById('ca0003').style.display = "block";
        document.getElementById('ca0004').style.display = "block";
    }
    else{
        document.getElementById('ca0001').style.display = "none";
        document.getElementById('ca0002').style.display = "none";
        document.getElementById('ca0003').style.display = "none";
        document.getElementById('ca0004').style.display = "none";
    }
    if (pesquisa.value == "hv"){
        document.getElementById('hv1001').style.display = "block";
        document.getElementById('hv1002').style.display = "block";
    }
    else{
        document.getElementById('hv1001').style.display = "none";
        document.getElementById('hv1002').style.display = "none";
    }
    if (pesquisa.value == "gt"){
        document.getElementById('gt2001').style.display = "block";
        document.getElementById('gt2002').style.display = "block";
        document.getElementById('gt2003').style.display = "block";
    }
    else{
        document.getElementById('gt2001').style.display = "none";
        document.getElementById('gt2002').style.display = "none";
        document.getElementById('gt2003').style.display = "none";
    }

}
///////////////////////////// FUNÇÕES MAPA ////////////////////////////////

var map = L.map("map").setView([-19.171667, -46.044589], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 5,
  attribution: "© OpenStreetMap",
}).addTo(map);

function criarMarcador (id){
  if(!id)return;
  let marker = new L.Marker([baseMarcadores[id].position[0].lat, baseMarcadores[id].position[0].lon]);
  marker.addTo(map);
  marker.bindPopup(`<b>${baseMarcadores[id].name}</b><br><b>Data:</b>${baseMarcadores[id].position[0].date}<br><b>Hora:</b>${baseMarcadores[id].position[0].hour}<br><b>Status:</b> ${baseStatus[0].name}`).openPopup();
  
} 

function carregarHistorico(id){
  if(!id)return;
  let marcadorHistorico = meuObjeto.filter((marcador) => marcador.equipmentId === baseMarcadores[id].id);
  let div = document.getElementById('historico');
  if(!marcadorHistorico.length)return;
  let titulo = document.createElement("h4");
  titulo.textContent = "Histórico do Equipamento: "  + baseMarcadores[id].name;
  div.appendChild(titulo);
  marcadorHistorico[0].states.forEach(states => {
    let p = document.createElement("p");
    let status = baseStatus.filter(status => status.id === states.equipmentStateId)[0];
    p.textContent = "Status: "+status.name;
    let p2 = document.createElement("p");
    p2.textContent = "Data e hora: " + states.date;
    let hr = document.createElement("hr");
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(hr);
  })
}

