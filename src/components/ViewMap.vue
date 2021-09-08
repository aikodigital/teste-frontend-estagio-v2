<template>
  <section class="map-master">
    <h1>Localização do Maquinário</h1>
    <div class="map-container">
        <l-map
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
        >
        <l-tile-layer :url="url" :attribution="attribution" />
        <div v-for="maquina in positionHistory" v-bind:key="maquina.id">
            <l-marker
            :lat-lng="maquina.latlog"
            :icon="maquinaGetMarker(maquinaGetModelId(maquina.id))"
            @mouseover="$event.target.openPopup()"
            >
            <l-popup class="clicaveis">
                <p style="font-weight: bold; text-align: center">
                {{ maquinaGetName(maquina.id) }} ─
                {{ maquinaGetStateName(maquinaGetRecentState(maquina.id)) }}
                </p>
                <p style="margin-top: -15px; text-align: center">
                {{ maquinaGetModelName(maquinaGetModelId(maquina.id)) }}
                </p>
                <p
                class="clicavel"
                style="text-align: center"
                v-show="showMoreInfo"
                @click="showInfos"
                >
                Clique aqui para mais infos
                </p>
                <div
                v-for="state in maquinaGetStates(maquina.id)"
                v-bind:key="state.id"
                >
                <p v-show="showParagraph">
                    <strong>{{
                    maquinaGetStateName(state.equipmentStateId)
                    }}</strong>
                    ─ {{ formatarData(state.date) }}
                </p>
                </div>
                <p
                class="clicavel"
                style="text-align: center"
                v-show="showParagraph"
                @click="showInfos"
                >
                Clique aqui para recolher
                </p>
            </l-popup>
            </l-marker>
        </div>
        </l-map>
    </div>
  </section>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import axios from "axios";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  data() {
    return {
      zoom: 11.5,
      center: latLng(-19.126536, -45.947756),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(-19.151801, -46.007759),
      currentZoom: 11.5,
      currentCenter: latLng(-19.126536, -45.947756),
      showParagraph: false,
      showMoreInfo: true,
      mapOptions: {
        zoomSnap: 0.5,
      },
      maquinas: [],
      positionHistory: [],
      statesName: [],
      stateHistory: [],
      models: [],
      showIcon: L.icon({
        iconUrl: "/src/assets/imgs/imgs/garra.png",
        iconSize: [38, 38], // size of the icon
        shadowSize: [50, 64], // size of the shadow
      }),
    };
  },
  created() {
    this.getMaquinarios();
    this.getInfos();
    this.getStates();
    this.getModels();
  },
  methods: {
    maquinaGetMarker: function (equipmentModelId) {
      var icone;
      if (equipmentModelId === "a3540227-2f0e-4362-9517-92f41dabbfdf") {
        icone = L.icon({
          iconUrl: "/src/assets/imgs/caminhao.png",
          iconSize: [40, 21], // size of the icon
        });
      } else if (equipmentModelId === "a4b0c114-acd8-4151-9449-7d12ab9bf40f") {
        icone = L.icon({
          iconUrl: "/src/assets/imgs/colheitadeira.png",
          iconSize: [40, 25], // size of the icon
        });
      } else if (equipmentModelId === "9c3d009e-0d42-4a6e-9036-193e9bca3199") {
        icone = L.icon({
          iconUrl: "/src/assets/imgs/garra.png",
          iconSize: [40, 40], // size of the icon
        });
      } else {
        icone = L.icon({
          iconUrl: "/src/assets/imgs/marker.png",
          iconSize: [20, 40], // size of the icon
        });
      }

      return icone;
    },
    maquinaGetName: function (maquinaId) {
      var nomeDaMaquina = "";
      this.maquinas.forEach((maquina) => {
        if (maquina.id == maquinaId) {
          nomeDaMaquina = maquina.name;
        }
      });
      return nomeDaMaquina;
    },
    maquinaGetModelId: function (maquinaId) {
      var modelIdDaMaquina = "";
      this.maquinas.forEach((maquina) => {
        if (maquina.id == maquinaId) {
          modelIdDaMaquina = maquina.equipmentModelId;
        }
      });
      return modelIdDaMaquina;
    },
    maquinaGetModelName: function (modelId) {
      var modelNameDaMaquina = "";
      this.models.forEach((model) => {
        if (model.id == modelId) {
          modelNameDaMaquina = model.name;
        }
      });
      return modelNameDaMaquina;
    },
    maquinaGetRecentState: function (maquinaId) {
      var recentStateDaMaquina = "";
      this.stateHistory.forEach((maquina) => {
        if (maquina.equipmentId == maquinaId) {
          var ultimo = maquina.states.length - 1;
          recentStateDaMaquina = maquina.states[ultimo].equipmentStateId;
        }
      });
      return recentStateDaMaquina;
    },
    maquinaGetStates: function (maquinaId) {
      var StatesDaMaquina = [];
      this.stateHistory.forEach((state) => {
        if (state.equipmentId == maquinaId) {
          if (state.states.length > 5) {
            for (
              var length = state.states.length - 5;
              length < state.states.length;
              length++
            ) {
              var date = state.states[length].date,
                equipmentStateId = state.states[length].equipmentStateId;
              StatesDaMaquina.push({
                date: date,
                equipmentStateId: equipmentStateId,
              });
            }
          } else {
            StatesDaMaquina = state.states;
          }
        }
      });
      return StatesDaMaquina;
    },
    maquinaGetStateName: function (equipmentStateId) {
      var recentStateNameDaMaquina = "";
      this.statesName.forEach((state) => {
        if (state.id == equipmentStateId) {
          recentStateNameDaMaquina = state.name;
        }
      });
      return recentStateNameDaMaquina;
    },
    getMaquinarios() {
      axios
        .get("src/data/equipment.json")
        .then((res) => {
          this.maquinas = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getStates() {
      axios
        .get("src/data/equipmentState.json")
        .then((res) => {
          this.statesName = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get("src/data/equipmentStateHistory.json")
        .then((res) => {
          this.stateHistory = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getModels() {
      axios
        .get("src/data/equipmentModel.json")
        .then((res) => {
          this.models = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getInfos() {
      axios
        .get("src/data/equipmentPositionHistory.json")
        .then((res) => {
          res.data.forEach((positionHistory) => {
            var ultimo = positionHistory.positions.length - 1,
              latitude = positionHistory.positions[ultimo].lat,
              longitude = positionHistory.positions[ultimo].lon,
              id = positionHistory.equipmentId,
              latlog = latLng(latitude, longitude);
            this.positionHistory.push({
              id: id,
              latitude: latitude,
              longitude: longitude,
              latlog: latlog,
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    formatarData: function (data) {
      var dia = data.substring(8, 10),
        mes = data.substring(5, 7),
        ano = data.substring(0, 4),
        hora = data.substring(11, 13),
        minuto = data.substring(14, 16),
        resultado = dia + "/" + mes + "/" + ano + " - " + hora + ":" + minuto;
      return resultado;
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showInfos() {
      this.showParagraph = !this.showParagraph;
      this.showMoreInfo = !this.showMoreInfo;
    },
    innerClick() {
      alert("Click!");
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,400&display=swap');
.map-master {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    font-family: 'Montserrat';
}
.map-master h1 {
    margin-bottom: 30px;
    text-transform: uppercase;
    font-weight: 400;
}
.map-container {
    height: 400px;
    max-width: 900px;
    width: 100%;
    border: 2px solid #c3c3c3;
}
.clicaveis {
  min-width: 190px;
}
.clicavel {
  color: rgb(0, 79, 197);
}
.clicavel:hover {
  cursor: pointer;
  color: rgb(0, 43, 107);
}
</style>