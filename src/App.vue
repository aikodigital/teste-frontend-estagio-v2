<template>
   <div id="app">
    <div class="row">
      <div class="col-12">
        <mymap style="min-height: 400px;"></mymap>
      </div>
    </div>
      <div class="container">
        <equipmentlist> </equipmentlist>
      </div>
  </div>
</template>

<script>
import mymap from './components/mymap.vue'
import equipmentlist from './components/equipmentlist.vue'

export default {
  name: 'App',
  components: {
    equipmentlist,
    mymap,
  }
}
</script>

<style>
html, body {
    height: 100%;
    width: 100vw;
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 100%;
    width: 100%;
  }
</style>
