<template>
  <div id="app">
    <Header/>
    <Map/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Map from './components/ViewMap.vue'
export default {
  components: {
    Header,
    Map
  },
};
</script>

<style>
  body {
    margin: 0;
  }
</style>