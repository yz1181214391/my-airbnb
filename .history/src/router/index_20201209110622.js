import Vue from 'vue'
import VueRouter from 'vue-router'

import Language from '../views/Language.vue'
import Currency from '../views/Currency.vue'
import Enter from '../views/Enter.vue'
import Experience from '../views/Experience.vue'
import Help from '../views/Help.vue'
import History from '../views/History.vue'
import Mobile from '../views/Mobile.vue'
import Register from '../views/Register.vue'
import Room from '../views/Room.vue'



Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Language',
  //   component: Language
  // },
  // {
  //   path: '/Currency',
  //   name: 'Currency',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Currency.vue')
  // }
  { path : '/Language', component : Language},
  { path : '/Currency', component : Currency},
  { path : '/Enter', component : Enter},
  { path : '/Experience', component : Experience},
  { path : '/Help', component : Help},
  { path : '/History', component : History},
  { path : '/Mobile', component : Mobile},
  { path : '/Register', component : Register},
  { path : '/Room', component : Room},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
