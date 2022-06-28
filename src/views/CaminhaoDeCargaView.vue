<template>
<div class="mainContainer">

     <h1>CAMINHÃO DE CARGA</h1>
    </div>
  
  <div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId" v-show="position.equipmentId == 'a7c53eb1-4f5e-4eba-9764-ad205d0891f9'" 
  >
    <table border="2" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == 'a7c53eb1-4f5e-4eba-9764-ad205d0891f9' ">{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>
        
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == 'a7c53eb1-4f5e-4eba-9764-ad205d0891f9'">Caminhão de carga</td>
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
        <td v-show="position.equipmentId == 'a7c53eb1-4f5e-4eba-9764-ad205d0891f9' ">{{ index }}</td>
        <td v-show="position.equipmentId == 'a7c53eb1-4f5e-4eba-9764-ad205d0891f9' ">{{ Getstate.date }}</td>
        <td v-show="position.equipmentId == 'a7c53eb1-4f5e-4eba-9764-ad205d0891f9' ">{{ Getstate.equipmentStateId }}</td>
        <td v-if="Getstate.equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'" style="background: #e74c3c">Manutenção</td>
        <td v-else-if="Getstate.equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'" style="background: #2ecc71">Operando</td>
        <td v-else style="background: #f1c40f">Parado</td>

      </tr>

    </table>
  </div>

<div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId" v-show="position.equipmentId == '1c7e9615-cc1c-4d72-8496-190fe5791c8b'" 
  >
    <table border="2" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '1c7e9615-cc1c-4d72-8496-190fe5791c8b' ">{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>
        
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '1c7e9615-cc1c-4d72-8496-190fe5791c8b'">Caminhão de carga</td>
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
        <td v-show="position.equipmentId == '1c7e9615-cc1c-4d72-8496-190fe5791c8b' ">{{ index }}</td>
        <td v-show="position.equipmentId == '1c7e9615-cc1c-4d72-8496-190fe5791c8b' ">{{ Getstate.date }}</td>
        <td v-show="position.equipmentId == '1c7e9615-cc1c-4d72-8496-190fe5791c8b' ">{{ Getstate.equipmentStateId }}</td>
        <td v-if="Getstate.equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'" style="background: #e74c3c">Manutenção</td>
        <td v-else-if="Getstate.equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'" style="background: #2ecc71">Operando</td>
        <td v-else style="background: #f1c40f">Parado</td>

      </tr>
    </table>
  </div>
  
<div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId" v-show="position.equipmentId == '2b5796cb-21c1-480e-8886-4498ea593a65'" 
  >
    <table border="2" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '2b5796cb-21c1-480e-8886-4498ea593a65' ">{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>
        
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '2b5796cb-21c1-480e-8886-4498ea593a65'">Caminhão de carga</td>
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
        <td v-show="position.equipmentId == '2b5796cb-21c1-480e-8886-4498ea593a65' ">{{ index }}</td>
        <td v-show="position.equipmentId == '2b5796cb-21c1-480e-8886-4498ea593a65' ">{{ Getstate.date }}</td>
        <td v-show="position.equipmentId == '2b5796cb-21c1-480e-8886-4498ea593a65' ">{{ Getstate.equipmentStateId }}</td>
        <td v-if="Getstate.equipmentStateId == '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f'" style="background: #e74c3c">Manutenção</td>
        <td v-else-if="Getstate.equipmentStateId == '0808344c-454b-4c36-89e8-d7687e692d57'" style="background: #2ecc71">Operando</td>
        <td v-else style="background: #f1c40f">Parado</td>

      </tr>
    </table>
  </div>

<div
    class="tabela"
    v-for="position in EquipmentStateHistoryData"
    :key="position.equipmentId" v-show="position.equipmentId == '1d222cdc-01dd-4caa-8934-5351d3995cfb'" 
  >
    <table border="2" min-height="100%">
      <tr>
        <th style="width: 1600px; background: #96DACA">ID EQUIPAMENTO</th>
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '1d222cdc-01dd-4caa-8934-5351d3995cfb' ">{{ position.equipmentId }}</td>
      </tr>

      <tr>
        <th style="width: 1600px; background: #96DACA">NOME DO EQUIPAMENTO</th>
        
      </tr>

      <tr>
        <td style="width: 1600px; background: #000; color: #FFFF;" v-if="position.equipmentId == '1d222cdc-01dd-4caa-8934-5351d3995cfb'">Caminhão de carga</td>
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
        <td v-show="position.equipmentId == '1d222cdc-01dd-4caa-8934-5351d3995cfb' ">{{ index }}</td>
        <td v-show="position.equipmentId == '1d222cdc-01dd-4caa-8934-5351d3995cfb' ">{{ Getstate.date }}</td>
        <td v-show="position.equipmentId == '1d222cdc-01dd-4caa-8934-5351d3995cfb' ">{{ Getstate.equipmentStateId }}</td>
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
  name: "CaminhaoDeCarga",
  components: {
    FooterComponent,
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
};
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