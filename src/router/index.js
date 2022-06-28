import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CaminhaoDeCargaView from '../views/CaminhaoDeCargaView'
import HarvesterView from '../views/HarvesterView'
import GarraTracadoraView from '../views/GarraTracadoraView'
import NotFoundView from '../views/NotFoundView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

  },
  {
    path: '/caminhaodecarga',
    name: 'caminhaodecarga',
    component: CaminhaoDeCargaView,

  },
  {
    path: '/harvester',
    name: 'harvester',
    component: HarvesterView,

  },
  {
    path: '/garratracadora',
    name: 'garratracadora',
    component: GarraTracadoraView,

  },
  {
    path: '/historico',
    name: 'historico',
    // route level code-splitting
    // this generates a separate chunk (historico.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "historico" */ '../views/HistoricoView.vue'),



  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
