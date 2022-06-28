<template>
  <div class="mainContainer">
    <h1>HISTÓRICO DE ESTADOS</h1>
  </div>
  <div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId"
  >
    <table border="1" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;">{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == 'a7c53eb1-4f5e-4eba-9764-ad205d0891f9'">Caminhão de carga</td>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-else-if="position.equipmentId == '1c7e9615-cc1c-4d72-8496-190fe5791c8b'">Caminhão de carga</td>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-else-if="position.equipmentId == '2b5796cb-21c1-480e-8886-4498ea593a65'">Caminhão de carga</td>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-else-if="position.equipmentId == '1d222cdc-01dd-4caa-8934-5351d3995cfb'">Caminhão de carga</td>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-else-if="position.equipmentId == '491b983b-950c-4a88-942d-487e99b92540'">Harvester</td>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-else-if="position.equipmentId == '39317fcb-79e7-4e7e-83dc-723a9b63633c'">Harvester</td>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-else-if="position.equipmentId == 'c79ef1de-92f3-4edd-bd55-553056640449'">Garra traçadora</td>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-else-if="position.equipmentId == 'b7aaba00-13f7-44a0-8bf1-bc163afcf9d8'">Garra traçadora</td>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-else>Garra traçadora</td>
      </tr>

      <tr class="dados">
        <th style="background: #7FB388">ESTADO INDEX</th>
        <th style="background: #7FB388">DATA</th>
        <th style="background: #7FB388">ESTADO ID</th>
        <th style="background: #7FB388">ESTADO ATUAL</th>
      </tr>

      <tr
        class="dados"
        v-for="(Getstate, index) in position.states"
        :key="Getstate"
        align="left"
      >
        <td>{{ index }}</td>
        <td>{{ Getstate.date }}</td>
        <td>{{ Getstate.equipmentStateId }}</td>
        <td v-if="Getstate.equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'" style="background: #e74c3c">Manutenção</td>
        <td v-else-if="Getstate.equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'" style="background: #2ecc71">Operando</td>
        <td v-else style="background: #f1c40f">Parado</td>
      </tr>

    
    </table>
    </div>
    <footer-component />
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
export default {
  data() {
    return {
      positionsData: [],
      EquipmentStateHistoryData: [],
      equipment: [],
      equipmentModel: [],
      equipmentState: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/equipmentPositionHistory")
      .then((resp) => resp.json())
      .then((data) => (this.positionsData = data))
      .then((json) => console.log(json));

    fetch("http://localhost:3000/equipmentStateHistory")
      .then((resp) => resp.json())
      .then((data) => (this.EquipmentStateHistoryData = data))
      .then((json) => console.log(json));

    fetch("http://localhost:3000/equipment")
      .then((resp) => resp.json())
      .then((data) => (this.equipment = data))
      .then((json) => console.log(json));

    fetch("http://localhost:3000/equipmentModel")
      .then((resp) => resp.json())
      .then((data) => (this.equipmentModel = data))
      .then((json) => console.log(json));

    fetch("http://localhost:3000/equipmentState")
      .then((resp) => resp.json())
      .then((data) => (this.equipmentState = data))
      .then((json) => console.log(json));
  },
  components: {
    FooterComponent,
  },
};
</script>

<style scoped>
li {
  margin: 5px;
  color: blue;
}
ul {
  list-style-type: circle;
}
table {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-content: center;
  margin-left: 0;
  flex-wrap: wrap;
  border-collapse: collapse;
  width: 100%;
}

table td {
  min-width: 400px;
  text-align: center;
}

table th {
  width: 400px;
  text-align: center;
}
.mainContainer{
  margin: 15px 0;
}
@media screen and (max-width: 720px){
  
h1{
  font-size: 16px;
}

   table td{
    min-width: 170px;
    font-size: 7px;
  }

  table th{
    width: 170px;
    font-size: 10px;
  }

  tr.dados{
    width: 720px;
  }
   
}


</style>
