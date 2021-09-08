import Vue from 'vue'
import App from './App.vue'

// If you need to reference 'L', such as in 'L.icon', then be sure to
// explicitly import 'leaflet' into your component
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'MyAwesomeMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
};
import 'leaflet/dist/leaflet.css';
new Vue({
  el: '#app',
  render: h => h(App)
})
