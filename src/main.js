import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueGeolocation from 'vue-browser-geolocation'
import 'leaflet/dist/leaflet.css';
import * as VueGoogleMaps from "vue2-google-maps"
Vue.config.productionTip = false


Vue.config.productionTip = false
Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvyepjtTiK5F440ieMLureYn8QjiTOQZE',
    libraries: "places"
  }
})





new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
