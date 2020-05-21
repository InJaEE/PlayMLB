import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'main',
			component: () => import('@/views/MainView.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/LoginView.vue'),
		},
		{
			path: '/signup',
			name: 'signup',
			component: () => import('@/views/SignupView.vue'),
		},
		{
			path: '/post',
			name: 'post',
			component: () => import('@/views/PostView.vue'),
		},
		{
			path: '/info',
			name: 'info',
			component: () => import('@/views/InfoView.vue'),
			children: [
				{
					path: ':type',
					name: 'info/type',
					children: [
						{
							path: ':detail',
							name: 'info/type/detail',
						},
					],
				},
			],
		},
		{
			path: '/stat',
			name: 'stat',
			component: () => import('@/views/StatView.vue'),
			children: [
				{
					path: ':type',
					name: 'stat/type',
				},
			],
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/AboutView.vue'),
		},
		{
			path: '/userInfo',
			component: () => import('@/views/UserInfoView.vue'),
			meta: {
				auth: true,
			},
		},
		{
			path: '*',
			redirect: '/',
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		alert('로그인이 필요합니다.');
		next('/login');
		return;
	}
	next();
});

export default router;
