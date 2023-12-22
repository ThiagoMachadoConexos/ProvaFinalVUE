import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectView from '../views/ProjectView'
import ExecutionView from '../views/ExecutionView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastrar',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/projetos',
    name: 'projectsList',
    component: ProjectsView
  },
  {
    path: '/projeto/:id',
    name: 'project',
    params: true,
    component: ProjectView
  },
  {
    path: '/execucao',
    name: 'execution',
    component: ExecutionView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
