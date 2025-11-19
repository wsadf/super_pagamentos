import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Home
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Home
  },
  {
    path: '/cobrancas',
    name: 'Cobranças',
    component: Home
  },
  {
    path: '/carteira',
    name: 'Carteira',
    component: Home
  },
  {
    path: '/vendedores',
    name: 'Vendedores',
    component: Home
  },
  {
    path: '/antecipacoes',
    name: 'Antecipações',
    component: Home
  },
  {
    path: '/gestao',
    name: 'Gestão',
    component: Home
  },
  {
    path: '/integracoes',
    name: 'Integrações',
    component: Home
  },
  {
    path: '/configuracoes',
    name: 'Configurações',
    component: Home
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

