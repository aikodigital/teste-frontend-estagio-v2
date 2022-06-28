<template>
    
    <div class="mainContainer">

     <h1>GARRA TRAÇADORA</h1>
    </div>
  
  <div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId" v-show="position.equipmentId == 'c79ef1de-92f3-4edd-bd55-553056640449'" 
  >
    <table border="2" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == 'c79ef1de-92f3-4edd-bd55-553056640449'" >{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == 'c79ef1de-92f3-4edd-bd55-553056640449'">Garra traçadora</td>
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
        <td v-show="position.equipmentId == 'c79ef1de-92f3-4edd-bd55-553056640449' ">{{ index }}</td>
        <td v-show="position.equipmentId == 'c79ef1de-92f3-4edd-bd55-553056640449' ">{{ Getstate.date }}</td>
        <td v-show="position.equipmentId == 'c79ef1de-92f3-4edd-bd55-553056640449' ">{{ Getstate.equipmentStateId }}</td>
        <td v-if="Getstate.equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'" style="background: #e74c3c">Manutenção</td>
        <td v-else-if="Getstate.equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'" style="background: #2ecc71">Operando</td>
        <td v-else style="background: #f1c40f">Parado</td>

      </tr>
    </table>
  </div>

<div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId" v-show="position.equipmentId == 'b7aaba00-13f7-44a0-8bf1-bc163afcf9d8'" 
  >
    <table border="2" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == 'b7aaba00-13f7-44a0-8bf1-bc163afcf9d8' ">{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>
      </tr>

      <tr> 
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == 'b7aaba00-13f7-44a0-8bf1-bc163afcf9d8'">Garra traçadora</td>
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
        

        <td v-show="position.equipmentId == 'b7aaba00-13f7-44a0-8bf1-bc163afcf9d8' ">{{ index }}</td>
        <td v-show="position.equipmentId == 'b7aaba00-13f7-44a0-8bf1-bc163afcf9d8' ">{{ Getstate.date }}</td>
        <td v-show="position.equipmentId == 'b7aaba00-13f7-44a0-8bf1-bc163afcf9d8' ">{{ Getstate.equipmentStateId }}</td>
        <td v-if="Getstate.equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'" style="background: #e74c3c">Manutenção</td>
        <td v-else-if="Getstate.equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'" style="background: #2ecc71">Operando</td>
        <td v-else style="background: #f1c40f">Parado</td>

       
      </tr>
    </table>
  </div>
  
<div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId" v-show="position.equipmentId == 'fe2a2e11-bfa6-46b6-990b-fd8175946b7e'" 
  >
    <table border="2" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == 'fe2a2e11-bfa6-46b6-990b-fd8175946b7e' ">{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == 'fe2a2e11-bfa6-46b6-990b-fd8175946b7e'">Garra traçadora</td>
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
        

        <td v-show="position.equipmentId == 'fe2a2e11-bfa6-46b6-990b-fd8175946b7e' ">{{ index }}</td>
        <td v-show="position.equipmentId == 'fe2a2e11-bfa6-46b6-990b-fd8175946b7e' ">{{ Getstate.date }}</td>
        <td v-show="position.equipmentId == 'fe2a2e11-bfa6-46b6-990b-fd8175946b7e' ">{{ Getstate.equipmentStateId }}</td>
        <td v-if="Getstate.equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'" style="background: #e74c3c">Manutenção</td>
        <td v-else-if="Getstate.equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'" style="background: #2ecc71">Operando</td>
        <td v-else style="background: #f1c40f">Parado</td>

        
      </tr>
    </table>
  </div>


  
    <footer-component/>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
export default {
    name:"GarraTracadoraView",
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