<template>
  <nav-component :logo="logo_src" :alt="alt_name" />
  
  <router-view />
  



  
  
</template>
<script>

import NavComponent from "./components/NavComponent.vue";



export default {
  components: {
    
    NavComponent,
    
    
    
    
  },
  data() {
    return {
      
      logo_src: "img/aiko.png",
      alt_name: "AIKO",
    };
  },
  
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

h1{
  text-align: center;
}


</style>