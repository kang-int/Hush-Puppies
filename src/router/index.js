import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home')
const PointMall = () => import('views/point-mall')
const Profile = () => import('views/profile')
const Details = () => import('views/details')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home-page',
    component: Home
  },
  {
    path: '/mall',
    name: 'point-mall',
    component: PointMall
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/product/:id',
    name: 'details',
    component: Details,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
