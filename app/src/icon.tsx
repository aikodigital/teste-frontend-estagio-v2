import L from 'leaflet';


const myIconOperando = new L.Icon({
    iconUrl: require('./img/map-marker-alt-solid-operando.png'),
    iconSize: [25, 35]
});

const myIconParado = new L.Icon({
    iconUrl: require('./img/map-marker-alt-solid-parado.png'),
    iconSize: [25, 35]
});

const myIconManutencao = new L.Icon({
    iconUrl: require('./img/map-marker-alt-solid-manutencao.png'),
    iconSize: [25, 35]
});

export { myIconOperando, myIconParado, myIconManutencao };