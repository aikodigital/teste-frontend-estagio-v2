<template>
  <v-app id="v-app">
    <div id="app">
      <div id="header">
        <HeaderComp />
      </div>
      <div id="divTextField">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="search"
            label="Pesquisar equipamento"
            placeholder="Nome ou estado"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </div>
      <div id="container">
        <div id="dataTable">
          <v-data-table
            @dblclick:row="dblClickRow"
            :headers="headers"
            :items="equipamentos"
            :items-per-page="7"
            :search="search"
            class="elevation-1"
          >
            <template
              v-slot:[`item.stateHistory[0].equipamentState.name`]="{ item }"
            >
              <v-chip :color="item.stateHistory[0].equipamentState.color" dark>
                {{ item.stateHistory[0].equipamentState.name }}
              </v-chip>
            </template>
            <template v-slot:[`item.stateHistory[0].dataFormatada`]="{ item }">
              {{ dataBr(item.stateHistory[0].dataFormatada, false) }}
            </template>
          </v-data-table>
        </div>
      </div>
      <map-comp
        :switchDialog="switchDialog"
        :equipmentSelected="equipmentSelected"
        @closeDialog="closeSwitchDialog"
      />
    </div>
    <h1>{{ Info }}</h1>
    <FooterComp />
  </v-app>
</template>

<script>
import MapComp from "./components/MapComp.vue";
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import equipament from "./data/equipment.json";
import equipamentModel from "./data/equipmentModel.json";
import positionHistory from "./data/equipmentPositionHistory.json";
import equipamentState from "./data/equipmentState.json";
import equipamentStateHistory from "./data/equipmentStateHistory.json";
import myMixins from "./mixins/myMixins";

export default {
  name: "App",
  mixins: [myMixins],
  data() {
    return {
      search: null,
      switchDialog: false,
      equipmentSelected: {},
      options: {
        enableScrollWheel: true,
      },
      equipamentos: equipament.map((e) => {
        let model = equipamentModel.filter(
          (em) => em.id === e.equipmentModelId
        )[0];
        let position = positionHistory
          .filter((ph) => ph.equipmentId === e.id)[0]
          .positions.map((p) => [
            p.lat,
            p.lon,
            p.date.slice(0, 10).split("-").reverse().join("/"),
          ]);
        let stateHistory = equipamentStateHistory
          .filter((esh) => esh.equipmentId === e.id)[0]
          .states.map((s) => {
            let dataFormatada = new Date(s.date.slice(0, 19));
            return {
              ...s,
              dataFormatada,
              equipamentState: equipamentState.filter(
                (es) => es.id === s.equipmentStateId
              )[0],
            };
          })
          .sort((a, b) => b.dataFormatada - a.dataFormatada);
        let matriz = [["latitude", "longitude", "data"], ...position];
        return {
          ...e,
          model,
          posicoes: matriz,
          stateHistory,
        };
      }),
      headers: [
        {
          text: "Nome do Equipamento",
          align: "start",
          sortable: true,
          value: "model.name",
        },
        {
          text: "Última Data",
          value: "stateHistory[0].dataFormatada",
        },
        {
          text: "Estado do Equipamento",
          value: "stateHistory[0].equipamentState.name",
        },
      ],
    };
  },
  components: {
    MapComp,
    FooterComp,
    HeaderComp,
  },
  methods: {    
    dblClickRow(_, { item }) {
      this.equipmentSelected = item;
      this.switchDialog = !this.switchDialog;
      console.log(item);
    },
    closeSwitchDialog(event) {
      this.switchDialog = event;
    },
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 646px;
}

#divTextFieldTable {
  width: 100%;
}

#v-app {
  height: 500px;
  position: relative;
}

#dataTable {
  width: 100%;
}

>>> .v-application--wrap {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  max-width: 100%;
  position: relative;
}
</style>
