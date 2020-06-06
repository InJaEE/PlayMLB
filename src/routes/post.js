export default [
	{
		path: '/post',
		name: 'post',
		component: () => import('@/views/post/PostView.vue'),
	},
	{
		path: '/post/view/:postId',
		name: 'postDetail',
		component: () => import('@/views/post/PostDetailView.vue'),
	},
	{
		path: '/post/new',
		name: 'postCreate',
		meta: {
			auth: true,
		},
		component: () => import('@/views/post/PostWrite.vue'),
	},
	{
		path: '/post/edit/:postId',
		name: 'postEdit',
		component: () => import('@/views/post/PostEdit.vue'),
	},
];
