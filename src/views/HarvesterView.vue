<template>
<div class="mainContainer">
<h1>HARVESTER</h1>
</div>
  
  <div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId" v-show="position.equipmentId == '491b983b-950c-4a88-942d-487e99b92540'"
  >
    <table border="2" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '491b983b-950c-4a88-942d-487e99b92540' ">{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>    
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '491b983b-950c-4a88-942d-487e99b92540'">Harvester</td>
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
        <td v-show="position.equipmentId == '491b983b-950c-4a88-942d-487e99b92540' ">{{ index }}</td>
        <td v-show="position.equipmentId == '491b983b-950c-4a88-942d-487e99b92540' ">{{ Getstate.date }}</td>
        <td v-show="position.equipmentId == '491b983b-950c-4a88-942d-487e99b92540' ">{{ Getstate.equipmentStateId }}</td>
        <td v-if="Getstate.equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'" style="background: #e74c3c">Manutenção</td>
        <td v-else-if="Getstate.equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'" style="background: #2ecc71">Operando</td>
        <td v-else style="background: #f1c40f">Parado</td>

        
      </tr>
      </table>
      </div>

<div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId" v-show="position.equipmentId == '39317fcb-79e7-4e7e-83dc-723a9b63633c'"
  >
    <table border="2" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '39317fcb-79e7-4e7e-83dc-723a9b63633c' ">{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '39317fcb-79e7-4e7e-83dc-723a9b63633c'">Harvester</td>
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
        

        <td v-show="position.equipmentId == '39317fcb-79e7-4e7e-83dc-723a9b63633c' ">{{ index }}</td>
        <td v-show="position.equipmentId == '39317fcb-79e7-4e7e-83dc-723a9b63633c' ">{{ Getstate.date }}</td>
        <td v-show="position.equipmentId == '39317fcb-79e7-4e7e-83dc-723a9b63633c' ">{{ Getstate.equipmentStateId }}</td>
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
    name:"HarvesterView",
    components:{
        FooterComponent
    },
    data() {
    return {
      EquipmentStateHistoryData: [],
      
    };
  },
  mounted() {
    fetch("http://localhost:3000/equipmentStateHistory")
      .then((resp) => resp.json())
      .then((data) => (this.EquipmentStateHistoryData = data))
      .then((json) => console.log(json));
  },
}
</script>

<style scoped>
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
</style>