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
    component: Home
  },
  {
    path: '/mall',
    component: PointMall
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/product/:id',
    component: Details,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
