<template>
  <div class="leaflet_map">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="[-51.9252, -14.235]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
      <l-marker
        v-for="(position, index) in currentEquipmentPosition"
        :key="index"
        :lat-lng="[position.lat, position.lon]"
      >
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlLayers,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

import equipmentPosition from "../../data/equipmentPositionHistory.json";

const currentEquipmentPosition = equipmentPosition.map((equipment) => {
  return equipment.positions.pop();
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers,
  },
  data() {
    return {
      zoom: 2,
      equipmentPosition,
      currentEquipmentPosition,
    };
  },
};
</script>

<style>
.leaflet_map {
  height: 100vh;
}
</style>