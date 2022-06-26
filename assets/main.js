var equipmentObj = [];

fetch('data/equipmentPositionHistory.json')
    .then(res => res.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            var equipment_array = [];
            equipment_array = json[i];

            equipmentObj.push(equipment_array);
        }
    });

fetch('data/equipmentStateHistory.json')
    .then(res => res.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            for (let j = 0; j < equipmentObj.length; j++) {
                if (json[i].equipmentId === equipmentObj[j].equipmentId) {

                    equipmentObj[j].states = json[i].states;
                }
            }
        }
    });

fetch('data/equipment.json')
    .then(res => res.json())
    .then(json => { 
        for (let i = 0; i < json.length; i++){
            for (let j = 0; j < equipmentObj.length; j++){
                if(json[i].id === equipmentObj[j].equipmentId){
                    equipmentObj[j].equipmentModelId = json[i].equipmentModelId;
                    equipmentObj[j].name = json[i].name;

                if (equipmentObj[j].equipmentModelId === "a3540227-2f0e-4362-9517-92f41dabbfdf")
                    equipmentObj[j].icon = "greenIcon";
                if (equipmentObj[j].equipmentModelId === "9c3d009e-0d42-4a6e-9036-193e9bca3199")
                    equipmentObj[j].icon = "blueIcon";
                if (equipmentObj[j].equipmentModelId === "a4b0c114-acd8-4151-9449-7d12ab9bf40f")
                    equipmentObj[j].icon = "redIcon";
                }
            }   
        }
        load(equipmentObj)
    }
)



function load(obj) {
   

    for (let i = 0; i < obj.length; i++) {
        console.log(obj[i].icon)
        // eslint-disable-next-line no-undef
        var icon = L.marker([obj[i].positions[0].lat, obj[i].positions[0].lon], {
            icon:  greenIcon

        }).on('click', markerOnClick).addTo(map);
        

        

        icon.bindTooltip(`${obj[i].name}`, { permanent: true, className: "my-label", offset: [0, 0] });

        icon.bindPopup(obj[i].states[0]
            .equipmentStateId.toString().replace("baff9783-84e8-4e01-874b-6fd743b875ad", "Parado")
            .replace("03b2d446-e3ba-4c82-8dc2-a5611fea6e1f", "Manutenção")
            .replace("0808344c-454b-4c36-89e8-d7687e692d57", "Operando"));

        icon.on('mouseover', function () {
            this.openPopup();
        });
        icon.on('mouseout', function () {
            this.closePopup();
        });

        // eslint-disable-next-line no-inner-declarations
        function markerOnClick() {
            document.querySelector("#txtarea").innerHTML = '';
            /* alert(obj[i].states.toString()) */
            for (let j = 0; j < obj[i].states.length; j++) {

                document.querySelector("#txtarea").innerHTML += `${obj[i].states[j].date}       |     ${obj[i].states[j].equipmentStateId.toString()
                    .replace("baff9783-84e8-4e01-874b-6fd743b875ad", "Parado")
                    .replace("03b2d446-e3ba-4c82-8dc2-a5611fea6e1f", "Manutenção")
                    .replace("0808344c-454b-4c36-89e8-d7687e692d57", "Operando")} <br>`;
            }

            document.getElementById('modal_pai').style.marginTop = "-955px";
            document.getElementById('modal_pai').style.overflow = "scroll";
            document.getElementById('txtarea').style.marginTop = "20%";
            document.getElementById('txtarea').style.marginLeft = "10%";
            document.getElementById('map').style.width = "1403px";
            document.getElementById('map').style.marginLeft = "500px";

        }

    }

}

// eslint-disable-next-line no-undef
var map = L.map('map').setView([-19.126536, -45.947756], 10);
// eslint-disable-next-line no-undef
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);







// eslint-disable-next-line no-unused-vars
function closeModal() {

    document.getElementById('modal_pai').style.marginTop = "+1500px";
    document.getElementById('map').style.marginLeft = "0%";
    document.getElementById('map').style.width = "100%";

}

// eslint-disable-next-line no-undef
const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// eslint-disable-next-line no-undef
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// eslint-disable-next-line no-undef
const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})
