
var map = L.map('map').setView([ -19.126536, -45.947756], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© OpenStreetMap'
}).addTo(map);

let data1=GETlo("http://127.0.0.1:5500/data/equipment.json");
let data2=GETmodel("http://127.0.0.1:5500/data/equipmentState.json");
let data3=GETmodelHis("http://127.0.0.1:5500/data/equipmentStateHistory.json");
let data4=GetPos("http://127.0.0.1:5500/data/equipmentPositionHistory.json");

let user1=JSON.parse(data1);
let state=JSON.parse(data2);
let stateHis=JSON.parse(data3);
let positon=JSON.parse(data4);

let estadoHisrico1=state[0].name;
let estadoHisrico2=state[1].name;
let estadoHisrico3=state[2].name;

let hispos=stateHis[0].equipmentId;
let hispos1=stateHis[1].equipmentId;

//console.log(hispos)
user1.map((item,index)=>{ 
const lat=positon[index].positions[0].lat;
const lon=positon[index].positions[0].lon;

var marker1 = L.marker([lat,lon]).addTo(map);
marker1.bindPopup(`
    <h3>Nome:${item.name}</h3> 
    <p>Estado atual:${hispos==item.id ? estadoHisrico1: estadoHisrico2} </p>
    <p>Estado anterior:${hispos1==item.id ? estadoHisrico3: estadoHisrico2} </p>
    ` ).openPopup();


})


function GETlo(url){
    let request=new XMLHttpRequest();
    request.open("GET",url, false);
    request.send();
    return request.responseText;
}

function GETmodel(url){
    let request=new XMLHttpRequest();
    request.open("GET",url, false);
    request.send();
    return request.responseText;
}

function GETmodelHis(url){
    let request=new XMLHttpRequest();
    request.open("GET",url, false);
    request.send();
    return request.responseText;
}

function GetPos(url){
    let request=new XMLHttpRequest();
    request.open("GET",url, false);
    request.send();
    return request.responseText;
}