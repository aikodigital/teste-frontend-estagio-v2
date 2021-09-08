<template>
<section class="map-hero">
  <div class="info-container">
    <h1>Mapa de Equipamentos</h1>
  </div>
<div id="mapContainer">
  <l-map id="map" :zoom="zoom" :center="center" :max-zoom="maxZoom" :min-zoom="minZoom">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <div v-for="last in positions" :key="last.equipmentId">

      <l-marker :icon="icon" :lat-lng="last.positions[5]">
        <div v-for="modelo of models" :key="modelo.equipmentId">
          <div>
            <l-tooltip v-for="statusNome in status" :key="statusNome.id">
              <h5>Ultima atividade:{{last.positions[5].date}}</h5>
              <h2>{{modelo.name}}</h2>
              <h4>{{statusNome.name}}</h4>
            </l-tooltip>

          </div>
        </div>
        
      </l-marker>
    </div>     
  </l-map>
</div>
</section>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {LMap, LTileLayer, LMarker, LTooltip} from 'vue2-leaflet'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      maxZoom: 10,
      minZoom: 2,
      center: [-19.126536, -45.947756],

      positions: [],
      status:[],
      stateHistory: [],
      models: [],
      equipment: [],

      icon: L.icon({
        iconUrl: './icon.png',
        iconSize: [32,32]
      }),

      icon2: L.icon({
        iconUrl: './icon-2.png',
        iconSize: [32,32]
      })
    };
  },

  mounted() {
    Vue.axios.get('./equipmentPositionHistory.json')
    .then((r) => {
      this.positions = r.data
    })

    Vue.axios.get('./equipmentState.json')
    .then((r) => {
      this.status = r.data
    })

    Vue.axios.get('./equipmentStateHistory.json')
    .then((r) => {
      this.stateHistory = r.data
    })

     Vue.axios.get('./equipmentModel.json')
    .then((r) => {
      this.models = r.data
    })

    Vue.axios.get('./equipment.json')
    .then((r) => {
      this.equipment = r.data
    })

    console.log(this.equipment.id[1] == this.stateHistory.id)
  },

  
}

</script>



<style>  

  #map {
  padding: 300px 600px;  
  margin-bottom: 100px;  
  border: 0.5px solid black;
  overflow: hidden;
  }

  .map-hero {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    gap: 80px;
  }

  .info-container {
    text-align: center;
    padding-top: 80px;
    color: #03336E
  }

  .info-container h1 {
    font-size: 3rem;
    line-height: 1.2;
    font-family: 'Montserrat';
  }

  @media (max-width: 600px) {
    #map {
      padding: 200px 200px;
    }
  }
</style>