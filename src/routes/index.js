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
			path: '/board',
			name: 'board',
			component: () => import('@/views/BoardView.vue'),
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
							// beforeEnter: (to, from, next) => {
							// 	const playerId = to.params.detail;
							// 	if (playerId !== 'al' && playerId !== 'nl') {
							// 		store.commit('RESET_PLAYER_DETAIL');
							// 		store.dispatch('FETCH_PLAYER_DATA', playerId);
							// 	}
							// 	next();
							// },
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
	],
});

router.beforeEach((to, from, next) => {
	//console.log('#', to);
	//console.log('$', from);
	//console.log('%', next);
	next();
});

export default router;
