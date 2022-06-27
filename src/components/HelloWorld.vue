<script >
import { ref, watch } from 'vue'
import equipment from '../../data/equipment.json'
import equipmentPositionHistory from '../../data/equipmentPositionHistory.json'
import equipmentState from '../../data/equipmentState.json'
import equipmentStateHistory from '../../data/equipmentStateHistory.json'
import {format, parseISO} from 'date-fns'

export default{
   props:{
   selected: String
   },
   setup(props) {
      const states = ref([])
      const currentEquipment = ref('')
      
      
      console.log(props.selected)
      watch(props,() => {
         currentEquipment.value = props.selected
         states.value = equipmentStateHistory.find((currentEquipment) => currentEquipment.equipmentId == props.selected).states
      })

      return {
         currentEquipment,
         equipment,
         equipmentState,
         equipmentStateHistory,
         states,
         format,
         parseISO
      }
   }
}
</script>

<template>


    <div id="scroll" class="h-[520px] w-full p-16 rounded-2xl shadow-2xl bg-gradient-to-r from-blue-800 to-blue-600 overflow-y-scroll">
      <h2 class="lg:text-4xl text-2xl font-semibold text-blue-200">{{equipment.find((equipmentName) => equipmentName.id == currentEquipment) ? equipment.find((equipmentName) => equipmentName.id == currentEquipment).name : "Selecione um equipamento"}}</h2>
      <p class="text-xl text-gray-400 pb-4">{{equipment.find((equipmentName) => equipmentName.id == currentEquipment) ? "Histórico do equipamento" : ""}}</p>
      <img src="equipmentDefault.png" alt="" v-if="!equipment.find((equipmentName) => equipmentName.id == currentEquipment)">


      <div v-for="state in states" :key="state.Id"
      class="text-gray-400 font-light text-base flex gap-5 items-center py-2">

      <div v-if="equipmentState.find((stateInfo) => stateInfo.id == state.equipmentStateId).name == 'Operando'" class="w-2 h-2 rounded-full bg-green-400"> </div>
      <div v-if="equipmentState.find((stateInfo) => stateInfo.id == state.equipmentStateId).name == 'Parado'" class="w-2 h-2 rounded-full bg-red-400"> </div>
      <div v-if="equipmentState.find((stateInfo) => stateInfo.id == state.equipmentStateId).name == 'Manutenção'" class="w-2 h-2 rounded-full bg-orange-400"> </div>

         {{equipmentState.find((stateInfo) => stateInfo.id == state.equipmentStateId).name}} -
         {{format(parseISO(state.date), 'dd/MM/yyyy HH:mm')}} 
         
      </div>

   </div>

</template>