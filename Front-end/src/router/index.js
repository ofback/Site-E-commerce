import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../services/auth'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import UserForm from '../components/users/UserForm.vue'
import UserList from '../components/users/UserList.vue' 
import Carrinho from '../views/Carrinho.vue'
import Products from '../views/Produtos.vue'
import Promocoes from '../views/Promocoes.vue'
import Sobre from '../views/Sobre.vue'
import Favoritos from '../views/Favoritos.vue'
import CadastroProdutos from '../views/admin/CadastroProdutos.vue'

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
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: Favoritos
  },
  {
    path: '/admin/produtos/cadastrar',
    name: 'CadastroProdutos',
    component: CadastroProdutos,
    meta: { requiresAdmin: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Proteção de rotas
router.beforeEach((to, from, next) => {
  // Verifica se a rota requer admin
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    // Verifica se é admin
    if (!auth.isAdminUser()) {
      // Se não for admin, redireciona para login
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router