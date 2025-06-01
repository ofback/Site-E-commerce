import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import UserForm from '../components/users/UserForm.vue'
import UserList from '../components/users/UserList.vue' // crie esse depois

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
