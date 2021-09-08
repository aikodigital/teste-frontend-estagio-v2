<template>
  <div id="appMain">
  <Header/>
    <div class="leaflet">
      <LeafletMap/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import LeafletMap from './components/leafletMap.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
export default {
components: {
  LeafletMap,
  Header,
  Footer
}
}
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#appMain {
  display: flex;
  flex-direction: column;
}

img {
  display: block;
  max-width: 100%;
}
</style>