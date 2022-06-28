<template>
<h1>LOCALIZAÇÃO DE EQUIPAMENTOS</h1>
  <div style="height: 50vh; width: 30vw; " >
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
      <l-marker :lat-lng="[-19.151801, -46.007759]" draggable @moveend="log('moveend')">
        <l-popup> CA-0001 </l-popup>
      </l-marker>

      <l-marker :lat-lng="[-19.195811, -45.825157]" draggable @moveend="log('moveend')">
        <l-popup> CA-0002 </l-popup>
      </l-marker>

      <l-marker :lat-lng="[-18.978732, -45.918204]" draggable @moveend="log('moveend')">
        <l-popup> CA-0003 </l-popup>
      </l-marker>

     <l-marker :lat-lng="[-19.027071, -46.004085]" draggable @moveend="log('moveend')">
        <l-popup> CA-0004 </l-popup>
      </l-marker>

      <l-marker :lat-lng="[-19.287676, -46.082552]" draggable @moveend="log('moveend')">
        <l-popup> HV-1001 </l-popup>
      </l-marker>

      <l-marker :lat-lng="[-19.172475, -46.080028]" draggable @moveend="log('moveend')">
        <l-popup> HV-1002 </l-popup>
      </l-marker>

      <l-marker :lat-lng="[-19.163073, -46.06338]" draggable @moveend="log('moveend')">
        <l-popup> GT-2001 </l-popup>
      </l-marker>

      <l-marker :lat-lng="[-19.134644, -46.087206]" draggable @moveend="log('moveend')">
        <l-popup> GT-2002 </l-popup>
      </l-marker>

      <l-marker :lat-lng="[-19.134644, -46.087206]" draggable @moveend="log('moveend')">
        <l-popup> GT-2003 </l-popup>
      </l-marker>

    </l-map>
    
  </div>
  
</template>
<script>

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
    Dataview,
    
    
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

<style scoped>
div{
   box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
}

</style>