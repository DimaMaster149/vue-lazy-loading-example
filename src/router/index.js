import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(
  /* webpackChunkName: "home" */'../views/Home.vue');
const UserProfile = () => import(
  /* webpackChunkName: "user-profile" */'../views/UserProfile.vue');

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
