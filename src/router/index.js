import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Touchpad from "@/views/Touchpad";
import Face from "@/views/Face";
import Movie from "@/views/Movie";
import Light from "@/views/Light";
import News from "@/views/News";
import Scenario from "@/views/Scenario";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/touchpad',
    name: 'Touchpad',
    component: Touchpad
  },
  {
    path: '/movies',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/face',
    name: 'Face',
    component: Face
  },
  {
    path: '/scenario',
    name: 'Scenario',
    component: Scenario
  },
  {
    path: '/light',
    name: 'Light',
    component: Light
  },
  {
    path: '/',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Index')
  }
]

const router = new VueRouter({
  routes
})

export default router
