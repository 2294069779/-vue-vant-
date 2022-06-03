import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  { path: '/', redirect: '/lhl' },
  { path: '/lhl', component: () => import('../views/lhl-ing.vue') },
  { path: '/cpp', component: () => import('../views/cpp-ing.vue') },
  // { path: '/xh', component: () => import('../views/xh-ing.vue') },
  { path: '/yj', component: () => import('../views/yj-ing.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
