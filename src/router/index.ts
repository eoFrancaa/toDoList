import { createRouter, createWebHistory } from 'vue-router'

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
    }
  ],
})

export default router
