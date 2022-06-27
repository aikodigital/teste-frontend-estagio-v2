<template>
  <div class="text-center">
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
            <GChart
              v-if="dialog"
              :settings="settings"
              :type="chartType"
              :data="equipmentSelected.posicoes"
              :options="options"
            />
          </div>
          <div
            style="border-radius: 8px; background-color: white"
            elevation="4"
          >
            <div id="dataTable">
              <v-data-table
                :headers="headers"
                :items="equipmentSelected.stateHistory"
                :items-per-page="15"
                class="elevation-1"
              >
                <template v-slot:[`item.equipamentState.name`]="{ item }">
                  <v-chip :color="item.equipamentState.color" dark>
                    {{ item.equipamentState.name }}
                  </v-chip>
                </template>
                <template v-slot:[`item.dataFormatada`]="{ item }">
                  {{ dataBr(item.dataFormatada) }}
                </template>
              </v-data-table>
            </div>
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
import { GChart } from "vue-google-charts/legacy";
import myMixins from "../mixins/myMixins";
export default {
  name: "MapComp",
  mixins: [myMixins],
  data() {
    return {
      dialog: false,
      cloneDialog: false,
      chartType: "Map",
      settings: {
        packages: ["map"],
      },
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
      ],
    };
  },
  methods: {
    switchDialogFunc() {
      this.dialog = !this.dialog;
    },
    closeDialog() {
      this.dialog = !this.dialog;
      this.$emit("closeDialog", this.dialog);
    }    
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
    GChart,
  },
};
</script>
<style>
</style>

