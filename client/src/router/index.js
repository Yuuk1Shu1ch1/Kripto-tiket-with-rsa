import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/encrypt',
      name: 'encrypt',
      component: () => import('../views/EncryptView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Homepage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/invoice/:id',
      name: 'invoice',
      component: () => import('../views/Invoice.vue')
    }
  ]
})

export default router
