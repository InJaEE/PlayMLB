import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/MainView.vue'),
        },
        {
            path: '/login',
            component: () => import('@/views/LoginView.vue'),
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupView.vue'),
        },
        {
            path: '/board',
            component: () => import('@/views/BoardView.vue'),
        },
        {
            path: '/stat',
            component: () => import('@/views/StatView.vue'),
        },
        {
            path: '/info',
            component: () => import('@/views/InfoView.vue'),
        }
    ]
});

export default router;