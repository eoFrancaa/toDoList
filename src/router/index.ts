import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/homeView.vue'),
    }, 
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/dashboardView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/loginView.vue'),
    }
  ],
})
router.beforeEach((to)=>{


const auth = useAuthStore()



if(

to.path === '/dashboard'

&&

!auth.logado

){

return '/login'

}



})

export default router
