import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Forgot from './components/Forgot.vue'

const routes = [
    { path: '/', component: Home,meta: { requiresAuth: true },  },
    { path: '/login', component: Login },
    {path: '/register', component: Register},
    {path: '/forgot', component: Forgot}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem("user_id");
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next("/login");
    } else {
      next();
    }
  });

export default router
