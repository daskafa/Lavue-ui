import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Homepage from '../views/Homepage.vue'
import Login from '../views/Login.vue'

const routes = [{
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router