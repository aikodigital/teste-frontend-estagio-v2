
const equipmentThis = JSON.parse(pegarDados("../data/equipment.json")); // Histórico de posição;

function pegarDados(url){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    return xhr.response;
}

