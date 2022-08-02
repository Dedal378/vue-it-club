import { createRouter, createWebHistory } from 'vue-router'
import PaymentView from '/src/views/PaymentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'router-link-exact-active',
  linkExactActiveClass: 'router-link-exact-active',
  routes: [
    {
      path: '/',
      name: 'pay',
      component: PaymentView,
    },
    {
      path: '/done',
      name: 'done',
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
      },
      component: () => import('../views/PaymentDoneView.vue'),
    },
    {
      path: '/select',
      name: 'select',
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
      },
      component: () => import('../views/SelectContactView.vue'),
    },
    {
      path: '/method',
      name: 'method',
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
      },
      component: () => import('../views/SelectMethodView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
      },
      component: () => import('../views/NewContactView.vue'),
    },
    {
      path: '/add-card',
      name: 'card',
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
      },
      component: () => import('../views/NewCardView.vue'),
    },
  ],
})

export default router
