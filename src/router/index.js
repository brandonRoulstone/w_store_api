import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/products/:productId',
    name: 'product',
    component: () => import('../views/SingleView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/adminView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
