<template>
  <div>
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> </v-card-title>
        <v-card-text style="padding: 20px; background-color: #c3c3c3">
          <div
            style="
              border-radius: 8px;
              background-color: white;
              margin-bottom: 20px;
            "
          >
            <l-map style="height: 300px" :zoom="zoom" :center="center" v-if="dialog">
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              ></l-tile-layer>
              <l-marker :lat-lng="equipmentSelected.posicoes"></l-marker>
            </l-map>            
          </div>
          <!-- <div
            style="border-radius: 8px; background-color: white"
            elevation="4"
          >
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Data</th>
                    <th class="text-left">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(estados, i) in equipmentSelected.stateHistory"
                    :key="i"
                  >
                    <td>{{ dataBr(estados.dataFormatada) }}</td>
                    <td>
                      <span :style="`color: ${estados.equipamentState.color}`">
                        {{ estados.equipamentState.name }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div> -->
          <div id="dataTable">
          <v-data-table                   
            :headers="headers"
            :items="equipmentSelected.stateHistory"
            :items-per-page="15"           
            class="elevation-1" 
                
          >
          </v-data-table>      
  
        </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog"> Fechar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
export default {
  name: "LeafletComp",
  data() {
    return {
      dialog: false,
      cloneDialog: false,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 12,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159], 
      headers: [
        {
          text: "Data",
          align: "start",
          sortable: true,
          value: "dataFormatada",
        },
        {
          text: "Estado",
          value: "equipamentState.name",
        },
      ]     
    };
  },
  methods: {
    switchDialogFunc() {
      this.dialog = !this.dialog;
    },
    closeDialog() {
      this.dialog = !this.dialog;
      this.$emit("closeDialog", this.dialog);
    },
    dataBr(data) {
      return data.toLocaleDateString("pt-BR", {
        month: "long",
        day: "numeric",
        year: "numeric",
        
      });
    },
  },
  props: {
    equipmentSelected: Object,
    switchDialog: Boolean,
  },
  watch: {
    switchDialog(newValue) {
      this.dialog = newValue;
    },
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
};
</script>

<style>
</style>
