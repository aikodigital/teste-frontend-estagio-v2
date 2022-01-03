<template>
  <div ref="map-root" style="width: 100%; height: 100%">

  </div>
</template>

<script>
  // Open Layers Imports
  import View from 'ol/View'
  import Map from 'ol/Map'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'
  import 'ol/ol.css'
  import VectorLayer from 'ol/layer/Vector'
  import VectorSource from 'ol/source/Vector'
  import GeoJSON from 'ol/format/GeoJSON'

  export default {
    data(){
      return{
        dataZoom: [-4914490.1927570, -2557570.1927570],
        dados: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-49.14490, -22.57570], //Não foi possível fazer o binding deste parâmetro
                [-46.14490, -21.57570],
                [-44.14490, -23.57570],
              ]
            ]
          }
        }
      }
    },
    name: 'mymap',
    components: {},
    props: {},
    mounted() {
      // a feature (geospatial object) is created from the GeoJSON
      const feature = new GeoJSON().readFeature(this.dados, {
        // this is required since GeoJSON uses latitude/longitude,
        // but the map is rendered using “Web Mercator”
        featureProjection: 'EPSG:3857'
      });
      // a new vector layer is created with the feature
      const vectorLayer = new VectorLayer({
        source: new VectorSource({
        features: [feature],
        }),
      })
      // this is where we create the OpenLayers map
      new Map({
        // the map will be created using the 'map-root' ref
        target: this.$refs['map-root'],
        layers: [
          // adding a background tiled layer
      new TileLayer({
            source: new OSM() // tiles are served by OpenStreetMap
          }),
           // the vector layer is added above the tiled OSM layer
          vectorLayer
        ],
        // the map view will initially show the whole world
      view: new View({
          zoom: 7,
          center: this.dataZoom,
          constrainResolution: true
        }),
      })
    },
  }
</script>

<style scoped>
.map-root {
  width: 100%; 
  height: 100%
}
</style>
