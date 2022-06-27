<script >
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MyMap from './components/MyMap.vue'
import leaflet, { map, marker } from "leaflet"
import { onMounted } from '@vue/runtime-core'
import Navbar from './components/Navbar.vue'
import equipment from '../data/equipment.json'
import equipmentPositionHistory from '../data/equipmentPositionHistory.json'
import equipmentState from '../data/equipmentState.json'
import equipmentStateHistory from '../data/equipmentStateHistory.json'


export default {
  name: 'App',
  components: {
    MyMap,
    Navbar,
    HelloWorld,
},

//Leaflet 🗺 , parte de JS e funcionalidades
    setup() {
    
      const selected = ref('')
      let mymap;

      onMounted(() => {
        mymap = leaflet.map('mapid').setView([-19.056536, -45.977756], 6);
        mymap.setZoom(10)

      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxwaGFkdXN0IiwiYSI6ImNsNHI0ZmE0cDBndzIzanM2a3MzdXB3ZjMifQ.ibD0f-ykeycI-_Z9__0rxw",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            minZoom:5,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1IjoiYWxwaGFkdXN0IiwiYSI6ImNsNHI0ZmE0cDBndzIzanM2a3MzdXB3ZjMifQ.ibD0f-ykeycI-_Z9__0rxw",
          }
        )
        .addTo(mymap);

    var equipament = leaflet.icon({
      iconUrl: "../public/equipament-ok.png",
      shadowUrl: '../public/equipament-shadow.png',

      iconSize:     [40, 40], // size of the icon
      shadowSize:   [40, 40], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [10, 97],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var parado = []
    var operando = []
    var manutecao = []

    equipment.forEach(element => {
      const history = equipmentStateHistory.find((state) => state.equipmentId == element.id)
      var state = equipmentState.find((current) => current.id == history.states[history.states.length-1].equipmentStateId).name
      var icon = null
      switch(state) {
        case "Parado":
          icon = leaflet.icon({
            iconUrl: "../public/equipament-stop.png",
            shadowUrl: '../public/equipament-shadow.png',

            iconSize:     [40, 40], // size of the icon
            shadowSize:   [40, 40], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [10, 97],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
          });

            var estado = "parado"
            var descrition = "Este equipamento está parado no momento"
          break

        case "Operando":
          icon = leaflet.icon({
            iconUrl: "../public/equipament-ok.png",
            shadowUrl: '../public/equipament-shadow.png',

            iconSize:     [40, 40], // size of the icon
            shadowSize:   [40, 40], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [10, 97],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
          });

          var estado = "operando"
          var descrition = "Este equipamento está operando"
          break

        case "Manutenção":
          icon = leaflet.icon({
            iconUrl: "../public/equipament-maintenance.png",
            shadowUrl: '../public/equipament-shadow.png',

            iconSize:     [40, 40], // size of the icon
            shadowSize:   [40, 40], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [10, 97],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
          });

          var estado = "manutecao"
          var descrition = "Este equipamento está em manutenção"
          break
      }

      var marker = leaflet.marker([equipmentPositionHistory.find((current) => element.id == current.equipmentId).positions[equipmentPositionHistory.find((current) => element.id == current.equipmentId).positions.length-1].lat, equipmentPositionHistory.find((current) => element.id == current.equipmentId).positions[0].lon], {icon: icon}).addTo(mymap).on('click', () => selected.value = element.id)
        .bindPopup(descrition)
        .on('mouseover', function (e) {
            this.openPopup();
        })
        .on('mouseout', function (e) {
            this.closePopup();
        });

        switch(state) {
        case "Parado":
          parado.push(marker);
          break

        case "Operando":
          operando.push(marker);
          break

        case "Manutenção":
          manutecao.push(marker);
          break
      }

    });

    const paradoLayer = leaflet.layerGroup(parado)
    const operandoLayer = leaflet.layerGroup(operando)
    const manutecaoLayer = leaflet.layerGroup(manutecao)

    var overlayMaps = {
        "parados": paradoLayer,
        "operando": operandoLayer,
        "manuteção": manutecaoLayer
    };

    var layerControl = leaflet.control.layers(overlayMaps).addTo(mymap);

    });
    return {selected}
  }
  
}

</script>

<!-- Componentes Vue ⬇ -->

<template>
   <Navbar />

    <div class="pt-20 bg-[url('../background.png')] bg-slate-900 w-screen h-screen flex">
      <div class="mx-auto">
        <h1 class="lg:text-5xl pt-10 px-16 w-screen text-blue-200 font-bold font-sans text-3xl md:text-5xl text-left justify-left">Monitore a localização, estado e histórico dos equipamentos</h1>

        <div class="w-full h-auto p-16 justify-center grid grid-cols-3 gap-10 ">
   
          <MyMap class="lg:col-span-2 col-span-3"/>
          <HelloWorld class="lg:col-span-1 col-span-3" :selected="selected"/>
       </div>
      </div>
    </div>
</template>

<style>
.gridzada {
      grid-template-columns: repeat(3, minmax(0, 1fr));
}
.g2{
  	grid-column: span 2 / span 2;
}
</style>
