import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import UserForm from '../components/users/UserForm.vue'
import UserList from '../components/users/UserList.vue' 
import Carrinho from '../views/Carrinho.vue'
import Products from '../views/Produtos.vue'
import Promocoes from '../views/Promocoes.vue'
import Sobre from '../views/Sobre.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/carrinho', 
    name: 'Carrinho',
    component: Carrinho 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/usuarios/cadastrar',
    name: 'UserForm',
    component: UserForm
  },
  {
    path: '/usuarios',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/products',
    name: 'Produtos',
    component: Products
  },
  {
    path: '/promoções',
    name: 'Promocoes',
    component: Promocoes
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router