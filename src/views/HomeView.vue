<template>
  <div id="mainContainer">
    <div style="height: 50vh; width: 100vw">
      <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[-19.151801, -46.007759]"
        @move="log('move')"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-layers />
        <l-marker
          :lat-lng="[-19.151801, -46.007759]"
          draggable
          @moveend="log('moveend')"
        >
          <l-popup> OPERANDO </l-popup>
          <l-tooltip>CA-0001</l-tooltip>
        </l-marker>
        

        <l-marker
          :lat-lng="[-19.195811, -45.825157]"
          draggable
          @moveend="log('moveend')"
        >
          <l-popup> OPERANDO </l-popup>
          <l-tooltip>CA-0002</l-tooltip>
        </l-marker>

        <l-marker
          :lat-lng="[-18.978732, -45.918204]"
          draggable
          @moveend="log('moveend')"
        >
          <l-popup> OPERANDO </l-popup>
          <l-tooltip>CA-0003</l-tooltip>
        </l-marker>

        <l-marker
          :lat-lng="[-19.027071, -46.004085]"
          draggable
          @moveend="log('moveend')"
        >
          <l-popup> OPERANDO </l-popup>
          <l-tooltip>CA-0004</l-tooltip>
        </l-marker>

        <l-marker
          :lat-lng="[-19.287676, -46.082552]"
          draggable
          @moveend="log('moveend')"
        >
          <l-popup>MANUTENÇÃO </l-popup>
          <l-tooltip>HV-1001</l-tooltip>
        </l-marker>

        <l-marker
          :lat-lng="[-19.172475, -46.080028]"
          draggable
          @moveend="log('moveend')"
        >
          <l-popup> OPERANDO </l-popup>
          <l-tooltip>HV-1002</l-tooltip>
        </l-marker>

        <l-marker
          :lat-lng="[-19.163073, -46.06338]"
          draggable
          @moveend="log('moveend')"
        >
          <l-popup> OPERANDO </l-popup>
          <l-tooltip>GT-2001</l-tooltip>
        </l-marker>

        <l-marker
          :lat-lng="[-19.134644, -46.087206]"
          draggable
          @moveend="log('moveend')"
        >
          <l-popup> OPERANDO </l-popup>
          <l-tooltip>GT-2002</l-tooltip>
        </l-marker>

        <l-marker
          :lat-lng="[-19.134644, -46.087206]"
          draggable
          @moveend="log('moveend')"
        >
          <l-popup> OPERANDO </l-popup>
          <l-tooltip>GT-2003</l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </div>
  <div id="spanbtn">
    <span
      >Clique no botão referente ao equipamento na qual deseja verificar o
      histórico de estados</span
    >
  </div>

  <div class="btnsHistorico">

    <div id="caminhaoCarga">
      <router-link to="/caminhaodecarga">
      <button>CAMINHÃO DE CARGA</button>
      </router-link> 
    </div>
    
    <div id="harvester">
      <router-link to="/harvester">
      <button>HARVESTER</button>
      </router-link> 
    </div>

    <div id="garraTracadora">
      <router-link to="/garratracadora">
      <button>GARRA TRAÇADORA</button>
      </router-link> 
    </div>

  </div>

  <footer-component />
</template>
<script>
import FooterComponent from "../components/FooterComponent.vue";
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
    FooterComponent,
  },
  data() {
    return {
      zoom: 2,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  methods: {
    log(a) {
      console.log(a);
    },
  },
  
};
</script>

<style scoped >
div#mainContainer {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
}

footer {
  position: fixed;
}
body {
  background: linear-gradient(45deg, #475c6b, #3b4375);
  color: white;
}

tr td {
  height: 50px;
  width: 100px;
  text-transform: uppercase;
}
td {
  text-transform: uppercase;
}
.btnsHistorico {
  display: flex;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 400px;
  background-image: url("/public/img/back.jpg");
  background-position: bottom 35% right 5%;
  
}

button {
  font-size: 25px;
  border-radius: 30px;
  background: linear-gradient(to right, #8BDC8A, #227E5D);
  cursor: pointer;
  border: 0;
  text-transform: uppercase;
  padding: 10px 10px;
  margin: 5px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  transition: .5s;
  width: max-content;
  
}

#spanbtn {
  text-align: center;
  color: #FFF;
  background: #362508;
  font-size: 17px;
}


#harvester {
display: flex;
  
height: 70px;
  
}
#garraTracadora {
  display: flex;
height: 70px;
  
}
.btnsHistorico a{
  text-decoration: none;
}

button:hover{
  color: #FFFF;
}

@media screen and (max-width: 500px)
{
  a button  {
    font-size: 10px;
    text-transform: lowercase;
    height: 30px;
    
  }
  button{
    margin: 5px 20px;
    width: 110px;
    padding: 15px 30px;
    
  }
  .btnsHistorico {
  justify-content: center;
  background-position: bottom 35% right 5%;
  
}
#caminhaoCarga{
  height: 70px;
}
#spanBtn{
  font-size: 10px;
}
#spanbtn{
  font-size: 13px;
}

}
</style>